"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { PROJECTS } from '@/data/projects';
import { IProject } from '@/interfaces/IProject';

import { TAGS } from '@/data/tags';
import { ITag } from '@/interfaces/ITag';

import Image from 'next/image';
import { ArrowRightIcon } from '@phosphor-icons/react';

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
        <div className='projects-page dark:bg-black'>
            <section className="projects-hero dark:text-white">
                <p className="projects-eyebrow">Selected work</p>
                <h1>Projects that show full stack thinking</h1>
                <p>
                    A focused collection of web applications covering responsive interfaces,
                    API integration, authentication, database-backed workflows, and MVC systems.
                </p>
            </section>
            <div className="filters">
                {tags.map((tag, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedTag(selectedTag === tag.name ? null : tag.name)}
                        className={`
                            px-3 py-1 border cursor-pointer transition-colors duration-200 ease-in-out
                            ${selectedTag === tag.name 
                            ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                            : 'bg-white text-black border-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700'
                            }
                        `}
                        >
                        {tag.name}
                    </button>

                ))}
            </div>
            <div className='projects-container'> 
                <Stars  />
                <div className="mb-3 projects">
                    {projects.length > 0 ? (
                        projects.map((project, index) => (
                            <article className="project dark:bg-black dark:text-white" key={index}>
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
                                            borderRadius: "8px",
                                        }}
                                    />
                                </div>
                                <div className="project-copy">
                                    <p className="project-category">{project.category?.name}</p>
                                    <h2 className="title dark:text-white">{project.title}</h2>
                                    <p className="project-excerpt">{project.excerpt}</p>
                                </div>
                                <div className="details">
                                    <div className="tags">
                                        {project.tags &&
                                            project.tags.map((tag, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setSelectedTag(selectedTag === tag.name ? null : tag.name)}
                                                    className={`
                                                        px-3 py-1 border cursor-pointer transition-colors duration-200 ease-in-out
                                                        ${selectedTag === tag.name 
                                                        ? 'bg-black text-white dark:bg-white dark:text-black' 
                                                        : 'bg-white text-black dark:bg-gray-800 dark:text-white'
                                                        }
                                                    `}
                                                    >
                                                    {tag.name}
                                                    </button>
                                            ))}
                                    </div>
                                    <div>
                                        <Link className="moreinfo dark:bg-gray-800  dark:text-white" href={`/projects/detail/${project.slug}`}>
                                            <span>Case study</span>
                                            <ArrowRightIcon size={16} weight="bold" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
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
