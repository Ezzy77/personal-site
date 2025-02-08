import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

function Education() {
    return (
        <>
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
        </>
    );
}

export default Education;