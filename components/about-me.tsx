"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, ArrowRight, Star, Code, Briefcase, GraduationCap } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("about")
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    setAnimateIn(true)
  }, [])

  const handleTabChange = (value: string) => {
    setAnimateIn(false)
    setTimeout(() => {
      setActiveTab(value)
      setAnimateIn(true)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Animated header */}
        <div className="mb-12 text-center">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-4">
            My Journey & Work
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my background, skills, and projects through this interactive portfolio
          </p>
        </div>

        {/* Custom styled tabs */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-xl opacity-50 rounded-full"></div>
          <Tabs defaultValue="about" value={activeTab} onValueChange={handleTabChange} className="relative">
            <TabsList className="grid w-full grid-cols-3 rounded-full p-1 bg-background/80 backdrop-blur-sm border">
              <TabsTrigger
                value="about"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
              >
                <Code className="mr-2 h-4 w-4" />
                About
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                Education
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Projects
              </TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent
              value="about"
              className={`mt-8 transition-all duration-500 ${animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/20 rounded-2xl blur opacity-30"></div>
                  <Card className="relative backdrop-blur-sm border border-primary/10 overflow-hidden rounded-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    <CardContent className="p-8">
                      <h2 className="text-3xl font-bold mb-6 flex items-center">
                        <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                          <Star className="h-6 w-6" />
                        </span>
                        About Me
                      </h2>
                      <div className="space-y-4 text-lg">
                        <p>
                          I'm a passionate software engineer with over 8 years of experience building web applications
                          and digital experiences that delight users and solve complex problems.
                        </p>
                        <p>
                          My journey in technology began with a curiosity about how things work, which led me to pursue
                          computer science and eventually specialize in frontend development with a focus on creating
                          intuitive, accessible, and performant user interfaces.
                        </p>
                        <p>
                          When I'm not coding, you can find me hiking in the mountains, experimenting with new cooking
                          recipes, or contributing to open-source projects that align with my values of making
                          technology more inclusive and accessible.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                      <Code className="h-6 w-6" />
                    </span>
                    Skills & Expertise
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Frontend Development",
                        skills: [
                          "React, Next.js, Vue.js",
                          "TypeScript, JavaScript",
                          "Tailwind CSS, Styled Components",
                          "Responsive Design, Accessibility",
                        ],
                        color: "from-gray-500 to-zinc-400",
                      },
                      {
                        title: "Backend Development",
                        skills: [
                          "Node.js, Express",
                          "PostgreSQL, MongoDB",
                          "RESTful APIs, GraphQL",
                          "Serverless Functions",
                        ],
                        color: "from-gray-500 to-zinc-500",
                      },
                      {
                        title: "Tools & Practices",
                        skills: [
                          "Git, GitHub, CI/CD",
                          "Jest, Testing Library",
                          "Agile Methodologies",
                          "Performance Optimization",
                        ],
                        color: "from-gray-500 to-zinc-400",
                      },
                      {
                        title: "Design & Collaboration",
                        skills: [
                          "Figma, Adobe XD",
                          "UI/UX Principles",
                          "Cross-functional Teamwork",
                          "Technical Documentation",
                        ],
                        color: "from-gray-500 to-zinc-400",
                      },
                    ].map((category, index) => (
                      <div key={index} className="group relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-70 group-hover:opacity-100 blur transition-all duration-300 -z-10`}
                        ></div>
                        <Card className="h-full backdrop-blur-sm bg-background/80 border-0 overflow-hidden rounded-2xl transition-all duration-300 group-hover:translate-y-[-5px] group-hover:shadow-lg">
                          <CardContent className="p-6">
                            <h3 className="font-bold text-xl mb-4">{category.title}</h3>
                            <ul className="space-y-2">
                              {category.skills.map((skill, idx) => (
                                <li key={idx} className="flex items-center">
                                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent
              value="education"
              className={`mt-8 transition-all duration-500 ${animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/20 rounded-2xl blur opacity-30"></div>
                <Card className="relative backdrop-blur-sm border border-primary/10 overflow-hidden rounded-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-8 flex items-center">
                      <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                        <GraduationCap className="h-6 w-6" />
                      </span>
                      Education & Certifications
                    </h2>

                    <div className="relative border-l-2 border-primary/30 pl-8 space-y-12 ml-4">
                      {/* Education Item 1 */}
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-5 w-5 rounded-full bg-primary -translate-x-[calc(0.625rem+1px)]"></div>
                        <div className="absolute left-0 top-0 h-5 w-5 rounded-full bg-primary/30 -translate-x-[calc(0.625rem+1px)] animate-ping"></div>
                        <div>
                          <div className="flex items-center flex-wrap gap-3 mb-2">
                            <h3 className="text-2xl font-bold">Master of Science in Computer Science</h3>
                            <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">
                              2014 - 2016
                            </Badge>
                          </div>
                          <p className="text-xl text-primary/80 mb-3">Stanford University</p>
                          <div className="text-muted-foreground">
                            <p>
                              Specialized in Human-Computer Interaction and Software Engineering. Thesis on "Improving
                              Web Accessibility Through Automated Testing."
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Education Item 2 */}
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-5 w-5 rounded-full bg-primary -translate-x-[calc(0.625rem+1px)]"></div>
                        <div>
                          <div className="flex items-center flex-wrap gap-3 mb-2">
                            <h3 className="text-2xl font-bold">Bachelor of Science in Computer Science</h3>
                            <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">
                              2010 - 2014
                            </Badge>
                          </div>
                          <p className="text-xl text-primary/80 mb-3">University of California, Berkeley</p>
                          <div className="text-muted-foreground">
                            <p>
                              Graduated with honors. Active member of the Web Development Club and participated in
                              multiple hackathons.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mt-16">
                      <h3 className="text-2xl font-bold mb-6">Certifications</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            title: "AWS Certified Developer",
                            org: "Amazon Web Services",
                            year: "2022",
                            color: "from-amber-500 to-yellow-400",
                          },
                          {
                            title: "Professional Web Accessibility",
                            org: "International Association of Accessibility Professionals",
                            year: "2021",
                            color: "from-blue-500 to-sky-400",
                          },
                          {
                            title: "React Advanced Concepts",
                            org: "Frontend Masters",
                            year: "2020",
                            color: "from-cyan-500 to-teal-400",
                          },
                          {
                            title: "UX Design Fundamentals",
                            org: "Interaction Design Foundation",
                            year: "2019",
                            color: "from-rose-500 to-pink-400",
                          },
                        ].map((cert, index) => (
                          <div key={index} className="group relative">
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-xl opacity-70 group-hover:opacity-100 blur transition-all duration-300 -z-10`}
                            ></div>
                            <Card className="h-full backdrop-blur-sm bg-background/80 border-0 overflow-hidden rounded-xl transition-all duration-300 group-hover:translate-y-[-5px] group-hover:shadow-lg">
                              <CardContent className="p-5">
                                <div className="flex justify-between items-start flex-wrap gap-2">
                                  <div>
                                    <h4 className="font-bold text-lg">{cert.title}</h4>
                                    <p className="text-sm text-muted-foreground">{cert.org}</p>
                                  </div>
                                  <Badge variant="outline" className="border-primary/30 text-primary">
                                    {cert.year}
                                  </Badge>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent
              value="projects"
              className={`mt-8 transition-all duration-500 ${animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                  <Briefcase className="h-6 w-6" />
                </span>
                Featured Projects
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "E-commerce Platform",
                    description: "A full-stack e-commerce solution built with Next.js, Stripe, and a headless CMS.",
                    year: "2023",
                    tags: ["Next.js", "Stripe", "Tailwind"],
                    color: "from-slate-600 to-stone-600",
                  },
                  {
                    title: "Health Tracking App",
                    description: "A mobile-first web application for tracking health metrics with data visualization.",
                    year: "2022",
                    tags: ["React", "D3.js", "Firebase"],
                    color: "from-slate-600 to-stone-600",
                  },
                  {
                    title: "AI Content Generator",
                    description: "A tool that leverages AI to generate marketing content for small businesses.",
                    year: "2022",
                    tags: ["OpenAI", "Node.js", "Express"],
                    color: "from-slate-600 to-stone-600",
                  },
                  {
                    title: "Accessibility Checker",
                    description:
                      "A browser extension that analyzes web pages for accessibility issues and suggests fixes.",
                    year: "2021",
                    tags: ["JavaScript", "Chrome API", "WCAG"],
                    color: "from-slate-600 to-stone-600",
                  },
                ].map((project, index) => (
                  <div key={index} className="group relative h-full">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl opacity-80 group-hover:opacity-100 blur-sm transition-all duration-300 -z-10`}
                    ></div>
                    <Card className="h-full backdrop-blur-sm bg-background/90 border-0 overflow-hidden rounded-2xl transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-xl">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-2xl font-bold">{project.title}</h3>
                          <Badge className={`bg-background/50 backdrop-blur-sm border-0`}>{project.year}</Badge>
                        </div>

                        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="px-3 py-1 bg-background/50 backdrop-blur-sm border-0"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <Link
                            href="#"
                            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            View Project <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  View All Projects <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

