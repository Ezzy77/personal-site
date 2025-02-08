import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full flex justify-around border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <Link href="/" className="font-bold text-xl mr-6">
                    Elisio Cabral Sa
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
                    <Link href="/#projects" className="transition-colors hover:text-foreground/80">
                        Projects
                    </Link>
                    <Link href="/#experience" className="transition-colors hover:text-foreground/80">
                        Experience
                    </Link>
                    <Link href="/#education" className="transition-colors hover:text-foreground/80">
                        Education
                    </Link>
                    <Link href="/blog" className="transition-colors hover:text-foreground/80">
                        Blog
                    </Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <Button asChild variant="ghost">
                        <Link href="/#contact">Contact</Link>
                    </Button>
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

