"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { PROJECTS } from '@/data/projects';
import { IProject } from '@/interfaces/IProject';

const ProjectsPage = () => {
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        const loadProjects = () => {
            const projectData = PROJECTS;
            setProjects(projectData);
        };

        loadProjects();
    }, []);

    return (
        <div>
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.excerpt}</p>
                    <p style={{ color: project.category?.color }}>{project.category?.name}</p>
                    {project.tags && project.tags.map((tag, index) => (
                    <p style= {{ color: tag?.color}} key={index}>{tag.name}</p> // Adding a key for each tag
                    ))}

                    <Link
                        className="btn btn-primary btn-outline mr-3 mb-1"
                        href={`/projects/detail/${project.slug}`}
                        >
                        More Info
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProjectsPage;
