import { TeacherHero } from "@/components/teacher-hero"
import { TeachingServices } from "@/components/teaching-services"
import { VideoGallery } from "@/components/video-gallery"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TeacherHero />
      <TeachingServices />
      <VideoGallery />
      <ContactSection />
    </main>
  )
}
