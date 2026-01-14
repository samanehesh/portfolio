'use client';

import React, { useState } from 'react';
import Image from 'next/image';
// import { IProject } from '@/interfaces/IProject';
import { PROJECTS } from '@/data/projects';
import { LinkIcon, GithubLogoIcon } from '@phosphor-icons/react';

const ProjectPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = React.use(params);
  const project = PROJECTS.find((p) => p.slug === slug);

  const [current, setCurrent] = useState(0);

  if (!project) {
    return <div className="text-center mt-20 text-lg">Project not found</div>;
  }

  const totalImages = project.image?.length || 0;

  const nextImage = () => setCurrent((prev) => (prev + 1) % totalImages);
  const prevImage = () => setCurrent((prev) => (prev - 1 + totalImages) % totalImages);

  return (
    <div className="max-w-4xl mx-auto p-4 grid gap-6">
      {/* Image Carousel */}
      {totalImages > 0 && (
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={`/pimages/${project.image![current]}`}
            alt={`${project.title} ${current + 1}`}
            fill
            style={{ objectFit: 'cover' }}
          />

          {/* Navigation buttons */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {project.image!.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  current === idx ? 'bg-white' : 'bg-gray-400'
                }`}
              ></span>
            ))}
          </div>
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold">{project.title}</h1>

      <p
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: project.body }}
      ></p>

      {/* Links */}
      <div className="flex gap-6 justify-end pr-5">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black hover:text-gray-700 transition"
          >
            <LinkIcon size={30} weight="bold" />
          </a>
        )}

        {project.repo && (
          <a
            href={`https://github.com/samanehesh/${project.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition"
          >
            <GithubLogoIcon size={30} weight="bold" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
