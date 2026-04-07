import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden isolate min-h-[calc(100vh-80px)]">
      <div className="absolute inset-0 -z-30 [background:var(--glow-primary)] opacity-35" />
      <div className="absolute inset-0 -z-40 [background:var(--glow-secondary)] opacity-30" />
      <div className="absolute inset-0 -z-50 [background:var(--glow-tertiary)] opacity-25" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,126,95,0.15),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(6,11,22,0.9),rgba(6,11,22,1))]" />
      <div className="absolute inset-0 -z-15 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent)]" />
      
      <div className="container flex min-h-[calc(100vh-80px)] flex-col items-center justify-center py-24 text-center">
        <div className="flex flex-col items-center max-w-2xl gap-5">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block bg-[linear-gradient(90deg,#ff7e5f,#feb47b)] bg-clip-text text-transparent">
              The Operating System
            </span>
            <span className="block mt-2 bg-[linear-gradient(90deg,#ffffff,#f0f0f0)] bg-clip-text text-transparent">
              for Early Family Life
            </span>
          </h1>
          <p className="max-w-[32rem] text-base leading-relaxed text-white/80">
            SaeTurtle empowers modern families to navigate early childhood with confidence. From nursery planning to developmental milestones, we provide the tools and insights to support every step of your parenting journey.
          </p>
        </div>
        <div className="mt-10 flex gap-3">
          <Button size="xl" asChild className="bg-gradient-to-br from-[#ff7e5f] to-[#feb47b] hover:from-[#ff8a6a] hover:to-[#ffc0a0] shadow-lg shadow-[#ff7e5f]/30 hover:shadow-[#ff7e5f]/40 transition-all hover:translate-y-[-2px]">
            <a href="/onboarding">Get Started</a>
          </Button>
          <Button variant="outline" size="xl" asChild className="border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg">
            <a href="/product">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
