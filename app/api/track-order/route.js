import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function normPhone(raw) {
  if (!raw) return "";
  let d = String(raw).replace(/\D+/g, "");
  if (d.startsWith("0")) d = "62" + d.slice(1);
  if (!d.startsWith("62")) d = "62" + d;
  return d;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const { mode, number, email } = await req.json();
    if (!mode || !number || !email) {
      return NextResponse.json(
        { error: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    const emailLc = String(email).trim().toLowerCase();

    let query = supabase
      .from("orders")
      .select("id, tracking_number")
      .eq("email", emailLc);

    if (mode === "phone") {
      query = query.eq("phone", normPhone(number));
    } else if (mode === "resi") {
      query = query.eq("tracking_number", String(number).trim());
    } else {
      return NextResponse.json({ error: "Mode tidak valid" }, { status: 400 });
    }

    const { data, error } = await query.limit(1).single();
    if (error || !data) {
      return NextResponse.json(
        { error: "Pesanan tidak ditemukan atau email tidak cocok." },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true, order_id: data.id });
  } catch (e) {
    return NextResponse.json(
      { error: "Terjadi kesalahan server." },
      { status: 500 }
    );
  }
}
