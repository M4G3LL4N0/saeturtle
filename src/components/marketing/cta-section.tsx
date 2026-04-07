import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/15 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]" />
      <div className="absolute inset-0 -z-20 [background:var(--glow-primary)] opacity-25" />
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_top,rgba(115,169,255,0.08),transparent)]" />
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Family Life?
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-white/75">
            Join thousands of families who are already experiencing the SaeTurtle difference
          </p>
          <div className="mt-10 flex justify-center gap-3">
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
