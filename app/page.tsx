"use client"

import Image from "next/image"
import { BackToTop } from "@/components/back-to-top"
import { Navbar } from "@/components/navbar"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Github, Linkedin, Mail, CodeXml, Code } from "lucide-react"

export default function Home() {
  const timeline = [
    {
      year: "March 2026 - Present",
      title: "Software Engineer",
      company: "Flip",
      companyLogo: "/flip.png",
      type: "Full-time",
      achievements: [
        "Building and scaling Gogogo, Flip's game top-up platform",
        "Contributing across backend services, web frontend, supplier integrations, and admin tools",
        "Developing core pieces of Gogogo's internationalization platform to serve multi-region markets",
        "More coming soon...",
      ],
    },
    {
      year: "Sep 2025 - Feb 2026",
      title: "Software Engineer",
      company: "Grab",
      companyLogo: "/grab.png",
      type: "Internship",
      achievements: [
        "Contributed to an AI oncall assistant built by the GrabFood Transaction Platform team",
        "Authored playbooks across multiple issue categories to help with oncall investigations",
        "Helped reduce manual oncall effort by standardizing how common issues are handled",
      ],
    },
    {
      year: "Mar 2025 - Sep 2025",
      title: "Software Engineer",
      company: "Bank Jago",
      companyLogo: "/jago.png",
      type: "Internship",
      achievements: [
        "Improved project overview and data governance with new visualizations for bank-related data",
        "Built internal project tracking systems for vendor management and initiave cost allocation",
        "Streamlined the efficiency of asset management and auditing of company-owned devices",
      ],
    },
    {
      year: "Oct 2024 - Mar 2025",
      title: "Software Engineer",
      company: "Telkom Indonesia",
      companyLogo: "/telkom.png",
      type: "Internship",
      achievements: [
        "Developed full stack apps for enterprise platforms and government analytics tools",
        "Conducted QA testing and bug identification to improve system stability",
        "Processed social media data points to improve sentiment analysis app and support decision-making",
      ],
    },
    {
      year: "Jul 2024 - Sep 2024",
      title: "Full-Stack Developer",
      company: "Garuda Maintenance Facility AeroAsia",
      companyLogo: "/gmf.png",
      type: "Internship",
      achievements: [
        "Built web solutions to improve aircraft design workflow efficiency and accelerate processing of audit reports",
        "Migrate architecture with modern tech stack for better performance",
        "Enhanced UI/UX design and implemented new features for smoother workflows",
      ],
    }
  ]

  const projects = [
    {
      title: "LumenLab: AI Research Hub",
      description: "Organize users' papers and experiments, then utilize AI to summarize and answer questions about the their reading.",
      image: "/projects/ai-chat.jpg",
      techStack: ["Next.js", "FastAPI", "LangGraph", "LangChain", "PostgreSQL"],
      demoUrl: "#",
      repoUrl: "https://github.com/zalfyputra/LumenLab",
    },
    {
      title: "FitBuddy: AI Nutrition Assistant",
      description: "A real-time chat application powered by AI that helps users plan workouts, track calories, or ask fitness questions.",
      image: "/projects/ai-chat.jpg",
      techStack: ["Next.js", "Golang", "LangGraph", "LangChain", "PostgreSQL"],
      demoUrl: "#",
      repoUrl: "https://github.com/zalfyputra/FitBuddy",
    },
    {
      title: "Jago & DKatalis Asset Tracker",
      description: "Web solution to enhance the efficiency of asset management and streamline the auditing of company-owned devices.",
      image: "/projects/ecommerce.jpg",
      techStack: ["Next.js", "Golang", "PostgeSQL"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "STRAM FTUI Dashboard",
      description: "Real-time road traffic monitoring system in FTUI for automatic vehicle type identification and accurate speed detection.",
      image: "/projects/dashboard.jpg", // Replace with your image
      techStack: ["React.js", "Firebase", "Raspberry Pi", "YOLOv8", "TensorFlow"],
      demoUrl: "http://stram.vercel.app",
      repoUrl: "http://github.com/zalfyputra/STRAM",
    },
    {
      title: "GMF AeroAsia DOA Dashboard",
      description: "A web solution to improve aircraft design workflow efficiency and accelerating processing of audit reports.",
      image: "/projects/dashboard.jpg", // Replace with your image
      techStack: ["TypeScript", "AngularJS", "NestJS", "PostgreSQL", "Google Cloud Platform"],
      demoUrl: "#",
      repoUrl: "https://github.com/zalfyputra/Dashboard-DOA-GMF",
    },
    {
      title: "ArtNaon (Backend)",
      description: "AI-powered painting genre detection mobile app that allows users to upload a painting and get a genre prediction with 95% accuracy.",
      image: "/projects/dashboard.jpg", // Replace with your image
      techStack: ["JavaScript", "Node.js", "Flask", "MySQL", "Docker", "Google Cloud Platform"],
      demoUrl: "#",
      repoUrl: "https://github.com/zalfyputra/ArtNaon-CC",
    },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <BackToTop />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* Profile Image */}
            <div className="hero-reveal flex justify-center" style={{ "--d": "0ms" } as React.CSSProperties}>
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border bg-muted">
                <Image
                  src="/cafe.png"
                  alt="Zalfy Putra"
                  fill
                  priority
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>

            <h1
              className="hero-reveal mt-8 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              style={{ "--d": "150ms" } as React.CSSProperties}
            >
              Zalfy Putra
            </h1>

            <p
              className="hero-reveal mt-4 text-lg sm:text-xl text-muted-foreground"
              style={{ "--d": "300ms" } as React.CSSProperties}
            >
              Full Stack Developer &amp; AI Engineer
            </p>

            <p
              className="hero-reveal mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
              style={{ "--d": "450ms" } as React.CSSProperties}
            >
              Transforming complex challenges into elegant solutions through code, creativity, and technology.
            </p>

            <div
              className="hero-reveal mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
              style={{ "--d": "600ms" } as React.CSSProperties}
            >
              <Button size="lg" className="gap-2" asChild>
                <a href="https://drive.google.com/file/d/1DXTWlhHIj31xeqRH4Q4BTgSbjgrQF1xn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Let&apos;s Connect</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Timeline */}
      <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Professional <span className="text-tone-light">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions and leading teams to success
            </p>
          </Reveal>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-tone-light via-tone-mid to-tone-dark hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <Reveal key={idx} className="relative pl-0 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-linear-to-br from-tone-light to-tone-mid border-4 border-background hidden md:block"></div>

                  <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 gap-4">
                    <CardHeader>
                      <div className="flex gap-4">
                        {/* Company Logo */}
                        <div className="shrink-0">
                          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-muted overflow-hidden">
                            <Image
                              src={item.companyLogo}
                              alt={`${item.company} logo`}
                              fill
                              sizes="56px"
                            />
                          </div>
                        </div>

                        {/* Title and Badge */}
                        <div className="grow">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                            <div>
                              <CardTitle className="text-xl sm:text-2xl mb-1">{item.title}</CardTitle>
                              <CardDescription className="text-sm sm:text-base">
                                <span className="font-semibold text-foreground">{item.company}</span> • {item.year}
                              </CardDescription>
                            </div>
                            <Badge className="self-start">{item.type}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 marker:text-muted-foreground">
                        {item.achievements.map((achievement, achIdx) => (
                          <li key={achIdx} className="text-muted-foreground">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="text-tone-light">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Several of my best works and contributions
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Reveal key={idx} delay={(idx % 3) * 100} className="h-full">
              <Card className="h-full overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 group flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 bg-linear-to-br from-tone-dark/60 to-tone-mid/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-muted-foreground/20">
                    {project.title.charAt(0)}
                  </div>
                  {/* Replace the above with actual image when you have one:
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  /> */}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 grow flex flex-col">
                  {/* Tech Stack */}
                  <div className="grow">
                    <p className="text-sm font-semibold mb-2 text-muted-foreground">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIdx) => (
                        <Badge key={techIdx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button asChild size="sm" className="flex-1">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Code className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="flex-1">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - CTA */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Reveal>
          <Card className="border-2 shadow-2xl">
            <CardContent className="p-12 text-center space-y-8">
              <div className="inline-block p-4 rounded-full bg-linear-to-br from-tone-light/20 to-tone-mid/20">
                <CodeXml className="w-12 h-12 text-tone-light" />
              </div>

              <div className="space-y-10">
                <h2 className="text-4xl sm:text-5xl font-bold">
                  Let's Build Something <span className="text-tone-light">Amazing</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="gap-2 px-8 py-6 text-lg" asChild>
                  <a href="mailto:zalfyputra@gmail.com">
                    <Mail className="w-5 h-5" />
                    Send me an email
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg" asChild>
                  <a href="http://linkedin.com/in/zalfyputra" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg" asChild>
                  <a href="http://github.com/zalfyputra" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                    View GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <p className="py-8 px-4 text-center text-sm text-muted-foreground">
        © 2026 Zalfy Putra
      </p>
    </main>
  )
}
