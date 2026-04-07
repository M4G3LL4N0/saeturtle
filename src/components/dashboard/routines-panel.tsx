import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const routines = [
  {
    time: "7:00 AM",
    title: "Morning feeding",
    detail: "Bottle + quiet wake-up routine",
  },
  {
    time: "9:30 AM",
    title: "Floor play",
    detail: "Sensory mat and movement block",
  },
  {
    time: "12:30 PM",
    title: "Nap window",
    detail: "Dim room, sound machine, sleep sack",
  },
  {
    time: "6:45 PM",
    title: "Evening wind-down",
    detail: "Bath, low light, story, feeding",
  },
]

export function RoutinesPanel() {
  return (
    <Card className="border-white/10 bg-white/5 text-white">
      <CardHeader>
        <CardTitle>Today&apos;s routines</CardTitle>
        <CardDescription className="text-white/65">
          A calmer day starts with consistent handoffs and repeatable rhythms.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {routines.map((routine, index) => (
            <div key={`${routine.time}-${routine.title}`} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-[#f8c27a]" />
                {index < routines.length - 1 ? (
                  <div className="mt-2 h-full w-px bg-white/10" />
                ) : null}
              </div>

              <div className="flex-1 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm text-[#f8c27a]">{routine.time}</div>
                <div className="mt-1 text-base font-medium">{routine.title}</div>
                <div className="mt-1 text-sm text-white/65">{routine.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
