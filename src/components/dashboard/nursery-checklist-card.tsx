import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export function NurseryChecklistCard() {
  const items = [
    { id: 1, label: "Diapers (6)", checked: true },
    { id: 2, label: "Wipes", checked: true },
    { id: 3, label: "Change of clothes", checked: false },
    { id: 4, label: "Snacks", checked: false },
    { id: 5, label: "Favorite toy", checked: false },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nursery Checklist</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <Checkbox id={`item-${item.id}`} checked={item.checked} />
            <label
              htmlFor={`item-${item.id}`}
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.label}
            </label>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
