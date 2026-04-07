import Link from "next/link"
import { ArrowRight, Baby, ClipboardList, Sparkles, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    title: "Nursery planning",
    description: "Build a calmer nursery setup with less waste and better guidance.",
    icon: Baby,
  },
  {
    title: "Routines system",
    description: "Track sleep, feeding, play, and care rhythms in one place.",
    icon: ClipboardList,
  },
  {
    title: "Developmental recommendations",
    description: "See age-stage guidance and trusted next-step suggestions.",
    icon: Sparkles,
  },
  {
    title: "Caregiver coordination",
    description: "Keep parents, sitters, grandparents, and helpers aligned.",
    icon: Users,
  },
]

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(115,169,255,0.16),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(252,186,116,0.12),transparent_30%),#07111f]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-4xl space-y-6">
            <Badge className="border border-white/15 bg-white/10 text-white hover:bg-white/10">
              Product
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              SaeTurtle is the operating system for early family life.
            </h1>
            <p className="text-lg leading-8 text-white/72 md:text-xl">
              A calm, premium platform for nursery planning, routines, recommendations,
              and caregiver coordination.
            </p>
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/login">
                Start now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <Card key={feature.title} className="border-white/10 bg-white/5 text-white">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                    <Icon className="h-5 w-5 text-[#f8c27a]" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-7 text-white/68">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-white/60">
                    Designed to feel warm, operationally useful, and expansion-ready for
                    the broader SaeTurtle family platform.
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </main>
  )
}
