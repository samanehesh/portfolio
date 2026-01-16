"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const SlickCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(3); // Default number of images per slide
  const [iconSize, setIconSize] = useState(80); // Default number of images per slide

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width >= 1200){
        setSlidesToShow(10); // Show 12 slides on larger screens
        setIconSize(80)

      }else if (width >= 1000) {
        setSlidesToShow(8); // Show 12 slides on larger screens
        setIconSize(80)

      }else if (width >= 800) {
        setSlidesToShow(6); // Show 6 slides on medium screens
        setIconSize(80)
      }else if (width >= 600) {
        setSlidesToShow(4); // Show 6 slides on medium screens
        setIconSize(70)
      }else {
        setSlidesToShow(3); // Show 3 slides on smaller screens
        setIconSize(70)
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
        <div className="image-container mr-3 ml-3" key={index}>
          <Image
            src={image.src}
            alt={image.name}
            width={100}
            height={100}
            style={{
              objectFit: "contain",
              width: iconSize,
              height: iconSize,
            }}
            priority
          />




        </div>
      ))}
    </Slider>
  );
};

export default SlickCarousel;
