import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ChildProfileCard() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Your Little One</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder-child.jpg" />
            <AvatarFallback>CH</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold">Emma Johnson</h2>
            <p className="text-sm text-muted-foreground">18 months old</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Milestone Progress</span>
            <span>65%</span>
          </div>
          <Progress value={65} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}
