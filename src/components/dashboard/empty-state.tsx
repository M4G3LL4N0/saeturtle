import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function EmptyState({
  title,
  description,
  actionText,
  onAction,
}: {
  title: string
  description: string
  actionText: string
  onAction: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border-2 border-dashed p-6 text-center">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Button onClick={onAction}>
        <Plus className="mr-2 h-4 w-4" />
        {actionText}
      </Button>
    </div>
  )
}
