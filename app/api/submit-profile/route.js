import { supabaseServer } from "@/lib/supabase-server";

// ---- Helpers ----
const SHOULD_VERIFY_TURNSTILE = process.env.TURNSTILE_ENABLED === "true";

async function sha256Hex(input) {
  if (!input) return null;
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(input)
  );
  return Array.from(new Uint8Array(buf))
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("");
}

function isValidEmail(email) {
  if (!email) return true; // optional
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email).toLowerCase());
}

function isValidPhone(phone) {
  if (!phone) return true; // optional
  // angka, spasi, tanda +, dan strip; panjang minimal 8
  return /^[+0-9\s-]{8,25}$/.test(String(phone));
}

async function verifyTurnstile(token, ip) {
  // Feature flag: sementara bisa dimatikan via ENV TURNSTILE_ENABLED=false
  if (!SHOULD_VERIFY_TURNSTILE) return true;
  if (!token) return false;
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret,
          response: token,
          remoteip: ip || "",
        }),
        cache: "no-store",
      }
    );
    const data = await res.json();
    return !!data?.success;
  } catch {
    return false;
  }
}

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "";
    const body = await req.json();

    const {
      name,
      phone,
      email,
      consent = true,
      utm = {},
      client_token, // idempotency token from client
      // security helpers (client should send these)
      website, // honeypot field (should be empty)
      formStartedAt, // timestamp when form rendered (ms)
      turnstileToken,
    } = body || {};

    // 0) Honeypot
    if (website) {
      return Response.json({ error: "Rejected" }, { status: 400 });
    }

    // 1) Time-guard (min 2s sejak form tampil)
    const started = Number(formStartedAt);
    const elapsed = Date.now() - (isNaN(started) ? 0 : started);
    if (!started || isNaN(started) || elapsed < 2000) {
      return Response.json({ error: "Too fast" }, { status: 400 });
    }

    // 2) Basic validation
    if (!name || String(name).trim().length < 2) {
      return Response.json({ error: "Nama tidak valid" }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return Response.json({ error: "Email tidak valid" }, { status: 400 });
    }
    if (!isValidPhone(phone)) {
      return Response.json(
        { error: "Nomor HP/WA tidak valid" },
        { status: 400 }
      );
    }

    // 3) (Opsional) Turnstile – aktif hanya jika ENV mengizinkan
    const verified = await verifyTurnstile(turnstileToken, ip);
    if (!verified) {
      return Response.json({ error: "Verifikasi gagal" }, { status: 400 });
    }

    // 4) Rate limit sederhana: max 5 submissions / jam / IP
    const ip_hash = await sha256Hex(ip);
    const supabase = supabaseServer();
    const sinceIso = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count: subCount, error: eCount } = await supabase
      .from("submissions")
      .select("id", { count: "exact", head: true })
      .gte("created_at", sinceIso)
      .eq("ip_hash", ip_hash);
    if (eCount) throw eCount;
    if ((subCount || 0) >= 5) {
      return Response.json(
        { error: "Terlalu sering, coba lagi nanti" },
        { status: 429 }
      );
    }

    // 5) Insert/Upsert dengan idempotency token
    const cleanName = String(name).trim();
    const safeUtm =
      utm && typeof utm === "object" && !Array.isArray(utm) ? utm : {};

    const ct =
      typeof client_token === "string" && client_token.length >= 16
        ? client_token
        : null;

    const row = {
      name: cleanName,
      phone: phone || null,
      email: email || null,
      consent: !!consent,
      source_utm: safeUtm,
      ip_hash,
      client_token: ct,
    };

    let data, error;
    if (ct) {
      // upsert on client_token agar pengiriman ulang (back/forward) tidak buat baris baru
      ({ data, error } = await supabase
        .from("submissions")
        .upsert(row, { onConflict: "client_token" })
        .select("id")
        .single());
    } else {
      // fallback: insert biasa jika token tidak tersedia
      ({ data, error } = await supabase
        .from("submissions")
        .insert(row)
        .select("id")
        .single());
    }

    if (error) throw error;

    return Response.json({ submission_id: data.id }, { status: 201 });
  } catch (e) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
