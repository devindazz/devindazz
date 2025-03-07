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

        {/* Content Section */}
        <div className="space-y-8">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-6 pt-4">
              <div>
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate software engineer with over 8 years of experience building web applications and
                    digital experiences that delight users and solve complex problems.
                  </p>
                  <p>
                    My journey in technology began with a curiosity about how things work, which led me to pursue
                    computer science and eventually specialize in frontend development with a focus on creating
                    intuitive, accessible, and performant user interfaces.
                  </p>
                  <p>
                    When I'm not coding, you can find me hiking in the mountains, experimenting with new cooking
                    recipes, or contributing to open-source projects that align with my values of making technology more
                    inclusive and accessible.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Frontend Development</h3>
                      <ul className="list-disc pl-5 text-muted-foreground">
                        <li>React, Next.js, Vue.js</li>
                        <li>TypeScript, JavaScript</li>
                        <li>Tailwind CSS, Styled Components</li>
                        <li>Responsive Design, Accessibility</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Backend Development</h3>
                      <ul className="list-disc pl-5 text-muted-foreground">
                        <li>Node.js, Express</li>
                        <li>PostgreSQL, MongoDB</li>
                        <li>RESTful APIs, GraphQL</li>
                        <li>Serverless Functions</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Tools & Practices</h3>
                      <ul className="list-disc pl-5 text-muted-foreground">
                        <li>Git, GitHub, CI/CD</li>
                        <li>Jest, Testing Library</li>
                        <li>Agile Methodologies</li>
                        <li>Performance Optimization</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Design & Collaboration</h3>
                      <ul className="list-disc pl-5 text-muted-foreground">
                        <li>Figma, Adobe XD</li>
                        <li>UI/UX Principles</li>
                        <li>Cross-functional Teamwork</li>
                        <li>Technical Documentation</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="space-y-6 pt-4">
              <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
              <div className="space-y-8">
                {/* Experience Item 1 */}
                <div className="relative border-l border-muted pl-6 pb-2">
                  <div className="absolute left-0 top-1 h-3 w-3 -translate-x-1.5 rounded-full bg-primary"></div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-medium">Senior Frontend Engineer</h3>
                      <Badge variant="outline">2021 - Present</Badge>
                    </div>
                    <p className="text-muted-foreground flex items-center gap-1">
                      TechCorp Inc. <ExternalLink className="h-3.5 w-3.5" />
                    </p>
                    <div className="mt-2 text-muted-foreground">
                      <p className="mb-2">
                        Led the frontend development of the company's flagship product, improving performance by 40% and
                        implementing a new design system.
                      </p>
                      <ul className="list-disc pl-5">
                        <li>Architected and implemented a component library used across multiple products</li>
                        <li>Mentored junior developers and conducted code reviews</li>
                        <li>Collaborated with design and product teams to create intuitive user experiences</li>
                        <li>Introduced automated testing, achieving 85% code coverage</li>
                      </ul>
                    </div>
                  </div>
                </div>