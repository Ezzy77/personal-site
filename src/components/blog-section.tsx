import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";

interface Post {
    title: string;
    description: string;
    image: string;
    date: string;
    link: string;
    tags: string[];
}
function BlogSection({posts}: { posts: Post[] }) {
    return (
        <>
            <h2 className="text-3xl font-bold mb-12 ">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
                {/* Blog Post Card 1 */}
                {posts.map((post, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                        <CardHeader className="p-0">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button variant="secondary" size="sm" asChild>
                                        <Link href={post.link}>Read Post</Link>
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4">
                            <CardTitle className="group-hover:text-primary transition-colors mb-2">{post.title}</CardTitle>
                            <CardDescription className="line-clamp-2">{post.description}</CardDescription>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {post.tags.map((tag, index) => (
                                    <Badge key={index}>{tag}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
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