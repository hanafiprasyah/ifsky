import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET(_req, { params }) {
  try {
    const id = params.id;
    const { data: order, error } = await supabase
      .from("orders")
      .select(
        "id, created_at, customer_name, email, phone, tracking_number, bank_name, account_number, grand_total"
      )
      .eq("id", id)
      .single();
    if (error || !order)
      return NextResponse.json({ error: "Order not found" }, { status: 404 });

    const { data: events } = await supabase
      .from("order_events")
      .select("status, at")
      .eq("order_id", id)
      .order("at", { ascending: true });

    // Fetch items for this order
    const { data: items } = await supabase
      .from("order_items")
      .select("id, product_name, variant, quantity, unit_price")
      .eq("order_id", id)
      .order("id", { ascending: true });

    return NextResponse.json({
      order,
      items: items || [],
      events: events || [],
    });
  } catch (e) {
    return NextResponse.json({ error: "Error occured" }, { status: 500 });
  }
}
