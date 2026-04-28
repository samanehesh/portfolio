'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
    <div className="dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 py-10 grid gap-8">
        {totalImages > 0 && (
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={`/pimages/${project.image![current]}`}
              alt={`${project.title} ${current + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />

            {totalImages > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label="Previous project image"
                  className="absolute top-1/2 left-3 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-70 transition"
                >
                  &lsaquo;
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Next project image"
                  className="absolute top-1/2 right-3 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-70 transition"
                >
                  &rsaquo;
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.image!.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      aria-label={`Show image ${idx + 1}`}
                      className={`w-3 h-3 rounded-full cursor-pointer ${
                        current === idx ? 'bg-white' : 'bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-300">
            {project.category?.name} project
          </p>
          <h1 className="text-3xl font-bold dark:text-white">{project.title}</h1>
          <p className="mt-3 text-lg leading-8 text-gray-600 dark:text-gray-200">
            {project.excerpt}
          </p>
        </div>

        <p
          className="leading-8 text-gray-700 dark:text-white"
          dangerouslySetInnerHTML={{ __html: project.body }}
        ></p>

        <div className="flex gap-6 justify-end pr-5">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live ${project.title} project`}
              className="flex items-center gap-2 dark:text-white text-black hover:text-gray-700 transition"
            >
              <LinkIcon size={30} weight="bold" />
            </a>
          )}

          {project.repo && (
            <a
              href={`https://github.com/samanehesh/${project.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} GitHub repository`}
              className="flex items-center gap-2 dark:text-white text-gray-800 hover:text-gray-600 transition"
            >
              <GithubLogoIcon size={30} weight="bold" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
