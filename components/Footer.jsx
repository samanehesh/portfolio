// import React from 'react'
// import Image from "next/image";

// const time = new Date();

// const Footer = () => {
//   return (
//     <div>
//         <div> © {time.getFullYear()} All Rights Reserved</div>
//         <div>Designed and Developed by Samaneh Heshmatzadeh</div>
//         <div>
//             <a href="https://github.com/samanehesh" target="_blank" rel="noopener noreferrer">
//             <Image 
//                 src="/images/github-mark-black.svg" 
//                 alt="GitHub" 
//                 width={50} 
//                 height={50} 
//                 loading="eager"
//                 style={{ width: '50px', height: '50px', marginTop: '8px' }} 

//             />
//             </a>
//         </div>
//         <div>
//             <a href="https://www.linkedin.com/in/sama-heshmatzadeh/" target="_blank" rel="noopener noreferrer">
//             <Image 
//                 src="/images/linkedIn-logo.svg" 
//                 alt="linkedIn" 
//                 width={50} 
//                 height={50} 
//                 loading="eager"
//                 style={{ width: '50px', height: '50px', marginTop: '8px' }} 
//             />
//             </a>
//         </div>
//     </div>



//   )
// }

// export default Footer

// import React from 'react'
// import Image from "next/image";
// import WaveBackground from '@/components/wave';

// const time = new Date();

// const Footer = () => {
//     return (
//         <footer>
//             <div         
//                 style={{
//                 // bottom: 0,
//                 // left: 0,
//                 width: '100%',
//                 zIndex: 1, // Ensures footer content stays above waves
//                 textAlign: 'center',
//                 // paddingTop: '20px',
//                 paddingBottom: '20px'
                
//                 }}
//             >
//                 <div style={{ position: 'relative', height: '200px', width: '100%', overflow: 'hidden', zIndex: -1 }}>
//                     <WaveBackground fill="#ff6347" height={160} amplitude={40} speed={0.1} points={2} />
//                     <WaveBackground fill="#f79902" height={80} amplitude={30} speed={0.2} points={3} />
//                     <WaveBackground fill="#34d399" height={40} amplitude={20} speed={0.3} points={4}  />
//                     <WaveBackground fill="#60a5fa" height={20} amplitude={25} speed={0.4} points={5}  />
//                     <WaveBackground fill="#a78bfa" height={10} amplitude={15} speed={0.5} points={6}  />
//                 </div>
//                 <div>
//                     <div> © {time.getFullYear()} All Rights Reserved</div>
//                     <div>Designed and Developed by Samaneh Heshmatzadeh</div>
//                     <div className='flex flex-row gap-2 justify-center'>
//                         <a href="https://github.com/samanehesh" target="_blank" rel="noopener noreferrer">
//                         <Image 
//                             src="/images/github-mark-black.svg" 
//                             alt="GitHub" 
//                             width={50} 
//                             height={50} 
//                             loading="eager"
//                             style={{ width: '50px', height: '50px', marginTop: '8px' }} 

//                         />
//                         </a>
//                         <a href="https://www.linkedin.com/in/sama-heshmatzadeh/" target="_blank" rel="noopener noreferrer">
//                         <Image 
//                             src="/images/linkedIn-logo.svg" 
//                             alt="linkedIn" 
//                             width={50} 
//                             height={50} 
//                             loading="eager"
//                             style={{ width: '50px', height: '50px', marginTop: '8px' }} 
//                         />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }

// export default Footer

// import React from 'react';
// import Image from 'next/image';
// import WaveBackground from '@/components/wave';

// const time = new Date();

