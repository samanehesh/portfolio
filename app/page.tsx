import SlickCarousel from '@/components/SlickCarousel';
// import Stars from '@/components/stars';

import '@/styles/style.main.css'
export default function Home() {


  return (
    <div className='mb-3 main-container'>
      <div className='ml-10'>
        <div className='name'>
          <div>Samanhe</div> 
          <div>Heshmatzadeh</div>
        </div>
        <div className='full'>
          <span>Full</span> 
          <span> Stack</span>
        </div>
        <div className='web'>
          <span>Web</span> 
          <span> Developer</span>
        </div>
      </div>
      {/* <Stars/> */}
      <div className='mt-52'>
        <SlickCarousel/>
      </div>

    </div>
  );
}
