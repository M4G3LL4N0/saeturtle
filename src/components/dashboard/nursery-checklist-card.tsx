import { Checkbox } from "@/components/ui/checkbox"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const items = [
  { id: "crib", label: "Crib or bassinet setup", checked: true },
  { id: "lighting", label: "Soft lighting plan", checked: true },
  { id: "sound", label: "Sound machine placement", checked: false },
  { id: "storage", label: "Essentials storage flow", checked: true },
  { id: "changing", label: "Changing station ready", checked: false },
]

interface ChecklistProps {
  completedItems: number
  totalItems: number
  lastUpdated: string
}

export function NurseryChecklistCard({ checklist }: { checklist: ChecklistProps }) {
  return (
    <Card className="border-white/10 bg-white/5 text-white">
      <CardHeader>
        <CardTitle>Nursery checklist</CardTitle>
        <CardDescription className="text-white/65">
          Keep the room calm, functional, and ready for real daily use.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between pb-2 text-sm text-white/60">
          <span>
            {checklist.completedItems} of {checklist.totalItems} completed
          </span>
          <span>Updated {checklist.lastUpdated}</span>
        </div>
        {items.map((item) => (
          <label
            key={item.id}
            htmlFor={item.id}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-3"
          >
            <Checkbox id={item.id} checked={item.checked} />
            <span className="text-sm text-white/78">{item.label}</span>
          </label>
        ))}
      </CardContent>
    </Card>
  )
}
