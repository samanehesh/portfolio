import SlickCarousel from '@/components/SlickCarousel';
import Stars from '@/components/stars';
import Link from 'next/link';

import '@/styles/style.main.css'

export default function Home() {


  return (
    <div className='main-container'>
      <Stars/>
      <div className='ml-10 mr-10 mt-10  dark:bg-black dark:text-white'>
        <div className="grid grid-cols-1 gap-1">
          <p className="font-light text-[clamp(1.4rem,4vw,2.8rem)]">

            Full Stack
          </p>
          <p className="font-light text-[clamp(1.4rem,4vw,2.8rem)]">
            Software Developer
          </p>
        </div>

        {/* <div className='web'>
          <span>Web</span> 
          <span> Developer</span>
        </div> */}
        <div className='description mb-4 lg:mb-20 font-light text-[clamp(1rem,3vw,1.5rem)]'>
          Hello, I am Samaneh Heshmatzadeh  
          a Full Stack Software Developer. I have a proven track 
          record of delivering high quality software solutions 
          that meet user needs and business objectives.     
          <span>
            <Link 
              className="button-link  dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white text-[clamp(.5rem,3vw,1rem)]" 
              href={`/projects/`}>
              View Projects
            </Link>
          </span>
        </div>

      </div>
      <div className='carousel lg:mt-0 mt-8'>
        <SlickCarousel/>
      </div>

    </div>
  );
}
