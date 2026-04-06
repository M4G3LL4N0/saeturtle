export function StatsStrip() {
  return (
    <section className="border-y bg-background py-16">
      <div className="container">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <span className="font-heading text-4xl font-bold">95%</span>
            <span className="mt-2 text-center text-sm text-muted-foreground">
              Parent Satisfaction Rate
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-heading text-4xl font-bold">10k+</span>
            <span className="mt-2 text-center text-sm text-muted-foreground">
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
