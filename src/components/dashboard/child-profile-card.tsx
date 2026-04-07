import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ChildProfileCard() {
  return (
    <Card className="border-white/10 bg-white/5 text-white">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14 border border-white/10">
              <AvatarFallback className="bg-white/10 text-white">
                ST
              </AvatarFallback>
            </Avatar>

            <div>
              <CardTitle>Mia Rivera</CardTitle>
              <CardDescription className="mt-1 text-white/65">
                6–12 months · growth stage active
              </CardDescription>
            </div>
          </div>

          <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/70">
            Stage profile
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Sleep rhythm
            </p>
            <p className="mt-2 text-2xl font-semibold">78%</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Nursery readiness
            </p>
            <p className="mt-2 text-2xl font-semibold">64%</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Caregiver alignment
            </p>
            <p className="mt-2 text-2xl font-semibold">82%</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-white/68">
            <span>Developmental progress profile</span>
            <span>72%</span>
          </div>
          <Progress value={72} />
        </div>
      </CardContent>
    </Card>
  )
}
