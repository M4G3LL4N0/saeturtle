import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const recommendations = [
  {
    title: "Minimal nursery starter setup",
    category: "Nursery",
    description:
      "A calm, essentials-first setup that avoids clutter while covering the highest-use items.",
    stage: "Newborn",
  },
  {
    title: "Sleep rhythm starter guide",
    category: "Sleep",
    description:
      "A gentle starting structure for evening wind-down, room prep, and caregiver consistency.",
    stage: "0–6 months",
  },
  {
    title: "Sensory play essentials",
    category: "Play",
    description:
      "Open-ended floor play tools that support curiosity, movement, and development.",
    stage: "6–12 months",
  },
]

export function RecommendationsList() {
  return (
    <Card className="border-white/10 bg-white/5 text-white">
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <div>
            <CardTitle>Recommended next steps</CardTitle>
            <CardDescription className="mt-1 text-white/65">
              Personalized ideas based on stage, routines, and household needs.
            </CardDescription>
          </div>
          <Badge className="border border-white/10 bg-white/10 text-white hover:bg-white/10">
            Curated
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {recommendations.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-black/20 p-4"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge className="border-0 bg-[#f8c27a] text-black hover:bg-[#f8c27a]">
                {item.category}
              </Badge>
              <Badge className="border border-white/10 bg-white/10 text-white hover:bg-white/10">
                {item.stage}
              </Badge>
            </div>

            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/68">
              {item.description}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
