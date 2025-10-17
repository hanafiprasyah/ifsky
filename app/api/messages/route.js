import { supabaseServer } from "@/lib/supabase-server";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const raw = Number(url.searchParams.get("limit") || "60");
    const limit = Math.max(
      1,
      Math.min(Number.isFinite(raw) ? Math.floor(raw) : 60, 200)
    );

    const supabase = supabaseServer();
    const { data, error } = await supabase
      .from("messages")
      .select("id, created_at, content_html, submission_id, submissions(name)")
      .eq("status", "published")
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("[/api/messages] DB error:", error);
      return Response.json({ error: "DB error" }, { status: 500 });
    }

    const shaped = (data || []).map((row) => ({
      id: row.id,
      created_at: row.created_at,
      content_html: row.content_html,
      name: row?.submissions?.name || "Pengirim",
    }));

    return Response.json(shaped, {
      status: 200,
      headers: {
        "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
        "CDN-Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (e) {
    console.error("[/api/messages] Server error:", e);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
