import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
        <Mail className="h-5 w-5" />
        <span className="sr-only">Email</span>
      </Button>

      <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
        <Github className="h-5 w-5" />
        <span className="sr-only">GitHub</span>
      </Button>

      <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Button>

      <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
        <Twitter className="h-5 w-5" />
        <span className="sr-only">Twitter</span>
      </Button>

      <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Button>
    </div>
  )
}

