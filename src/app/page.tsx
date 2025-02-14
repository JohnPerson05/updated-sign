import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { AnimatedSection } from "@/components/animated-section"
import { FAQSection } from "@/components/faq-page"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <main>
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        <AnimatedSection>
          <FeaturesSection />
        </AnimatedSection>
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection>
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection>
          <TeamSection />
        </AnimatedSection>
      </main>
    </div>
  )
}
