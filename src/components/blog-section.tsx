import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";

function BlogSection() {
    return (
        <>
            <h2 className="text-3xl font-bold mb-12 ">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
                {/* Blog Post Card 1 */}
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <CardHeader className="p-0">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="/placeholder.svg?height=200&width=400"
                                alt="Blog Post 1"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                            Exploring how TypeScript can improve code quality and developer productivity in big
                            projects.
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
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        </>
    );
}

export default BlogSection;