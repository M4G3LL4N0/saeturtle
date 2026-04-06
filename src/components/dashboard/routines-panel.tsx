import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock } from "lucide-react"

export function RoutinesPanel() {
  const routines = [
    { time: "07:30", name: "Morning Routine", completed: true },
    { time: "12:00", name: "Lunch & Nap", completed: false },
    { time: "18:00", name: "Bedtime Routine", completed: false },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Routines</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {routines.map((routine) => (
          <div key={routine.name} className="flex items-center gap-4">
            <div className="flex-1">
              <p className="font-medium">{routine.name}</p>
              <p className="text-sm text-muted-foreground">{routine.time}</p>
            </div>
            {routine.completed ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <Clock className="h-5 w-5 text-yellow-500" />
            )}
          </div>
        ))}
        <Button variant="outline" className="w-full">
          Add Routine
        </Button>
      </CardContent>
    </Card>
  )
}
