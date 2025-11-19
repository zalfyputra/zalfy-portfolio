"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Github, Linkedin, Mail, ArrowRight, Code2, Brain, Database, Cloud, Palette, Rocket, TrendingUp, BarChart3, Zap, CheckCircle2, Layers, Code } from "lucide-react"
import { SiAngular, SiPython, SiJavascript, SiTypescript, SiCplusplus, SiKotlin, SiPhp, SiMysql, SiNextdotjs, SiReact, SiTailwindcss, SiLaravel, SiFastapi, SiAndroidstudio, SiFigma, SiPostgresql, SiMongodb, SiRedis, SiFirebase, SiSupabase, SiSqlite, SiGooglecloud, SiVercel, SiNetlify, SiDocker, SiPytorch, SiTensorflow, SiScikitlearn, SiOpencv, SiTableau, SiStreamlit, SiBootstrap, SiExpress, SiNodedotjs, SiGo, SiOllama, SiHuggingface, SiKeras, SiHtml5, SiCss3, SiC, SiNestjs, SiAmazonwebservices, SiLangchain, SiGitlab } from "react-icons/si"
import { TbBrandOpenai, TbDatabase } from "react-icons/tb"

export default function Home() {
  const skillCategories = [
    {
      title: "Full-Stack Development",
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
      skills: [
        "Frontend Development",
        "Backend Development",
        "Software Quality Assurance",
        "Automation Testing",
        "UI/UX Design",
        "Database Systems",
        "CI/CD Pipelines",
      ],
    },
    {
      title: "AI Engineering",
      icon: Brain,
      color: "from-cyan-500 to-blue-500",
      skills: [
        "Large Language Models",
        "Multi-Agent Systems",
        "Model Context Protocol",
        "Retrieval-Augmented Generation",
        "Model Training & Fine-Tuning",
        "AI Full-Stack Development",
      ],
    },
    {
      title: "Data Science",
      icon: BarChart3,
      color: "from-cyan-500 to-blue-500",
      skills: [
        "Data Analysis",
        "Data Visualization",
        "Data Mining",
        "Statistical Modeling",
        "Machine Learning",
        "Deep Learning",
      ],
    },
  ]

  const toolsCategories = [
    {
      title: "Full-Stack Development",
      icon: Layers,
      tools: [
        { name: "React", icon: SiReact },
        { name: "Angular", icon: SiAngular },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "NestJS", icon: SiNestjs },
        { name: "FastAPI", icon: SiFastapi },
      ],
    },
    {
      title: "AI Engineering",
      icon: Brain,
      tools: [
        { name: "LLMs", icon: TbBrandOpenai },
        { name: "LangChain", icon: SiLangchain },
        { name: "LangGraph", icon: TbDatabase },
        { name: "OLlaMa", icon: SiOllama },
        { name: "HuggingFace", icon: SiHuggingface },
      ],
    },
    {
      title: "Languages",
      icon: Code2,
      tools: [
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Python", icon: SiPython },
        { name: "Go", icon: SiGo },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "C", icon: SiC },
        { name: "C++", icon: SiCplusplus },
      ],
    },
    {
      title: "Database Systems",
      icon: Database,
      tools: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Firebase Firestore", icon: SiFirebase },
      ],
    },
    {
      title: "Data Science",
      icon: BarChart3,
      tools: [
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "PyTorch", icon: SiPytorch },
        { name: "OpenCV", icon: SiOpencv },
        { name: "Keras", icon: SiKeras },
        { name: "Streamlit", icon: SiStreamlit },
        { name: "Scikit-Learn", icon: SiScikitlearn },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      tools: [
        { name: "GCP", icon: SiGooglecloud },
        { name: "AWS", icon: SiAmazonwebservices },
        { name: "Gitlab", icon: SiGitlab },
        { name: "Docker", icon: SiDocker },
        { name: "Firebase", icon: SiFirebase },
        { name: "Vercel", icon: SiVercel },
        { name: "Netlify", icon: SiNetlify },
      ],
    },
  ]

  const timeline = [
    {
      year: "Sep 2025 - Present",
      title: "Software Engineer",
      company: "Grab",
      type: "Internship",
      description: "Leading AI integration projects and architecting scalable cloud solutions.",
      achievements: [
        "Architected and deployed 5+ AI-powered features serving 100K+ users",
        "Reduced infrastructure costs by 40% through cloud optimization",
        "Led team of 6 engineers in building microservices architecture",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
    },
    {
      year: "Mar 2025 - Sep 2025",
      title: "Software Engineer",
      company: "Bank Jago",
      type: "Internship",
      description: "Drove product strategy and cross-functional collaboration.",
      achievements: [
        "Launched 3 major product features increasing retention by 150%",
        "Managed product roadmap serving enterprise clients",
        "Coordinated between engineering, design, and sales teams",
        "Conducted user research with 200+ customers",
      ],
    },
    {
      year: "Oct 2024 - Mar 2025",
      title: "Software Engineer",
      company: "Telkom Indonesia",
      type: "Internship",
      description: "Built predictive models and data visualization solutions.",
      achievements: [
        "Developed ML models improving prediction accuracy by 35%",
        "Created interactive dashboards for C-level executives",
        "Processed and analyzed 10M+ data points daily",
        "Published research on advanced statistical methods",
      ],
    },
    {
      year: "Jul 2024 - Sep 2024",
      title: "Full-Stack Developer",
      company: "Garuda Maintenance Facility AeroAsia",
      type: "Internship",
      description: "Drove product strategy and cross-functional collaboration.",
      achievements: [
        "Launched 3 major product features increasing retention by 150%",
        "Managed product roadmap serving enterprise clients",
        "Coordinated between engineering, design, and sales teams",
        "Conducted user research with 200+ customers",
      ],
    }
  ]

  const projects = [
    {
      title: "AI Chat Application",
      description: "A real-time chat application powered by AI for intelligent responses and conversation management.",
      image: "/projects/ai-chat.jpg", // Replace with your image
      techStack: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Tailwind CSS"],
      demoUrl: "https://demo-link.com",
      repoUrl: "https://github.com/yourusername/project",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/projects/ecommerce.jpg", // Replace with your image
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      demoUrl: "https://demo-link.com",
      repoUrl: "https://github.com/yourusername/project",
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with real-time analytics and custom reports.",
      image: "/projects/dashboard.jpg", // Replace with your image
      techStack: ["Python", "TensorFlow", "Streamlit", "PostgreSQL"],
      demoUrl: "https://demo-link.com",
      repoUrl: "https://github.com/yourusername/project",
    },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2 inline" />
                Available for new opportunities
              </Badge>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Hi, I'm Zalfy
              </span>
            </h1>
            
            <p className="text-3xl sm:text-3xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Full Stack Developer • AI/ML Engineer • QA Engineer
            </p>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transforming complex challenges into elegant solutions through code, creativity, and cutting-edge AI technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="gap-2 group px-8 py-6 text-lg" asChild>
                <a href="/sample-cv.pdf" download="Jason-CV.pdf">
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-5 py-6 text-lg" asChild>
                <a href="#contact">
                  Let's Connect
                </a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <Button variant="ghost" size="icon" className="rounded-full w-12 h-12" asChild>
                <a href="https://github.com/zalfyputra" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full w-12 h-12" asChild>
                <a href="https://linkedin.com/zalfyputra" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full w-12 h-12" asChild>
                <a href="mailto:zalfyputra@gmail.com" aria-label="Email">
                  <Mail className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-3xl bg-background flex items-center justify-center text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600">
                  J
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full filter blur-2xl opacity-50"></div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">About Me</Badge>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Passionate About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Innovation</span>
                </h2>
              </div>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a recent graduate in Computer Engineering from Universitas Indonesia with an insatiable passion for technology and innovation. My journey has been defined by turning ambitious ideas into reality through code and creativity.
                </p>
                <p>
                  With expertise spanning <span className="font-semibold text-foreground">Full-Stack Development</span>, <span className="font-semibold text-foreground">Data & AI Engineering</span>, and <span className="font-semibold text-foreground">Software Quality Assurance</span>, I bring a unique multidisciplinary perspective to every project I undertake.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-semibold">10+ Projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-7">Successfully delivered</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-semibold">100K+ Users</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-7">Impacted globally</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-semibold">5+ Years</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-7">Industry experience</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-semibold">Award Winner</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-7">Innovation leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Clean Badge Layout */}
      <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Expertise</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience and continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <Card key={idx} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIdx) => (
                        <Badge 
                          key={skillIdx} 
                          variant="secondary"
                          className="px-3 py-1.5 text-sm font-normal bg-muted hover:bg-muted/80 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section id="tools" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Tech Stack</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Tools & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to build innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsCategories.map((category, idx) => {
              const HeaderIcon = category.icon
              return (
                <Card key={idx} className="hover:shadow-xl transition-all duration-300 border">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950">
                        <HeaderIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <CardTitle className="text-lg font-bold">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-4 gap-4">
                      {category.tools.map((tool, toolIdx) => {
                        const ToolIcon = tool.icon
                        return (
                          <div 
                            key={toolIdx}
                            className="flex flex-col items-center gap-2  rounded-lg"
                          >
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted/50">
                              <ToolIcon className="w-6 h-6 text-foreground/70" />
                            </div>
                            <span className="text-xs text-center text-muted-foreground font-medium leading-tight">
                              {tool.name}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Section - Timeline */}
      <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Journey</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions and leading teams to success
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-0 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-background hidden md:block"></div>

                  <Card className="hover:shadow-xl transition-all duration-300 border-2">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                          <CardDescription className="text-base">
                            <span className="font-semibold text-foreground">{item.company}</span> • {item.year}
                          </CardDescription>
                        </div>
                        <Badge className="self-start sm:self-center">{item.type}</Badge>
                      </div>
                      <p className="text-muted-foreground mt-4">{item.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {item.achievements.map((achievement, achIdx) => (
                          <li key={achIdx} className="flex gap-3">
                            <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{achievement}</span>
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Portfolio</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my best work and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 group flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 overflow-hidden">
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

                <CardContent className="space-y-4 flex-grow flex flex-col">
                  {/* Tech Stack */}
                  <div className="flex-grow">
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
                    <Button asChild size="sm" variant="outline" className="flex-1">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Code className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button asChild size="sm" className="flex-1">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - CTA */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <Card className="border-2 shadow-2xl">
            <CardContent className="p-12 text-center space-y-8">
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <Rocket className="w-12 h-12 text-purple-600 dark:text-purple-400" />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold">
                  Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Amazing</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="gap-2 px-8 py-6 text-lg" asChild>
                  <a href="mailto:jason@example.com">
                    <Mail className="w-5 h-5" />
                    Send me an email
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">Made by Zalfy Putra Rezky</p>
            <div className="flex gap-6">
              <a href="https://github.com/zalfyputra" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
              <a href="https://linkedin.com/zalfyputra" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="mailto:zalfyputra@gmail.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

