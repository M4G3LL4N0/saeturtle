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
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(115,169,255,0.08),transparent),radial-gradient(ellipse_at_bottom_left,rgba(252,186,116,0.06),transparent)] bg-[oklch(0.11_0.02_260)] px-6 py-10 text-white lg:px-10">
      <div className="absolute inset-0 -z-10 [background:var(--glow-primary)] opacity-15" />
      <div className="absolute inset-0 -z-20 [background:var(--glow-secondary)] opacity-10" />
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
