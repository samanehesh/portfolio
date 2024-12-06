import SlickCarousel from '@/components/SlickCarousel';
import Stars from '@/components/stars';
import Link from 'next/link';

import '@/styles/style.main.css'
export default function Home() {


  return (
    <div className='mb-3 main-container'>
      <Stars/>
      <div className='ml-10 mr-10'>
        {/* <div className='name'>
          <div>Sama</div> 
          <div>Heshmatzadeh</div>
        </div> */}
        <div className='full'>
          <span>Full</span> 
          <span> Stack</span>
        </div>
        <div className='web'>
          <span>Web</span> 
          <span> Developer</span>
        </div>
        <div className='description'>
          Hello, I am Samaneh Heshmatzadeh. I am  
          a Full Stack Web Developer with a proven track 
          record of delivering high quality software solutions 
          that meet user needs and business objectives.     
          <span>
            <Link 
            className="button-link" 
            href={`/projects/`}>
            View My Projects
            </Link>
          </span>
        </div>

      </div>
      <div className='carousel'>
        <SlickCarousel/>
      </div>

    </div>
  );
}
