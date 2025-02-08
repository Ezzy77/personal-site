import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import { cn } from "@/lib/utils"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Your Name - Software Engineer",
    description: "Personal portfolio and blog of Your Name, a software engineer specializing in web development.",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="relative flex min-h-screen flex-col">
                <Header />
                <main className="flex justify-center">{children}</main>
                <footer className="border-t bg-background/30 backdrop-blur-sm">
                    <div className="container flex items-center justify-between py-6">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Your Name. All rights reserved.
                        </p>
                        <div className="flex space-x-4">{/* Add social media icons here */}</div>
                    </div>
                </footer>
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}
