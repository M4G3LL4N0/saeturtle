import Link from "next/link"
import { redirect } from "next/navigation"

import { getSession } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default async function LoginPage() {
  const session = await getSession()

  if (session) {
    redirect("/dashboard")
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-6 py-16 text-white">
      <div className="w-full max-w-md">
        <Card className="border-white/10 bg-white/5 text-white">
          <CardHeader className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-[#9fb7d9]">
              Welcome back
            </p>
            <CardTitle className="text-3xl">Sign in to SaeTurtle</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/35"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/35"
                />
              </div>

              <Button className="w-full rounded-full">Continue</Button>

              <p className="text-center text-sm text-white/55">
                New here?{" "}
                <Link href="/onboarding" className="text-white hover:text-[#f8c27a]">
                  Start onboarding
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
