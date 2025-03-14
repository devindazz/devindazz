'use client'; 

import AboutMe from "@/components/about-me";
import { Background3D } from "@/components/background3d";
import { HeroSection } from "@/components/hero-section";
import { ProfilePhoto } from "@/components/profile-photo";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return ( 
    
    <main className="relative min-h-screen">
      <div>
        <Background3D />
      </div>
      

      <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm z-10"> 
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}>   
          <ProfilePhoto src="/devinda.jpg" alt="Your Name" size={40} href="/" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}>
          <Link
            href="/cv"
            className="px-5 py-1.5 rounded-lg bg-gray-300/50 text-gray-700 font-mono text-base hover:bg-primary/90 hover:text-white transition-colors"
          >
            CV
          </Link>
        </motion.div>
      </div>

      <div className="mx-auto">
        <HeroSection />
      </div>

      <div className ="mx-auto">
        <AboutMe />
      </div>

      

    </main>

    
  );
}
