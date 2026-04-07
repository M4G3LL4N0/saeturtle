import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent)]" />
      <div className="absolute inset-0 -z-20 [background:var(--glow-primary)] opacity-20" />
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight">
            Ready to Transform Your Family Life?
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/72">
            Join thousands of families who are already experiencing the SaeTurtle difference
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="xl" asChild className="bg-primary/90 hover:bg-primary/100 shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all hover:translate-y-[-2px]">
              <a href="/onboarding">Get Started</a>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg">
              <a href="/product">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
