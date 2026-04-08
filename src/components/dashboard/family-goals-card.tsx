import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Target } from "lucide-react"

export function FamilyGoalsCard() {
  const goals = [
    {
      title: "Establish bedtime routine",
      progress: 75,
      description: "Consistent 7:30pm bedtime"
    },
    {
      title: "Increase tummy time",
      progress: 50,
      description: "15 minutes, 3x daily"
    },
    {
      title: "Introduce solid foods",
      progress: 25,
      description: "Start with single-ingredient purees"
    }
  ]

  return (
    <Card className="border-white/10 bg-white/5 text-white">
      <CardHeader>
        <CardTitle>Family goals</CardTitle>
        <CardDescription className="text-white/65">
          Track progress on shared family objectives
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal) => (
          <div key={goal.title} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-2">
                  <Target className="h-4 w-4 text-[#f8c27a]" />
                </div>
                <div>
                  <p className="font-medium">{goal.title}</p>
                  <p className="text-sm text-white/60">{goal.description}</p>
                </div>
              </div>
              <p className="text-sm font-medium text-white/80">{goal.progress}%</p>
            </div>
            <Progress value={goal.progress} className="h-2 bg-white/10" />
          </div>
        ))}
        <Button variant="outline" className="mt-2 border-white/10 bg-white/5">
          + Add new goal
        </Button>
      </CardContent>
    </Card>
  )
}