// const Footer = () => {
//   return (
//     <footer>
//       <div 
//         style={{
//           position: 'relative', // This will ensure the footer content stays on top of the waves
//           zIndex: 1, // Ensure footer content stays above waves
//           textAlign: 'center',
//         //   paddingBottom: '20px',
//         }}
//       >
//         {/* Footer content */}
//         <div>
//           <div>© {time.getFullYear()} All Rights Reserved</div>
//           <div>Designed and Developed by Samaneh Heshmatzadeh</div>
//           <div className="flex flex-row gap-2 justify-center">
//             <a href="https://github.com/samanehesh" target="_blank" rel="noopener noreferrer">
//               <Image
//                 src="/images/github-mark-black.svg"
//                 alt="GitHub"
//                 width={50}
//                 height={50}
//                 loading="eager"
//                 style={{ width: '50px', height: '50px', marginTop: '8px' }}
//               />
//             </a>
//             <a href="https://www.linkedin.com/in/sama-heshmatzadeh/" target="_blank" rel="noopener noreferrer">
//               <Image
//                 src="/images/linkedIn-logo.svg"
//                 alt="linkedIn"
//                 width={50}
//                 height={50}
//                 loading="eager"
//                 style={{ width: '50px', height: '50px', marginTop: '8px' }}
//               />
//             </a>
//           </div>
//         </div>

//         {/* Wave background (this goes behind the footer content) */}
//         <div
//           style={{
//             position: 'absolute', // This ensures the waves are positioned behind the footer content
//             bottom: 0, // Stick the waves to the bottom of the container
//             left: 0,   // Align with the left edge
//             width: '100%', // Ensure waves cover the full width
//             height: '200px', // Height of the wave area
//             overflow: 'hidden',
//             zIndex: -1, // Place waves behind the footer content
//           }}
//         >
//           <WaveBackground fill="#ff6347" height={160} amplitude={40} speed={0.1} points={2} />
//           <WaveBackground fill="#f79902" height={80} amplitude={30} speed={0.2} points={3} />
//           <WaveBackground fill="#34d399" height={40} amplitude={20} speed={0.3} points={4} />
//           <WaveBackground fill="#60a5fa" height={20} amplitude={25} speed={0.4} points={5} />
//           <WaveBackground fill="#a78bfa" height={5} amplitude={15} speed={0.5} points={6} />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import Image from 'next/image';
import WaveBackground from '@/components/wave';

const time = new Date();

const Footer = () => {
  return (
    <footer
      style={{
        position: 'relative', // Ensure positioning for wave background
        width: '100%', // Full width of the page
        paddingBottom: '0', // Add some space to ensure footer content has room
        height: '400px'
      }}
    >
      {/* Footer content */}
      <div
        style={{
          textAlign: 'center',
          
          position: 'relative', // Ensures content stays above the waves
          zIndex: 1, // Ensure footer content stays above waves
          paddingTop: '40px',
          color : 'white'
        }}
      >

        <div>© {time.getFullYear()} All Rights Reserved</div>
        <div>Designed and Developed by Samaneh Heshmatzadeh</div>
        <div className="flex flex-row gap-2 justify-center">
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
          <a href="https://www.linkedin.com/in/sama-heshmatzadeh/" target="_blank" rel="noopener noreferrer">
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
      <div
        style={{
          position: 'absolute', // Ensures wave is at the bottom of the footer
          bottom: 0, // Stick the waves to the bottom of the container
          left: 0,   // Align with the left edge
          width: '100%', // Ensure waves cover the full width
          height: '400px', // Height of the wave area
          overflow: 'visible',
          zIndex: -1, // Place waves behind the footer content
        }}
      >
        {/* <WaveBackground fill="#ff6347" height={160} amplitude={40} speed={0.1} points={2} />
        <WaveBackground fill="#f79902" height={80} amplitude={30} speed={0.2} points={3} /> */}
{/* <WaveBackground fill="#808080" height={100} amplitude={40} speed={0.03} points={4} style={{ zIndex: 3 }} />  First wave: gray, high */}
{/* <WaveBackground fill="#1a1a1a" height={5} amplitude={30} speed={0.1} points={6} style={{ zIndex: 1 }} />    */}
<WaveBackground fill="#000000" height={20} amplitude={20} speed={0.08} points={6}  />    {/* Third wave: black, shortest */}

      </div>
    </footer>
  );
};

export default Footer;
