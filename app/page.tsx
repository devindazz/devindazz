import HeroSection from "@/components/hero-section"
import Aboutme from "@/components/about-me"
import ProjectsPage from "@/components/project-page"
import { Contact } from "lucide-react"
import ContactPage from "@/components/contact"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Aboutme/>
      <ProjectsPage/>
      <ContactPage/>
    </main>
  )
}

