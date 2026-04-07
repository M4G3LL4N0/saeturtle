import { redirect } from "next/navigation"

import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { ChildProfileCard } from "@/components/dashboard/child-profile-card"
import { RecommendationsList } from "@/components/dashboard/recommendations-list"
import { RoutinesPanel } from "@/components/dashboard/routines-panel"
import { CaregiverNotesFeed } from "@/components/dashboard/caregiver-notes-feed"
import { NurseryChecklistCard } from "@/components/dashboard/nursery-checklist-card"
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
          <CaregiverNotesFeed />
        </div>
      </div>
    </DashboardShell>
  )
}
