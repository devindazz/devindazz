import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] lg:gap-12">
        {/* Profile Section */}
        <div className="flex flex-col gap-6">
          <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">John Doe</h1>
            <p className="text-xl text-muted-foreground">Senior Software Engineer</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-3 py-1">
                React
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                Next.js
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                UI/UX
              </Badge>
            </div>
            <div className="flex gap-3 pt-2">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" aria-label="GitHub Profile">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:contact@example.com">
                <Button variant="outline" size="icon" aria-label="Email Contact">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <Button variant="outline" size="icon" aria-label="Download Resume">
                  <FileText className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>