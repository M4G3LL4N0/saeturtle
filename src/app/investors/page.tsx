import Link from "next/link"
import { ArrowRight, Shield, Sparkles, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const highlights = [
  {
    title: "Massive fragmented market",
    description:
      "Early family life spans childcare, nursery setup, developmental products, routines, and caregiver coordination, but the experience remains fragmented and operationally messy.",
    icon: TrendingUp,
  },
  {
    title: "Trust-first positioning",
    description:
      "SaeTurtle is designed to be calm, premium, and development-focused rather than alarmist, gimmicky, or over-claiming around safety.",
    icon: Shield,
  },
  {
    title: "Platform expansion path",
    description:
      "The initial software wedge can expand into commerce, subscriptions, partner services, daycare tools, and future smart nursery products.",
    icon: Sparkles,
  },
]

const pillars = [
  {
    title: "Software-first wedge",
    body: "Launch with nursery planning, developmental recommendations, routines, and caregiver coordination before expanding into physical products.",
  },
  {
    title: "Premium family operating system",
    body: "Position SaeTurtle as the control layer for early family life instead of a single-purpose baby product brand.",
  },
  {
    title: "Multi-revenue model",
    body: "Subscription, curated commerce, partner referrals, premium family tools, and long-term B2B expansion create multiple monetization paths.",
  },
  {
    title: "Noaerth portfolio fit",
    body: "SaeTurtle strengthens the Noaerth portfolio with a high-trust consumer-to-platform business in a large, emotionally important category.",
  },
]

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(115,169,255,0.16),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(252,186,116,0.12),transparent_30%),#07111f]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex items-center justify-between gap-4">
            <Badge className="border border-white/15 bg-white/10 text-white hover:bg-white/10">
              Noaerth Portfolio Company
            </Badge>

            <Link
              href="/"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Back to home
            </Link>
          </div>

          <div className="max-w-4xl space-y-6">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-[#9fb7d9]">
                Investors
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                SaeTurtle is building the operating system for early family
                life.
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
                We are starting with a software-first platform for nursery
                planning, routines, developmental guidance, and caregiver
                coordination, then expanding into a much larger childcare and
                family infrastructure business.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link href="/product">
                  Explore product
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/pricing">View model</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon

            return (
              <Card
                key={item.title}
                className="border-white/10 bg-white/5 text-white shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                    <Icon className="h-5 w-5 text-[#f8c27a]" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-7 text-white/68">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="border-white/10 bg-[#0b1728] text-white"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-white/72">{pillar.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <Card className="overflow-hidden border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] text-white">
          <CardContent className="grid gap-10 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.24em] text-[#9fb7d9]">
                Why this can become a large company
              </p>

              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                SaeTurtle can become the family coordination layer across early
                childhood.
              </h2>

              <p className="max-w-2xl leading-8 text-white/72">
                The strongest companies in this category will not just sell
                products. They will reduce confusion, improve coordination,
                support decision-making, and create a trusted system families
                return to repeatedly as their needs evolve.
              </p>
            </div>

            <div className="space-y-4 rounded-3xl border border-white/10 bg-black/20 p-6">
              <div>
                <p className="text-sm text-white/50">Initial wedge</p>
                <p className="mt-1 text-lg font-medium">
                  Planning + routines + recommendations
                </p>
              </div>

              <div>
                <p className="text-sm text-white/50">Expansion</p>
                <p className="mt-1 text-lg font-medium">
                  Commerce, subscriptions, caregiver tooling, partner ecosystem
                </p>
              </div>

              <div>
                <p className="text-sm text-white/50">Long-term position</p>
                <p className="mt-1 text-lg font-medium">
                  Trusted infrastructure for early family life
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
