"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Github, Linkedin, Mail, ArrowRight, Code2, Brain, Database, Cloud, Palette, Rocket, TrendingUp, BarChart3, Zap, CheckCircle2, Layers } from "lucide-react"
import { SiPython, SiJavascript, SiTypescript, SiCplusplus, SiKotlin, SiPhp, SiMysql, SiNextdotjs, SiReact, SiTailwindcss, SiLaravel, SiFastapi, SiAndroidstudio, SiFigma, SiPostgresql, SiMongodb, SiRedis, SiFirebase, SiSupabase, SiSqlite, SiGooglecloud, SiVercel, SiNetlify, SiDocker, SiPytorch, SiTensorflow, SiScikitlearn, SiOpencv, SiTableau, SiStreamlit } from "react-icons/si"
import { TbBrandOpenai, TbDatabase } from "react-icons/tb"

export default function Home() {
  const skillCategories = [
    {
      title: "Full-Stack & Mobile Development",
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
      skills: [
        "Frontend Development",
        "Backend Development",
        "Mobile Development",
        "API Development",
        "UI/UX Design",
        "DevOps Integration",
        "Database Design",
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
        "AI Product Development",
      ],
    },
    {
      title: "Data Science",
      icon: BarChart3,
      color: "from-cyan-500 to-blue-500",
      skills: [
        "Data Analysis",
        "Data Visualization",
        "Statistical Modeling",
        "Machine Learning",
        "Deep Learning",
        "Data Mining",
      ],
    },
  ]

  const toolsCategories = [
    {
      title: "Full-Stack Development",
      icon: Layers,
      tools: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: SiReact },
        { name: "Shadcn/ui", icon: Code2 },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Laravel", icon: SiLaravel },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Android Studio", icon: SiAndroidstudio },
        { name: "Figma", icon: SiFigma },
      ],
    },
    {
      title: "AI Engineering",
      icon: Brain,
      tools: [
        { name: "LLMs", icon: TbBrandOpenai },
        { name: "LangChain", icon: TbDatabase },
        { name: "LangGraph", icon: TbDatabase },
        { name: "MetaGPT", icon: Brain },
        { name: "LlamaIndex", icon: TbDatabase },
        { name: "Vertex AI", icon: Brain },
        { name: "Ollama", icon: Brain },
        { name: "HuggingFace", icon: Brain },
      ],
    },
    {
      title: "Languages",
      icon: Code2,
      tools: [
        { name: "Python", icon: SiPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "C", icon: SiCplusplus },
        { name: "C++", icon: SiCplusplus },
        { name: "Kotlin", icon: SiKotlin },
        { name: "PHP", icon: SiPhp },
        { name: "SQL", icon: SiMysql },
      ],
    },
    {
      title: "Database Systems",
      icon: Database,
      tools: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Redis", icon: SiRedis },
        { name: "Firebase RTDB", icon: SiFirebase },
        { name: "Firebase Firestore", icon: SiFirebase },
        { name: "Supabase", icon: SiSupabase },
        { name: "SQLite", icon: SiSqlite },
      ],
    },
    {
      title: "Data Science & Machine Learning",
      icon: BarChart3,
      tools: [
        { name: "Scikit-Learn", icon: SiScikitlearn },
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "PyTorch", icon: SiPytorch },
        { name: "OpenCV", icon: SiOpencv },
        { name: "Streamlit", icon: SiStreamlit },
        { name: "Power BI", icon: BarChart3 },
        { name: "Tableau", icon: SiTableau },
        { name: "Excel", icon: Database },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      tools: [
        { name: "GCP", icon: SiGooglecloud },
        { name: "Firebase", icon: SiFirebase },
        { name: "Vercel", icon: SiVercel },
        { name: "Netlify", icon: SiNetlify },
        { name: "Docker", icon: SiDocker },
      ],
    },
  ]

  const timeline = [
    {
      year: "2022 - Present",
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      type: "Full-time",
      description: "Leading AI integration projects and architecting scalable cloud solutions.",
      achievements: [
        "Architected and deployed 5+ AI-powered features serving 100K+ users",
        "Reduced infrastructure costs by 40% through cloud optimization",
        "Led team of 6 engineers in building microservices architecture",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
    },
    {
      year: "2020 - 2022",
      title: "Product Manager",
      company: "Innovation Startup",
      type: "Full-time",
      description: "Drove product strategy and cross-functional collaboration.",
      achievements: [
        "Launched 3 major product features increasing retention by 150%",
        "Managed product roadmap serving enterprise clients",
        "Coordinated between engineering, design, and sales teams",
        "Conducted user research with 200+ customers",
      ],
    },
    {
      year: "2018 - 2020",
      title: "Data Scientist",
      company: "Analytics Firm",
      type: "Full-time",
      description: "Built predictive models and data visualization solutions.",
      achievements: [
        "Developed ML models improving prediction accuracy by 35%",
        "Created interactive dashboards for C-level executives",
        "Processed and analyzed 10M+ data points daily",
        "Published research on advanced statistical methods",
      ],
    },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section with Gradient */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-blue-950">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
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
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Full Stack Developer • AI Engineer • Data Scientist
            </p>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transforming complex challenges into elegant solutions through code, creativity, and cutting-edge AI technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="gap-2 group px-8 py-6 text-lg" asChild>
                <a href="/sample-cv.pdf" download="Jason-CV.pdf">
                  <Download className="w-5 h-5" />
                  Download Resume
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg" asChild>
                <a href="#contact">
                  Let's Connect
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 hover:scale-110 transition-transform" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 hover:scale-110 transition-transform" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 hover:scale-110 transition-transform" asChild>
                <a href="mailto:jason@example.com" aria-label="Email">
                  <Mail className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
            <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full animate-scroll"></div>
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
                  I'm <span className="font-bold text-foreground">Jason</span>, a Harvard graduate with an insatiable passion for technology and innovation. My journey has been defined by turning ambitious ideas into reality through code and creativity.
                </p>
                <p>
                  With expertise spanning <span className="font-semibold text-foreground">full-stack development</span>, <span className="font-semibold text-foreground">AI engineering</span>, and <span className="font-semibold text-foreground">data science</span>, I bring a unique multidisciplinary perspective to every project I undertake.
                </p>
                <p>
                  As a product manager and cloud architect, I don't just build software—I craft experiences that users love while ensuring they're built on rock-solid, scalable foundations.
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
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 flex items-center justify-center">
                      <Icon className={`w-8 h-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
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
                  <CardHeader className="pb-4">
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
                            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors group cursor-pointer"
                          >
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-muted transition-colors">
                              <ToolIcon className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors" />
                            </div>
                            <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors font-medium leading-tight">
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
              <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="mailto:jason@example.com" className="text-muted-foreground hover:text-foreground transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

