import { SiteHeader } from "@/components/layout/site-header"
import { HeroSection } from "@/components/marketing/hero-section"
import { FeatureGrid } from "@/components/marketing/feature-grid"
import { StatsStrip } from "@/components/marketing/stats-strip"
import { CtaSection } from "@/components/marketing/cta-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <HeroSection />
      <FeatureGrid />
      <StatsStrip />
      <CtaSection />
    </div>
  );
}
