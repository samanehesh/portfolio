"use client";
import React, { useState, useEffect } from 'react';
import { IProject } from '@/interfaces/IProject';
import { PROJECTS } from '@/data/projects';

const ProjectPage = ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = React.use(params); // Unwrap the Promise
    const [project, setProject] = useState<IProject | null>(null);

    useEffect(() => {
        const loadProject = () => {
            const projectData = PROJECTS.find((project) => project.slug === slug);
            setProject(projectData || null); // Set to null if no project is found
        };

        if (slug) {
            loadProject();
        }
    }, [slug]);  // Depend on slug

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.body}</p>
            {/* Add more project details here as needed */}
        </div>
    );
};

export default ProjectPage;
