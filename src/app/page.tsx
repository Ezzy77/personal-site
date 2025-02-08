import { Button } from "@/components/ui/button"
import { Card,  CardContent } from "@/components/ui/card"
import FeaturedProjects from "@/components/featured-projects";
import WorkExpirience from "@/components/work-expirience";
import BlogSection from "@/components/blog-section";
import HeroProfile from "@/components/hero-profile";
import Education from "@/components/education";

const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
        techStack: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "/placeholder.svg?height=200&width=400",
        githubLink: ""
    },
    {
        title: "Social Media Dashboard",
        description: "A dashboard for managing social media accounts and scheduling posts across platforms.",
        techStack: ["React", "Firebase", "Tailwind CSS"],
        image: "/placeholder.svg?height=200&width=400",
        githubLink: ""
    },
    {
        title: "Task Management App",
        description: "A task management application with user authentication and real-time updates.",
        techStack: ["React", "Firebase", "Chakra UI"],
        image: "/placeholder.svg?height=200&width=400",
        githubLink: ""
    },
    {
        title: "Weather App",
        description: "A weather application that displays the current weather and forecast for a given location.",
        techStack: ["React", "OpenWeatherMap API", "Tailwind CSS"],
        image: "/placeholder.svg?height=200&width=400",
        githubLink: ""
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing projects, skills, and contact information.",
        techStack: ["Next.js", "Tailwind CSS", "Vercel"],
        image: "/placeholder.svg?height=200&width=400",
        githubLink: ""
    },
    {
        title: "Blog Platform",
        description: "A platform for creating and publishing blog posts with a rich text editor and image uploads.",
        techStack: ["React", "Node.js", "MongoDB", "Quill"],
        image: "/placeholder.svg?height=200&width=400",
        githubLink: ""
    }
]


export default function Home() {

  return (
      <div className="space-y-24 py-16">
        <section className="container py-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <HeroProfile />
            <Education />
          </div>
        </section>
        <section id="projects" className="container ">
          <FeaturedProjects
            projects={projects}
          />
        </section>
        <section id="experience" className="container">
          <WorkExpirience />
        </section>
        <section id="blog" className="container py-24">
          <BlogSection />
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


