import Education from "@/components/education"
import Experience from "@/components/experience"
import Fotter from "@/components/footer"
import HeroSection from "@/components/hero-section"
import ProjectsPage from "@/components/project-page"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Experience />
      <Education/>
      <ProjectsPage/>
      <Fotter/>
      
    </main>
  )
}

