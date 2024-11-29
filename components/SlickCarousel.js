// "use client";

// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";

// const SlickCarousel = () => {
//   const [slidesToShow, setSlidesToShow] = useState(3); // Default number of images per slide

//   useEffect(() => {
//     // Function to determine the number of slides based on window width
//     const updateSlidesToShow = () => {
//       const width = window.innerWidth;
//       if (width >= 1000) {
//         setSlidesToShow(12); // Show 12 slides on larger screens
//       } else if (width >= 600) {
//         setSlidesToShow(6); // Show 6 slides on medium screens
//       } else {
//         setSlidesToShow(3); // Show 3 slides on smaller screens
//       }
//     };

//     updateSlidesToShow(); // Set initial number of slides
//     window.addEventListener("resize", updateSlidesToShow); // Update number of slides on window resize

//     return () => window.removeEventListener("resize", updateSlidesToShow); // Cleanup on unmount
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: slidesToShow, // Use the dynamically calculated value
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
 
//   };

//   const images = [
//     { src: "/images/angular.png", name: "Angular" },
//     { src: "/images/bun.png", name: "Bun" },
//     { src: "/images/sql.png", name: "SQL" },
//     { src: "/images/express.png", name: "Express" },
//     { src: "/images/node.png", name: "Node.js" },
//     { src: "/images/vue.png", name: "Vue.js" },
//     { src: "/images/postgresql.svg", name: "PostgreSQL" },
//     { src: "/images/react.png", name: "React" },
//     { src: "/images/mongoDb.svg", name: "MongoDB" },
//     { src: "/images/aspnetcore.png", name: "ASP.NET Core" },
//     { src: "/images/nextjs.png", name: "Next.js" },
//     { src: "/images/heroku.png", name: "Heroku" },
//     { src: "/images/vercel.png", name: "Vercel" },
//     { src: "/images/django.png", name: "Django" },
//   ];

//   return (
//     <Slider {...settings}>
//       {images.map((image, index) => (
//         <div className="image-container" 
//             key={index}>
//           {/* Image */}
//           <Image
//             src={image.src}
//             alt={image.name}
//             width={100} // Adjust the size of the images
//             height={100}
//             style={{
//                 objectFit: "contain",
//                 width: "100px", // Adjust dynamically
//                 height: "100px", // Ensure the image takes up the container's height
//             }}            
//             priority

//           />
//         </div>
//       ))}
//     </Slider>
//   );

// // return (
// //     <Slider {...settings}>
// //       <div className="image-container"><Image src="/images/angular.png" alt="Angular" width={100} height={100}/></div>
// //       <div className="image-container"><Image src="/images/bun.png" alt="Bun" width={100} height={100}/></div>
// //       <div className="image-container"><Image src="/images/sql.png" alt="SQL" width={100} height={100}/></div>
// //       <div className="image-container"><Image src="/images/express.png" alt="Express" width={100} height={100}/></div>
// //       {/* Add more images as needed */}
// //     </Slider>
// //   );
// };

// export default SlickCarousel;


"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const SlickCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(3); // Default number of images per slide

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width >= 1000) {
        setSlidesToShow(12); // Show 12 slides on larger screens
      } else if (width >= 600) {
        setSlidesToShow(6); // Show 6 slides on medium screens
      } else {
        setSlidesToShow(3); // Show 3 slides on smaller screens
      }
    };

    updateSlidesToShow(); // Set initial number of slides
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous movement
    cssEase: "linear", // Smooth linear transition
  };

  const images = [
    { src: "/images/angular.png", name: "Angular" },
    { src: "/images/react.png", name: "React" },
    { src: "/images/nextjs.png", name: "Next.js" },
    { src: "/images/vue.png", name: "Vue.js" },

    { src: "/images/django.png", name: "Django" },
    { src: "/images/node.png", name: "Node.js" },
    { src: "/images/aspnetcore.png", name: "ASP.NET Core" },

    { src: "/images/bun.png", name: "Bun" },
    { src: "/images/express.png", name: "Express" },

    { src: "/images/sql.png", name: "SQL" },
    { src: "/images/postgresql.svg", name: "PostgreSQL" },
    { src: "/images/mongoDb.svg", name: "MongoDB" },
    
    { src: "/images/heroku.png", name: "Heroku" },
    { src: "/images/vercel.png", name: "Vercel" },
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div className="image-container" key={index}>
          <Image
            src={image.src}
            alt={image.name}
            width={100}
            height={100}
            style={{
              objectFit: "contain",
              width: "100px",
              height: "100px",
            }}
            priority
          />
        </div>
      ))}
    </Slider>
  );
};

export default SlickCarousel;
