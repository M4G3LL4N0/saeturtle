import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Thermometer, Droplets, HeartPulse, Pill } from "lucide-react"

const healthMetrics = [
  {
    name: "Temperature",
    value: 98.6,
    unit: "°F",
    icon: Thermometer,
    trend: "stable"
  },
  {
    name: "Hydration",
    value: 75,
    unit: "%",
    icon: Droplets,
    trend: "improving"
  },
  {
    name: "Heart Rate",
    value: 120,
    unit: "bpm",
    icon: HeartPulse,
    trend: "normal"
  },
  {
    name: "Medications",
    value: 2,
    unit: "taken",
    icon: Pill,
    trend: "on track"
  }
]

export function HealthTracker() {
  return (
    <Card className="border-white/10 bg-white/5 text-white">
      <CardHeader>
        <CardTitle>Family Health</CardTitle>
        <CardDescription className="text-white/65">
          Track important health metrics and records
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {healthMetrics.map((metric) => (
          <div key={metric.name} className="space-y-2">
            <div className="flex items-center gap-3">
              <metric.icon className="h-5 w-5 text-[#f8c27a]" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{metric.name}</p>
                  <p className="text-sm text-white/60">
                    {metric.value} {metric.unit}
                  </p>
                </div>
                <Progress value={metric.value} className="h-2" />
              </div>
            </div>
            <p className="text-sm text-white/60">
              Trend: <span className="capitalize">{metric.trend}</span>
            </p>
          </div>
        ))}
        <div className="pt-4">
          <button className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10">
            + Add health record
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
