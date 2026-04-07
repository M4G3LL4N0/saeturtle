import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_oklch(0.85_0.2_50/0.1),_transparent_70%)] opacity-40" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,_oklch(0.85_0.15_30/0.1),_transparent_50%)] opacity-30" />
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_80%_80%,_oklch(0.15_0.1_270/0.1),_transparent_50%)] opacity-30" />
      
      <div className="container flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-12 py-24 text-center">
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-heading text-7xl font-bold tracking-tight sm:text-8xl bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
            The Operating System for<br className="hidden md:block" /> Early Family Life
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
