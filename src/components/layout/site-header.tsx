import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-heading text-2xl font-semibold tracking-tight bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
              SaeTurtle
            </span>
          </Link>
          <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
            <Link
              href="/product"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Product
            </Link>
            <Link
              href="/pricing"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/investors"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Investors
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <Button variant="outline" size="lg" asChild className="border-white/20 bg-white/5 hover:bg-white/10 text-white">
            <Link href="/login">Login</Link>
          </Button>
          <Button size="lg" asChild className="bg-primary/90 hover:bg-primary/100 shadow-lg shadow-primary/20">
            <Link href="/onboarding">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
