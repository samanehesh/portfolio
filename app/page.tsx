import SlickCarousel from '@/components/SlickCarousel';
import Stars from '@/components/stars';
import Link from 'next/link';

import '@/styles/style.main.css'

export default function Home() {
  return (
    <div className='home-page'>
      <Stars/>
      <section className='hero-section dark:bg-black dark:text-white'>
        <div className="hero-eyebrow">Samaneh Heshmatzadeh</div>
        <div className="grid grid-cols-1 gap-1">
          <h1 className="hero-title">
            Full Stack Software Developer
          </h1>
        </div>

        <div className='description'>
          I build responsive, maintainable web applications with React, Next.js,
          Node.js, C#, and SQL, with a focus on clear user flows and reliable
          full stack foundations.
        </div>

        <div className="hero-actions">
          <Link className="button-link primary-action dark:bg-white dark:hover:bg-gray-200 dark:text-black" href="/projects">
            View Projects
          </Link>
          <Link className="button-link secondary-action dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white" href="/contact">
            Contact Me
          </Link>
        </div>

        <div className="hero-highlights">
          <span>React and Next.js</span>
          <span>Node.js and Express</span>
          <span>C# MVC and SQL</span>
        </div>
      </section>
      <div className='carousel'>
        <SlickCarousel/>
      </div>

    </div>
  );
}
