import React from 'react';
import {Button} from "@/components/ui/button";
import {Github, Linkedin, Mail} from "lucide-react";

function HeroProfile() {
    return (
        <>
            <div
                className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary">
                    <img src="/placeholder.svg" alt="Your Name" className="w-full h-full object-cover"/>
                </div>
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Elisio Cabral Sa</h1>
                    <p className="text-xl text-muted-foreground">Software Engineer | Web Developer | Tech Enthusiast</p>
                    <p className="text-muted-foreground max-w-md">
                        Passionate about creating efficient, scalable, and user-friendly web applications. Experienced
                        in
                        full-stack development with a focus on modern JavaScript frameworks.
                    </p>
                </div>
                <div className="flex space-x-4">
                    <Button asChild variant="outline" size="icon">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5"/>
                            <span className="sr-only">GitHub</span>
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5"/>
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                        <a href="mailto:your.email@example.com">
                            <Mail className="h-5 w-5"/>
                            <span className="sr-only">Email</span>
                        </a>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default HeroProfile;