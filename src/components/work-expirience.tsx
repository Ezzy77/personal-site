import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

function WorkExpirience() {
    return (
        <>
            <h2 className="text-3xl font-bold mb-8 ">Work Experience</h2>
            <div className="space-y-6 max-w-3xl ">
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
        </>
    );
}

export default WorkExpirience;