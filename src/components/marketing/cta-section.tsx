import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight">
            Ready to Transform Your Family Life?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Join thousands of families who are already experiencing the SaeTurtle difference
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="xl" asChild>
              <a href="/onboarding">Get Started</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="/product">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
