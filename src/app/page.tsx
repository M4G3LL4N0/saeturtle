import { SiteHeader } from "@/components/layout/site-header"
import { HeroSection } from "@/components/marketing/hero-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <HeroSection />
    </div>
  );
}
