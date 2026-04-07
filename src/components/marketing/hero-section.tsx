import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden isolate">
      <div className="absolute inset-0 -z-20 opacity-20 [background:var(--glow-primary)]" />
      <div className="absolute inset-0 -z-30 opacity-20 [background:var(--glow-secondary)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgb(59,7,100,0.25),transparent)]" />
      
      <div className="container flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-16 py-24 text-center">
        <div className="flex flex-col items-center max-w-4xl gap-10">
          <h1 className="font-heading text-7xl font-bold tracking-tight sm:text-8xl">
            <span className="bg-[linear-gradient(90deg,oklch(0.85_0.2_50),oklch(0.82_0.18_52))] bg-clip-text text-transparent">
              The Operating System <br className="hidden md:block" /> 
            </span>
            <span className="bg-[linear-gradient(90deg,oklch(0.98_0_0),oklch(0.95_0_0))] bg-clip-text text-transparent">
              for Early Family Life
            </span>
          </h1>
          <p className="max-w-[52rem] text-xl leading-8 text-muted-foreground">
            SaeTurtle empowers modern families to navigate early childhood with confidence.<br className="hidden md:block" /> 
            From nursery planning to developmental milestones, we provide the tools and insights<br className="hidden md:block" /> 
            to support every step of your parenting journey.
          </p>
        </div>
        <div className="flex gap-4">
          <Button size="xl" asChild className="bg-primary/90 hover:bg-primary/100 shadow-lg shadow-primary/20">
            <a href="/onboarding">Get Started</a>
          </Button>
          <Button variant="outline" size="xl" asChild className="border-white/20 bg-white/5 hover:bg-white/10 text-white">
            <a href="/product">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
