import { Card } from "@/components/ui/card"

export function FeatureGrid() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight">
            Designed for Modern Families
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Thoughtfully crafted features to simplify and enhance early family life
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-2xl font-semibold">Milestone Tracking</h3>
              <p className="text-muted-foreground">
                Monitor and celebrate your child's developmental progress with intuitive tracking tools
              </p>
            </div>
          </Card>
          <Card className="p-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-2xl font-semibold">Personalized Insights</h3>
              <p className="text-muted-foreground">
                Receive tailored recommendations based on your family's unique needs and preferences
              </p>
            </div>
          </Card>
          <Card className="p-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-2xl font-semibold">Collaborative Planning</h3>
              <p className="text-muted-foreground">
                Coordinate schedules, tasks, and responsibilities with your partner or caregivers
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
