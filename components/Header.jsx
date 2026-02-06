'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HouseIcon, ListIcon, SunIcon, MoonIcon } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';

import '@/styles/style.header.css';

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // theme logic
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const linkClass = (active) =>
    `font-bold ${
      active ? 'text-gray-700 dark:text-gray-300' : 'hover:text-gray-700 dark:hover:text-gray-300'
    }`;

  return (
    <header className="w-full shadow-sm bg-background dark:bg-black dark:text-white text-foreground">
      <div className="flex items-center px-4 py-4 mt-3 md:px-8">

        {/* LEFT — Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <HouseIcon
              size={32}
              weight="bold"
              className="text-foreground dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            />
          </Link>
        </div>

        {/* CENTER — Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-10 text-lg">
          <Link href="/" className={linkClass(pathname === '/')}>
            Home
          </Link>
          <Link
            href="/projects"
            className={linkClass(pathname.startsWith('/projects'))}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={linkClass(pathname === '/contact')}
          >
            Contact
          </Link>
        </nav>

        {/* RIGHT — Resume + Theme Toggle */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <a
            href="/resume/Samaneh-Heshmatzadeh.pdf"
            download
            className="button-link  dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white font-normal"
          >
            Resume
          </a>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? (
                <SunIcon size={22} />
              ) : (
                <MoonIcon size={22} />
              )}
            </button>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto text-2xl mt-3"
          aria-label="Toggle menu"
        >
          <ListIcon size={32} weight="bold" />
        </button>
      </div>

      {/* MOBILE MENU */}
    {/* <hr /> */}
      {open && (
        <div className="md:hidden flex flex-col p-7 gap-6">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <hr />
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <hr />
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <hr />

          <a
            href="/resume/Samaneh-Heshmatzadeh-Resume.pdf"
            download
          >
            Resume
          </a>

          {/* MOBILE Theme Toggle */}
          {mounted && (
            <button
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
                setOpen(false);
              }}
              className="flex items-center gap-2"
            >
              {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          )}
        </div>
      )}

      <hr className='dark:border-gray-800'/>
    </header>
  );
};

export default Header;

