export function StatsStrip() {
  return (
    <section className="border-y border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent)] py-20">
      <div className="container">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <span className="font-heading text-3xl font-bold tracking-tight bg-[linear-gradient(90deg,oklch(0.85_0.2_50),oklch(0.82_0.18_52))] bg-clip-text text-transparent">
              95%
            </span>
            <span className="mt-1.5 text-center text-xs tracking-wide text-white/70">
              Parent Satisfaction Rate
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-heading text-xl font-medium">10k+</span>
            <span className="mt-1 tracking-tight text-center text-xs text-muted-foreground">
              Families Supported
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-heading text-4xl font-bold">24/7</span>
            <span className="mt-2 text-center text-sm text-muted-foreground">
              Expert Support Available
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-heading text-4xl font-bold">4.9/5</span>
            <span className="mt-2 text-center text-sm text-muted-foreground">
              Average App Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
