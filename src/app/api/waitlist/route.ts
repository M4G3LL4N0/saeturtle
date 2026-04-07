import { NextResponse } from "next/server"

import { createSupabaseServerClient } from "@/lib/supabase/server"

type WaitlistBody = {
  email?: string
  parent_stage?: string
  interest?: string[]
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WaitlistBody
    const email = body.email?.trim().toLowerCase()

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    const supabase = await createSupabaseServerClient()

    const payload = {
      email,
      parent_stage: body.parent_stage ?? null,
      interest: body.interest ?? null,
    }

    const { data, error } = await supabase
      .schema("saeturtle")
      .from("waitlist")
      .insert(payload)
      .select()
      .single()

    if (error) {
      const message =
        error.code === "23505"
          ? "This email is already on the waitlist"
          : "Failed to join waitlist"

      const status = error.code === "23505" ? 409 : 500

      console.error("Waitlist insert error:", error)

      return NextResponse.json({ error: message }, { status })
    }

    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    )
  } catch (error) {
    console.error("Waitlist route unexpected error:", error)
    return NextResponse.json(
      { error: "Invalid request or unexpected server error" },
      { status: 500 }
    )
  }
}
