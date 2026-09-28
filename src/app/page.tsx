import Link from "next/link"
import {
  ArrowRight,
  Baby,
  CheckCircle2,
  ClipboardList,
  Home,
  MessageSquareText,
  Moon,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const problems = [
  "Nursery decisions scattered across reviews, registries, and advice threads.",
  "Care routines living in memory, text messages, or one caregiver note stream.",
  "Developmental recommendations that feel generic, noisy, or hard to act on.",
]

const operatingLayers = [
  {
    title: "Plan the room",
    body: "Build an essentials-first nursery plan around sleep, feeding, changing, lighting, storage, and calm daily movement.",
    icon: Home,
  },
  {
    title: "Coordinate the day",
    body: "Keep routines, caregiver notes, handoffs, and household context in one trusted family system.",
    icon: ClipboardList,
  },
  {
    title: "Choose the next step",
    body: "Turn age-stage guidance into practical recommendations for products, routines, and developmental support.",
    icon: Sparkles,
  },
]

const previewRows = [
  { time: "7:00", title: "Morning feed", detail: "Bottle, burp, low-light reset" },
  { time: "9:30", title: "Floor play", detail: "Soft mat, reaching, rolling practice" },
  { time: "12:30", title: "Nap window", detail: "Dim room, sound machine, sleep sack" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06101d] text-white">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(248,178,116,0.18),transparent_28%),radial-gradient(circle_at_78%_4%,rgba(111,126,255,0.24),transparent_34%),linear-gradient(180deg,#07111f_0%,#06101d_72%,#050914_100%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-28 lg:pt-20">
          <div className="flex flex-col justify-center">
            <p className="w-fit rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#f8c27a]">
              Premium early-family operating system
            </p>
            <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Calm infrastructure for the first years of family life.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              SaeTurtle brings nursery planning, developmental recommendations,
              routines, caregiver notes, and trusted family coordination into one
              composed system.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="xl">
                <Link href="/onboarding">
                  Build your family system
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/product">See product</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_20%,rgba(248,194,122,0.2),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(99,102,241,0.24),transparent_36%)] blur-2xl" />
            <Card className="border-white/12 bg-white/8 p-0 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
              <CardContent className="p-5 md:p-6">
                <div className="rounded-2xl border border-white/10 bg-[#07111f]/80 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-white/50">Sample day</p>
                      <h2 className="mt-1 text-2xl font-semibold">Mia&apos;s care rhythm</h2>
                    </div>
                    <span className="rounded-full bg-[#f8c27a] px-3 py-1 text-xs font-medium text-[#1b110b]">
                      Preview
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {previewRows.map((row) => (
                      <div
                        key={row.title}
                        className="grid grid-cols-[3.5rem_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <span className="text-sm text-[#f8c27a]">{row.time}</span>
                        <div>
                          <p className="font-medium">{row.title}</p>
                          <p className="mt-1 text-sm text-white/58">{row.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <Baby className="h-5 w-5 text-[#f8c27a]" />
                      <p className="mt-3 text-sm font-medium">Nursery checklist</p>
                      <p className="mt-1 text-xs text-white/55">Essentials still to place</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <MessageSquareText className="h-5 w-5 text-[#aeb8ff]" />
                      <p className="mt-3 text-sm font-medium">Caregiver note</p>
                      <p className="mt-1 text-xs text-white/55">Nap improved after lower light</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#9fb7d9]">
              The problem
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Early childcare has too many tabs open.
            </h2>
          </div>
          <div className="grid gap-4">
            {problems.map((problem) => (
              <div
                key={problem}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white/72"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f8c27a]" />
                <p className="leading-7">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#9fb7d9]">
              The solution
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              One family OS for planning, routines, and trusted handoffs.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {operatingLayers.map((layer) => {
              const Icon = layer.icon
              return (
                <Card key={layer.title} className="border-white/10 bg-white/[0.05] text-white">
                  <CardContent className="p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className="h-5 w-5 text-[#f8c27a]" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{layer.title}</h3>
                    <p className="mt-3 leading-7 text-white/65">{layer.body}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#9fb7d9]">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Start with the household. Improve the rhythm. Expand with trust.
            </h2>
          </div>
          <div className="space-y-4">
            {[
              "Create a family profile with child stage, room needs, and caregiver context.",
              "Turn daily care into shared routines and notes everyone can understand.",
              "Use recommendations to decide what to buy, change, or prepare next.",
            ].map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f8c27a] text-sm font-semibold text-[#1b110b]">
                  {index + 1}
                </span>
                <p className="leading-7 text-white/72">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(248,194,122,0.12),transparent_34%),#050914] px-4 py-20 text-center sm:px-6 lg:px-10">
        <Moon className="mx-auto h-8 w-8 text-[#f8c27a]" />
        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
          Give your family a calmer control layer.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/68">
          Begin with the product shell today, then expand into subscriptions,
          trusted commerce, smart nursery integrations, and childcare partnerships.
        </p>
        <div className="mt-9 flex justify-center">
          <Button asChild size="xl">
            <Link href="/onboarding">
              Join the early access list
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-sm text-white/52 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>SaeTurtle. Premium early-family coordination.</p>
          <div className="flex gap-5">
            <Link href="/product" className="hover:text-white">
              Product
            </Link>
            <Link href="/pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link href="/investors" className="hover:text-white">
              Investors
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
