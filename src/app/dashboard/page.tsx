import { createSupabaseServerClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { ChildProfileCard } from '@/components/dashboard/child-profile-card'
import { RoutinesPanel } from '@/components/dashboard/routines-panel'
import { CaregiverNotesFeed } from '@/components/dashboard/caregiver-notes-feed'
import { NurseryChecklistCard } from '@/components/dashboard/nursery-checklist-card'

export default async function DashboardPage() {
  const supabase = createSupabaseServerClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <DashboardShell>
      <ChildProfileCard />
      <RoutinesPanel />
      <CaregiverNotesFeed />
      <NurseryChecklistCard />
    </DashboardShell>
  )
}
