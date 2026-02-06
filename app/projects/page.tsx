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
                const filteredData = PROJECTS.filter((project) =>
                    project?.tags?.some((tag) => tag.name === selectedTag)
                );
                setProjects(filteredData);
            } else {
                setProjects(PROJECTS);
            }
        };
        loadFilteredProjects();
    }, [selectedTag]); 
    

    return (
        <div className='dark:bg-black'>
            <div className="filters">
                {tags.map((tag, index) => (
                    <p
                        key={index}
                        onClick={() => setSelectedTag(selectedTag === tag.name ? null : tag.name)}
                        className={`
                            px-3 py-1 rounded-md border cursor-pointer transition-colors duration-200 ease-in-out
                            ${selectedTag === tag.name 
                            ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                            : 'bg-white text-black border-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700'
                            }
                        `}
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
                            <div className="project dark:bg-black" key={index}>
                                <div className="images">
                                    <Image
                                        src={`/pimages/${project.image?.[0] || "angular.png"}`}
                                        alt={project.title}
                                        width={350} 
                                        height={200} 
                                        loading="eager"
                                        style={{
                                            objectFit: "cover", 
                                            width: "100%", 
                                            height: "100%", 
                                            borderRadius: "20px",
                                            padding: "2px",
                                        }}
                                    />
                                </div>
                                <h1 className="m-3 title dark:text-white">{project.title}</h1>
                                <div className="details">
                                    <div className="tags">
                                        {project.tags &&
                                            project.tags.map((tag, index) => (
                                                // <p
                                                //     style={{
                                                //         borderColor: tag?.color || "#007bff",
                                                //     }}
                                                //     key={index}
                                                // >
                                                //     {tag.name}
                                                // </p>

                                                <p
                                                    key={index}
                                                    onClick={() => setSelectedTag(selectedTag === tag.name ? null : tag.name)}
                                                    className={`
                                                        px-3 py-1 rounded-md border cursor-pointer transition-colors duration-200 ease-in-out
                                                        ${selectedTag === tag.name 
                                                        ? 'bg-black text-white dark:bg-white dark:text-black' 
                                                        : 'bg-white text-black dark:bg-gray-800 dark:text-white'
                                                        }
                                                    `}
                                                    //   style={{ borderColor: tag?.color || "#007bff" }} // dynamic border
                                                    >
                                                    {tag.name}
                                                    </p>
                                            ))}
                                    </div>
                                    <div>
                                        <Link className="moreinfo dark:bg-gray-800  dark:text-white" href={`/projects/detail/${project.slug}`}>
                                            i
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='dark:text-white'style={{ textAlign: "center", marginTop: "20px", fontSize: "18px" }}>
                            No projects available. Please select another tag or reset the filter.
                        </p>
                    )}
                </div>

            </div>




        </div>
    );
    
}

export default ProjectsPage;
