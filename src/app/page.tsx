import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
      <div className="space-y-24 py-16">
        {/* Hero Section */}
        <section className="container py-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Profile Information (Left Side) */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary">
                <img src="/placeholder.svg" alt="Your Name" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Elisio Cabral Sa</h1>
                <p className="text-xl text-muted-foreground">Software Engineer | Web Developer | Tech Enthusiast</p>
                <p className="text-muted-foreground max-w-md">
                  Passionate about creating efficient, scalable, and user-friendly web applications. Experienced in
                  full-stack development with a focus on modern JavaScript frameworks.
                </p>
              </div>
              <div className="flex space-x-4">
                <Button asChild variant="outline" size="icon">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href="mailto:your.email@example.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Education Information (Right Side) */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">Education</h2>
              <Card>
                <CardHeader>
                  <CardTitle>BSc in Software Engineering</CardTitle>
                  <CardDescription>Manchester Metropolitan University</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Graduated with honors, focusing on web technologies and software architecture.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Foundation Degree in Physics and Mathematics</CardTitle>
                  <CardDescription>Keele University</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Developed a strong analytical foundation and problem-solving skills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Project Card 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Project 1"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" size="sm" asChild>
                      <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="group-hover:text-primary transition-colors mb-2">E-commerce Platform</CardTitle>
                <CardDescription className="line-clamp-2">
                  A full-stack e-commerce solution with real-time inventory management and secure payment processing.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Stripe</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project Card 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Project 2"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" size="sm" asChild>
                      <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="group-hover:text-primary transition-colors mb-2">AI-Powered Task Manager</CardTitle>
                <CardDescription className="line-clamp-2">
                  A smart task management app that uses AI to prioritize and categorize tasks for optimal productivity.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>OpenAI API</Badge>
                  <Badge>Prisma</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project Card 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Project 3"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" size="sm" asChild>
                      <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="group-hover:text-primary transition-colors mb-2">
                  Real-time Collaboration Tool
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  A collaborative workspace with real-time document editing, video conferencing, and project management
                  features.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge>React</Badge>
                  <Badge>WebRTC</Badge>
                  <Badge>Socket.io</Badge>
                  <Badge>Express</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Software Engineer Contractor</CardTitle>
                <CardDescription>Company Name | Start Date - End Date</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Responsibility or achievement 1</li>
                  <li>Responsibility or achievement 2</li>
                  <li>Responsibility or achievement 3</li>
                </ul>
              </CardContent>
            </Card>
            {/* Add more experience cards as needed */}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="container py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Blog Post Card 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Blog Post 1"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" size="sm" asChild>
                      <Link href="/blog/post-1">Read Post</Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="group-hover:text-primary transition-colors mb-2">
                  Understanding React Hooks
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  An in-depth look at React Hooks and how they can simplify your component logic.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge>React</Badge>
                  <Badge>Hooks</Badge>
                  <Badge>JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Blog Post Card 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Blog Post 2"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" size="sm" asChild>
                      <Link href="/blog/post-2">Read Post</Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="group-hover:text-primary transition-colors mb-2">
                  The Power of TypeScript in Large-Scale Applications
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  Exploring how TypeScript can improve code quality and developer productivity in big projects.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge>TypeScript</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>Best Practices</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Blog Post Card 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Blog Post 3"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" size="sm" asChild>
                      <Link href="/blog/post-3">Read Post</Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="group-hover:text-primary transition-colors mb-2">
                  Optimizing Next.js Applications for Performance
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  Tips and tricks to boost the speed and efficiency of your Next.js web applications.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge>Next.js</Badge>
                  <Badge>Performance</Badge>
                  <Badge>Optimization</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6">
              <p className="mb-4 text-center">
                I&#39;m always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <Button className="w-full" asChild>
                <a href="mailto:your.email@example.com">Email Me</a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
  )
}


