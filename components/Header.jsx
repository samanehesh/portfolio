

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname  } from 'next/navigation'; // Use Next.js Router for navigation

import '@/styles/style.header.css'


const Header = () => {
  const pathname = usePathname();  // Get the current route path

  return (
    <header>
      <div className="flex justify-between items-center p-4 mb-4 mt-5">
        <nav className="flex items-center">
          {/* Logo - Positioned on the left */}
          <Link href="/" className="mr-10 ml-5">
            <Image
              src="/images/s-h-trans-black.svg"
              alt="SH Logo"
              width={0}  // Remove width for auto scaling
              height={0} // Remove height for auto scaling
              loading="eager"
              style={{
                objectFit: "contain",
                width: "50px",   // Adjust width as needed
                height: "50px",  // Adjust height as needed
                marginBottom: "10px"
              }}
            />
          </Link>
        </nav>
        
        {/* Navigation Links - Positioned on the right */}
        <nav className="flex items-center">
          <Link href="/" className={`text-lg font-bold mr-10 ml-5 ${pathname === '/' ? 'text-blue-500' : 'hover:text-blue-500'}`}>
            Home
          </Link>
          <Link href="/projects" className={`text-lg font-bold mr-10 ml-5 ${pathname.startsWith('/projects')  ? 'text-blue-500' : 'hover:text-blue-500'}`}>
            Projects
          </Link>
          <Link href="/contact" className={`text-lg font-bold mr-10 ml-5 ${pathname === '/contact' ? 'text-blue-500' : 'hover:text-blue-500'}`}>
            Contact
          </Link>
        </nav>
        <nav className="button-link text-lg font-bold" >
          Resume
        </nav>
      </div>
      <hr/>
    </header>

  );
  

}

export default Header