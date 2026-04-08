import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const milestones = [
  {
    category: "Physical",
    progress: 65,
    completed: ["Rolling over", "Sitting up"],
    upcoming: ["Crawling", "Standing"]
  },
  {
    category: "Communication",
    progress: 40,
    completed: ["Babbling"],
    upcoming: ["First words", "Simple phrases"]
  },
  {
    category: "Social",
    progress: 50,
    completed: ["Smiling responsively"],
    upcoming: ["Waving goodbye", "Playing peek-a-boo"]
  }
]

export function MilestonesTracker() {
  return (
    <Card className="border-white/10 bg-white/5 text-white">
      <CardHeader>
        <CardTitle>Milestones Tracker</CardTitle>
        <CardDescription className="text-white/65">
          Celebrate your child's developmental progress
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {milestones.map((milestone) => (
          <div key={milestone.category} className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{milestone.category}</h3>
              <span className="text-sm text-white/60">{milestone.progress}%</span>
            </div>
            <Progress value={milestone.progress} className="h-2" />
            <div className="space-y-2">
              {milestone.completed.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                  <CheckCircle className="h-4 w-4 text-[#f8c27a]" />
                  {item}
                </div>
              ))}
              {milestone.upcoming.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                  <div className="h-4 w-4 rounded-full border border-white/20" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
        <Button variant="outline" className="mt-4 border-white/10 bg-white/5">
          Add custom milestone
        </Button>
      </CardContent>
    </Card>
  )
}
