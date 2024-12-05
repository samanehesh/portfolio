"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { PROJECTS } from '@/data/projects';
import { IProject } from '@/interfaces/IProject';

import { TAGS } from '@/data/tags';
import { ITag } from '@/interfaces/ITag';

import Image from 'next/image';

import Stars from '@/components/stars';

import '@/styles/style.projects.css'
const ProjectsPage = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [tags, setTags] = useState<ITag[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null); // State to track selected tag



    useEffect(() => {
        const loadProjects = () => {
            const projectData = PROJECTS;
            setProjects(projectData);
        };
        const loadTags = () => {
            const tagData = TAGS;
            setTags(tagData);
        };

        loadProjects();
        loadTags();
    }, []);

    useEffect(() => {
        const loadFilteredProjects = () => {
            if (selectedTag) {
                // Filter projects by the selected tag
                const filteredData = PROJECTS.filter((project) =>
                    project?.tags?.some((tag) => tag.name === selectedTag)
                );
                setProjects(filteredData);
            } else {
                // Show all projects if no tag is selected
                setProjects(PROJECTS);
            }
        };
        loadFilteredProjects();
    }, [selectedTag]); // Run effect whenever selectedTag changes
    

    return (
        <div>
            <div className="filters">
                {tags.map((tag, index) => (
                    <p
                        style={{
                            borderColor: tag?.color || "#007bff",
                            backgroundColor: selectedTag === tag.name ? "black" : "white",
                            color: selectedTag === tag.name ? "white" : "black",
                        }}
                        onClick={() => setSelectedTag(selectedTag === tag.name ? null : tag.name)}
                        key={index}
                    >
                        {tag.name}
                    </p>
                ))}
            </div>
            <div className='projects-container'> 
                <Stars  />
                <div className="mb-3 projects">
                    {projects.length > 0 ? (
                        projects.map((project, index) => (
                            <div className="project" key={index}>
                                <div className="images">
                                    <Image
                                        src={`/pimages/${project.image?.[0] || "angular.png"}`}
                                        alt={project.title}
                                        width={350} // Specify width for auto scaling
                                        height={200} // Specify height for auto scaling
                                        loading="eager"
                                        style={{
                                            objectFit: "cover", // Ensures the image covers the container without overflow
                                            width: "100%", // Ensure image fills the width of the container
                                            height: "100%", // Ensure image fills the height of the container
                                            borderRadius: "20px",
                                            padding: "2px",
                                        }}
                                    />
                                </div>
                                <h1 className="m-3 title">{project.title}</h1>
                                <div className="details">
                                    <div className="tags">
                                        {project.tags &&
                                            project.tags.map((tag, index) => (
                                                <p
                                                    style={{
                                                        borderColor: tag?.color || "#007bff",
                                                    }}
                                                    key={index}
                                                >
                                                    {tag.name}
                                                </p>
                                            ))}
                                    </div>
                                    <div>
                                        <Link className="moreinfo" href={`/projects/detail/${project.slug}`}>
                                            i
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={{ textAlign: "center", marginTop: "20px", fontSize: "18px" }}>
                            No projects available. Please select another tag or reset the filter.
                        </p>
                    )}
                </div>

            </div>




        </div>
    );
    
}

export default ProjectsPage;
