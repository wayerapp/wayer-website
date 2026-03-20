import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StatsBanner } from "@/components/stats-banner"
import { HowItWorks } from "@/components/how-it-works"
import { AppScreenshots } from "@/components/app-screenshots"
import { WorldCoverage } from "@/components/world-coverage"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { WaitlistCTA } from "@/components/waitlist-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBanner />
      <HowItWorks />
      <AppScreenshots />
      <WorldCoverage />
      <Testimonials />
      <FAQ />
      <WaitlistCTA />
      <Footer />
    </main>
  )
}
