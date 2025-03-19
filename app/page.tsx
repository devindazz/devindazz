import HeroSection from "@/components/hero-section"
import Aboutme from "@/components/about-me"
import ProjectsPage from "@/components/project-page"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Aboutme/>
      <ProjectsPage/>
      {/* Add other sections of your portfolio below */}
    </main>
  )
}

