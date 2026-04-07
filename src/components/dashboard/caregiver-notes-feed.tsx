import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const notes = [
  {
    author: "Mom",
    time: "8:12 AM",
    body: "Slept a little lighter than usual, but settled quickly after feeding.",
  },
  {
    author: "Grandma",
    time: "1:05 PM",
    body: "Great nap. Woke up calm and playful. Loved the soft fabric book.",
  },
  {
    author: "Dad",
    time: "6:58 PM",
    body: "Evening routine felt smoother tonight. Lower lights seemed to help.",
  },
]

export function CaregiverNotesFeed() {
  return (
    <Card className="border-white/10 bg-white/5 text-white">
      <CardHeader>
        <CardTitle>Caregiver notes</CardTitle>
        <CardDescription className="text-white/65">
          Shared observations keep everyone more aligned.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {notes.map((note) => (
          <div
            key={`${note.author}-${note.time}`}
            className="rounded-2xl border border-white/10 bg-black/20 p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium">{note.author}</p>
              <p className="text-xs text-white/45">{note.time}</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-white/68">{note.body}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
