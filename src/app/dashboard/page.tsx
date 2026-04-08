import { redirect } from "next/navigation"

import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChildProfileCard } from "@/components/dashboard/child-profile-card"
import { RecommendationsList } from "@/components/dashboard/recommendations-list"
import { RoutinesPanel } from "@/components/dashboard/routines-panel"
import { CaregiverNotesFeed } from "@/components/dashboard/caregiver-notes-feed"
import { MilestonesTracker } from "@/components/dashboard/milestones-tracker"
import { NurseryChecklistCard } from "@/components/dashboard/nursery-checklist-card"
import { HealthTracker } from "@/components/dashboard/health-tracker"
import { getAuthenticatedUser } from "@/lib/supabase/server"

export default async function DashboardPage() {
  const user = await getAuthenticatedUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <DashboardShell
      title="Family dashboard"
      subtitle="A calm view of routines, recommendations, and caregiver coordination."
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <ChildProfileCard />
          <RecommendationsList />
          <RoutinesPanel />
        </div>

        <div className="space-y-6">
          <NurseryChecklistCard />
          <HealthTracker />
          <MilestonesTracker />
          <CaregiverNotesFeed />
          <Card className="border-white/10 bg-white/5 text-white">
            <CardHeader>
              <CardTitle>Family members</CardTitle>
              <CardDescription className="text-white/65">
                Manage access and permissions for caregivers
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/10" />
                <div>
                  <p className="font-medium">Sarah (You)</p>
                  <p className="text-sm text-white/60">Primary caregiver</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/10" />
                <div>
                  <p className="font-medium">Michael</p>
                  <p className="text-sm text-white/60">Parent</p>
                </div>
              </div>
              <Button variant="outline" className="mt-2 border-white/10 bg-white/5">
                + Invite caregiver
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}
