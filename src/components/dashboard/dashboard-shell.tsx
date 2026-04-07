import type { ReactNode } from "react"

type DashboardShellProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

export function DashboardShell({
  title,
  subtitle,
  children,
}: DashboardShellProps) {
  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-10 text-white lg:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-[#9fb7d9]">
            SaeTurtle dashboard
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
          {subtitle ? (
            <p className="max-w-3xl text-lg leading-8 text-white/68">
              {subtitle}
            </p>
          ) : null}
        </div>

        {children}
      </div>
    </main>
  )
}
