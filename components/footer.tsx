import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Devinda Wijesinghe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
