import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="container flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-12 py-24 text-center">
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-heading text-6xl font-bold tracking-tight sm:text-7xl">
            The Operating System for<br className="hidden md:block" /> Early Family Life
          </h1>
          <p className="max-w-[52rem] text-xl leading-8 text-muted-foreground">
            SaeTurtle empowers modern families to navigate early childhood with confidence.<br className="hidden md:block" /> 
            From nursery planning to developmental milestones, we provide the tools and insights<br className="hidden md:block" /> 
            to support every step of your parenting journey.
          </p>
        </div>
        <div className="flex gap-4">
          <Button size="xl" asChild>
            <a href="/onboarding">Get Started</a>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <a href="/product">Learn More</a>
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-from),_transparent_40%)] from-primary/5" />
    </section>
  )
}
