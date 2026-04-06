import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50">
      <div className="container flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-8 py-16 text-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl">
            The Operating System for Early Family Life
          </h1>
          <p className="max-w-[42rem] text-lg text-muted-foreground">
            SaeTurtle helps modern families navigate early childhood with confidence. 
            From nursery planning to developmental milestones, we're here to support 
            every step of your parenting journey.
          </p>
        </div>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <a href="/onboarding">Get Started</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/product">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
