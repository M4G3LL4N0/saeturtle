import { redirect } from "next/navigation"

import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChildProfileCard } from "@/components/dashboard/child-profile-card"
import { RecommendationsList } from "@/components/dashboard/recommendations-list"
import { CaregiverNotesFeed } from "@/components/dashboard/caregiver-notes-feed"
import { MilestonesTracker } from "@/components/dashboard/milestones-tracker"
import { HealthTracker } from "@/components/dashboard/health-tracker"
import { FamilyGoalsCard } from "@/components/dashboard/family-goals-card"
import { RoutinesPanel } from "@/components/dashboard/routines-panel"
import { NurseryChecklistCard } from "@/components/dashboard/nursery-checklist-card"

interface NurseryChecklistProps {
  completedItems: number
  totalItems: number
  lastUpdated: string
}
import { getAuthenticatedUser } from "@/lib/supabase/server"

export default async function DashboardPage() {
  const user = await getAuthenticatedUser()

  if (!user) {
    redirect("/login")
  }

  // Simulate loading state
  await new Promise((resolve) => setTimeout(resolve, 500))

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
          <NurseryChecklistCard 
            completedItems={3}
            totalItems={8} 
            lastUpdated="today"
          />
          <HealthTracker 
            vitals={{
              height: "72cm (+2cm)",
              weight: "8.4kg (+0.3kg)",
              temperature: "36.8°C"
            }}
            immunizations={[
              { name: "DTaP", due: "up-to-date" },
              { name: "MMR", due: "in 2 weeks" }
            ]}
          />
          <MilestonesTracker />
          <FamilyGoalsCard />
          <CaregiverNotesFeed 
            recentNotes={[
              {
                author: "Grandma Sue",
                time: "2h ago",
                content: "Sophie had a great nap from 1-3pm. Ate all her lunch!"
              },
              {
                author: "Michael",
                time: "Yesterday",
                content: "Administered the 5pm dose of amoxicillin as prescribed"
              }
            ]}
            unconfirmedChanges={[
              "Updated nap preferences",
              "Modified medication schedule"
            ]}
          />
          
          <Card className="border-white/10 bg-white/5 text-white">
            <CardHeader>
              <CardTitle>Family Insights</CardTitle>
              <CardDescription className="text-white/65">
                Key metrics and trends for your family
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-white/60">Sleep consistency</p>
                <p className="text-2xl font-medium">87%</p>
                <p className="text-sm text-white/60">+12% last month</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-white/60">Milestones achieved</p>
                <p className="text-2xl font-medium">4/6</p>
                <p className="text-sm text-white/60">2 in progress</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-white/60">Caregiver alignment</p>
                <p className="text-2xl font-medium">92%</p>
                <p className="text-sm text-white/60">Based on notes</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-white/60">Routine adherence</p>
                <p className="text-2xl font-medium">78%</p>
                <p className="text-sm text-white/60">+8% last week</p>
              </div>
            </CardContent>
            <CardFooter className="border-t border-white/10 p-4">
              <Button variant="ghost" className="text-white/80 hover:text-white">
                View detailed insights →
              </Button>
            </CardFooter>
          </Card>

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
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/10" />
                <div>
                  <p className="font-medium">Grandma Sue</p>
                  <p className="text-sm text-white/60">Occasional caregiver</p>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto text-white/60 hover:text-white">
                  Edit
                </Button>
              </div>
              <Button variant="outline" className="mt-2 border-white/10 bg-white/5">
                + Invite caregiver
              </Button>
            </CardContent>
            <CardFooter className="border-t border-white/10 p-4">
              <Button variant="ghost" className="text-white/80 hover:text-white">
                Manage permissions →
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}
