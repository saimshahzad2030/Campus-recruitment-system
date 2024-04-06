"use client"

import React, { useState, useEffect } from 'react';
import style from './Landing.module.css'
import Link from 'next/link';
const Landing = () => {
  const [textIndex, setTextIndex] = useState(0);
  const textArray = ['Our recruitment system helps students to find their relative field jobs', 'With our system, companies find their desired candidate for the selected positions', 'We have kind of direct student-to-company connection'];
  const images = [
    '/Assets/Landing/1.jpg',
    '/Assets/Landing/2.jpg',
    '/Assets/Landing/3.jpg'
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`relative w-full ${style.main}`}>
      <img src={images[textIndex]} alt='landing logo' className={`opacity-70 ${style.image}`} />

      <div className={`absolute top-1/4 w-10/12 flex flex-col items-start  ${style.socials}   rounded-lg`}>
        {textArray.map((text, index) => (

          <h1 className={` text-sm w-10/12  left-0 ${style.textItem} transform transition-opacity bg-gray-800 duration-500 text-white text-center px-4 py-4 rounded-md 2xl:text-5xl 2xl:w-7/12 xl:text-4xl xl:w-7/12 lg:text-2xl lg:w-6/12  sm:text-lg sm:w-6/12  font-bold mb-4 ${style.textItem} ${index === textIndex ? style.active : ''}`} key={index} >
            {text}
          </h1>
        ))}
       
      </div>
    </div>
  );
}

export default Landing