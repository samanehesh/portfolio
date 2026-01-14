'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HouseIcon, ListIcon } from '@phosphor-icons/react';

import '@/styles/style.header.css';

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (active) =>
    `font-bold ${
      active ? 'text-gray-700' : 'hover:text-gray-700'
    }`;

  return (
    <header className="w-full shadow-sm">
      <div className="flex items-center px-4 py-4 mt-5 md:px-8">

        {/* LEFT — Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <HouseIcon size={32} weight="bold" className="text-black hover:text-gray-700" />
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

        {/* RIGHT — Resume */}
        <div className="hidden md:flex flex-shrink-0">
          <a
            href="/resume/Samaneh-Heshmatzadeh-Resume.pdf"
            download
            className="button-link font-bold"
          >
            Resume
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto text-2xl mt-3"
          aria-label="Toggle menu"
        >
          <ListIcon size={32} weight="bold" className="text-black hover:text-gray-700" />
          {/* ☰ */}
        </button>
      </div>

      {/* MOBILE MENU */}
      <hr/>
      <div>
        {open && (
        <div className="md:hidden flex flex-col p-7 gap-6 ">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <hr/>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <hr/>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <hr/>

          <a
            href="/resume/Samaneh-Heshmatzadeh-Resume.pdf"
            download
          >
            Resume
          </a>
        </div>
      )}
      </div>

      <hr />
    </header>
  );
};

export default Header;

