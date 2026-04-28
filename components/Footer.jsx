import React from 'react';
import Image from 'next/image';
import '@/styles/style.footer.css'

const time = new Date();

const Footer = () => {
  return (
    <footer className='footer'>
      <hr className='dark:border-gray-800'/>
      <div className='first mt-6'>
        <div>&copy; {time.getFullYear()} All Rights Reserved</div>
        <div>Designed and Developed by Samaneh Heshmatzadeh</div>
        <div className="flex flex-row gap-2 justify-center mb-6">
          <a href="https://github.com/samanehesh" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <Image
              src="/images/github-mark-white.svg"
              alt="GitHub"
              width={50}
              height={50}
              loading="eager"
              style={{ width: '50px', height: '50px', marginTop: '8px' }}
            />
          </a>
          <a href="https://www.linkedin.com/in/heshmatzadeh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <Image
              src="/images/linkedIn-logo.svg"
              alt="LinkedIn"
              width={50}
              height={50}
              loading="eager"
              style={{ width: '50px', height: '50px', marginTop: '8px' }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
