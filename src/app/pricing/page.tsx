import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "For families exploring SaeTurtle and building a calm foundation.",
    features: [
      "Nursery planning starter tools",
      "Basic routines dashboard",
      "Saved recommendations",
      "Single household setup",
    ],
  },
  {
    name: "Family",
    price: "$19",
    description: "For active families coordinating routines, caregivers, and growth stages.",
    features: [
      "Everything in Starter",
      "Caregiver coordination",
      "Advanced routines and notes",
      "Personalized developmental guidance",
      "Priority feature access",
    ],
    featured: true,
  },
  {
    name: "Concierge",
    price: "$79",
    description: "For premium households wanting a higher-touch family operating system.",
    features: [
      "Everything in Family",
      "Premium onboarding support",
      "Curated product pathways",
      "Priority support",
      "Early access to concierge features",
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(115,169,255,0.16),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(252,186,116,0.12),transparent_30%),#07111f]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl space-y-6">
            <Badge className="border border-white/15 bg-white/10 text-white hover:bg-white/10">
              Pricing
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Pricing designed for modern families, not bloated baby-tech gimmicks.
            </h1>
            <p className="text-lg leading-8 text-white/72 md:text-xl">
              SaeTurtle starts with a software-first family system and expands with
              you over time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link href="/login">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/product">View product</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={[
                "border-white/10 text-white",
                plan.featured
                  ? "bg-[linear-gradient(180deg,rgba(248,194,122,0.14),rgba(255,255,255,0.05))] shadow-[0_24px_80px_rgba(0,0,0,0.3)]"
                  : "bg-white/5",
              ].join(" ")}
            >
              <CardHeader>
                {plan.featured ? (
                  <Badge className="mb-3 w-fit border-0 bg-[#f8c27a] text-black hover:bg-[#f8c27a]">
                    Most popular
                  </Badge>
                ) : null}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-semibold tracking-tight">
                  {plan.price}
                  <span className="ml-1 text-base font-normal text-white/50">
                    /month
                  </span>
                </div>
                <CardDescription className="text-base leading-7 text-white/68">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-white/78">
                      <Check className="mt-0.5 h-4 w-4 text-[#f8c27a]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-4 w-full rounded-full">
                  <Link href="/login">Choose {plan.name}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
