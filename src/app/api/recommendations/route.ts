import { NextResponse } from "next/server"

import { createSupabaseServerClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createSupabaseServerClient()

    const { data, error } = await supabase
      .schema("saeturtle")
      .from("recommendations")
      .select("*")
      .order("is_featured", { ascending: false })
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Recommendations fetch error:", error)
      return NextResponse.json(
        { error: "Failed to fetch recommendations" },
        { status: 500 }
      )
    }

    return NextResponse.json({ data: data ?? [] }, { status: 200 })
  } catch (error) {
    console.error("Recommendations route unexpected error:", error)
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    )
  }
}
