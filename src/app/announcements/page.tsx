import { AnnouncementsPage } from "@/components/announcements-page"
import { SiteHeader } from "@/components/site-header"
import { AnimatedSection } from "@/components/animated-section"

export default function Announcements() {
  return (
    <>
      
        <SiteHeader />
     
      <AnimatedSection>
        <AnnouncementsPage />
      </AnimatedSection>
    </>
  )
}

