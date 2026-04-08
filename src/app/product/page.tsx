import Link from "next/link"
import { ArrowRight, Baby, ClipboardList, Sparkles, Users, CheckCircle } from "lucide-react"

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
  {
    title: "Milestones tracking",
    description: "Celebrate developmental progress with guidance and insights.",
    icon: CheckCircle,
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

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            See SaeTurtle in action
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/72">
            A quick 90-second tour of how families use SaeTurtle daily.
          </p>
          <div className="mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-white/10 p-4 text-[#f8c27a]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                </div>
                <p className="mt-4 font-medium">Play product tour</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.01)_100%)] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Loved by growing families
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/72">
              Join thousands of parents who've found calm in early family life.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {[
              {
                quote: "SaeTurtle helped us coordinate care between grandparents and nannies without the chaos.",
                author: "The Chen Family",
                role: "Parents of twins"
              },
              {
                quote: "The developmental recommendations gave us confidence we weren't missing key milestones.",
                author: "Priya K.",
                role: "First-time mom"
              },
              {
                quote: "Finally a parenting app that doesn't feel overwhelming. It's like having a wise friend guide you.",
                author: "Marcus &amp; Taylor",
                role: "Parents of 3"
              }
            ].map((testimonial) => (
              <Card key={testimonial.author} className="border-white/10 bg-white/5 text-white">
                <CardContent className="p-8">
                  <p className="text-lg leading-8">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-6">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
