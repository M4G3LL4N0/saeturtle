import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function CaregiverNotesFeed() {
  const notes = [
    {
      id: 1,
      author: "Mom",
      content: "Emma tried broccoli for the first time today! She made a funny face but ate it all.",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      author: "Dad",
      content: "Bedtime went smoothly tonight. Read 'Goodnight Moon' twice.",
      timestamp: "Yesterday",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Caregiver Notes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {notes.map((note) => (
            <div key={note.id} className="flex gap-3">
              <Avatar>
                <AvatarFallback>{note.author[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-medium">{note.author}</p>
                  <p className="text-sm text-muted-foreground">{note.timestamp}</p>
                </div>
                <p className="text-sm">{note.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <Textarea placeholder="Add a note about today..." />
          <Button className="w-full">Save Note</Button>
        </div>
      </CardContent>
    </Card>
  )
}
