import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <Badge className="border border-white/15 bg-white/10 text-white hover:bg-white/10">
            Onboarding
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight">
            Set up your family system.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/72">
            Start with your household, child stage, and care rhythm. SaeTurtle will
            use this to shape recommendations and routines.
          </p>
        </div>

        <Card className="border-white/10 bg-white/5 text-white">
          <CardHeader>
            <CardTitle>Family setup</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="household">Household name</Label>
              <Input
                id="household"
                placeholder="The Rivera Family"
                className="border-white/10 bg-white/5 text-white placeholder:text-white/35"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="child">Child name</Label>
              <Input
                id="child"
                placeholder="Mia"
                className="border-white/10 bg-white/5 text-white placeholder:text-white/35"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stage">Current stage</Label>
              <Input
                id="stage"
                placeholder="6-12 months"
                className="border-white/10 bg-white/5 text-white placeholder:text-white/35"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="caregivers">Caregivers</Label>
              <Input
                id="caregivers"
                placeholder="Parents, nanny, grandma"
                className="border-white/10 bg-white/5 text-white placeholder:text-white/35"
              />
            </div>

            <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
              <Button className="rounded-full px-6">Continue</Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/">Back home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
