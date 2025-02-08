import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";

interface Project {
    title: string;
    description: string;
    techStack: string[];
    image: string;
    githubLink: string;
}

function FeaturedProjects({projects}: { projects: Project[] }) {
    return (
        <>
            <h2 className="text-3xl font-bold mb-12 ">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl ">
                {projects.map((project, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                        <CardHeader className="p-0">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button variant="secondary" size="sm" asChild>
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                            View Project
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4">
                            <CardTitle className="group-hover:text-primary transition-colors mb-2">{project.title}</CardTitle>
                            <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.techStack.map((tech: string, index: number) => (
                                    <Badge key={index}>{tech}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default FeaturedProjects;