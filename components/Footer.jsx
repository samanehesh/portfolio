import React from 'react';
import Image from 'next/image';
// import WaveBackground from '@/components/wave';
import '@/styles/style.footer.css'

const time = new Date();

const Footer = () => {
  return (
    <footer className='footer mt-3'>
      {/* Footer content */}
      <div className='first mt-6'>
        <div>© {time.getFullYear()} All Rights Reserved</div>
        <div>Designed and Developed by Samaneh Heshmatzadeh</div>
        <div className="flex flex-row gap-2 justify-center mb-6">
          <a href="https://github.com/samanehesh" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/github-mark-white.svg"
              alt="GitHub"
              width={50}
              height={50}
              loading="eager"
              style={{ width: '50px', height: '50px', marginTop: '8px' }}
            />
          </a>
          <a href="https://www.linkedin.com/in/heshmatzadeh/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/linkedIn-logo.svg"
              alt="linkedIn"
              width={50}
              height={50}
              loading="eager"
              style={{ width: '50px', height: '50px', marginTop: '8px' }}
            />
          </a>
        </div>
      </div>

      {/* Wave background (this goes behind the footer content) */}
      {/* <div className='second'> */}
        {/* <WaveBackground fill="#ff6347" height={160} amplitude={40} speed={0.1} points={2} />*/}
        {/* <WaveBackground fill="#1A1A1A" height={.8} amplitude={20} speed={0.08} points={3} />  */}
        {/* <WaveBackground fill="#000000" height={.6} amplitude={100} speed={0.08} points={2}  />     */}
      {/* </div> */}
    </footer>
  );
};

export default Footer;
