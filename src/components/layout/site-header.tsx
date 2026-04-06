import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-heading text-2xl font-semibold tracking-tight text-primary">
              SaeTurtle
            </span>
          </Link>
          <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
            <Link
              href="/product"
              className="transition-colors hover:text-foreground/90 text-foreground/70"
            >
              Product
            </Link>
            <Link
              href="/pricing"
              className="transition-colors hover:text-foreground/90 text-foreground/70"
            >
              Pricing
            </Link>
            <Link
              href="/investors"
              className="transition-colors hover:text-foreground/90 text-foreground/70"
            >
              Investors
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="lg" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/onboarding">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
