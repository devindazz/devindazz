import AboutMeSection from "@/components/about-me";
import { HeroSection } from "@/components/hero-section";
import { ProfilePhoto } from "@/components/profile-photo";

export default function Page() {
  return ( 
    
    <main>

      <div className="flex items-center justify-between p-4">
        <ProfilePhoto src="/devinda.jpg?height=100&width=100" alt="devinda" size={40.5} href="null" />
      </div>

      <div className="mx-auto">
        <HeroSection />
      </div>

      <div>
        <AboutMeSection />
      </div>

    </main>

    
  );
}
