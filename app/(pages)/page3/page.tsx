'use client';

import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import React, { useEffect, useRef } from 'react'

export default function GsapFromTo() {

  const boxRef = useRef(null);
  const { contextSafe } = useGSAP();

  useEffect(() => {
    const box = boxRef.current;

    const handleMouseMove = (event: any) => {
      
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      
    };

    // Add mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up: Remove event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useGSAP(() => {
    const randomDistance = Math.floor(Math.random() * 500) + 1;

    gsap.to(
      '.green', // Starting from the current position
      { x: `+=${randomDistance}`, opacity: 1, duration: 1 }
    );

    // Animate the second element starting from where the first element ends
    gsap.fromTo(
      '.blue',
      { x: `+=${randomDistance}`, opacity: 0 },
      { x: '+=100', opacity: 1, duration: 1, delay: 1 }
    );
  });

  
  const onHover: any = contextSafe(({ currentTarget }: any) => {
    gsap.fromTo(
      box,
      {
        x: mouseX, // Start from the mouse X position
        y: mouseY, // Start from the mouse Y position
        opacity: 0, // Optional: Fade in the box
      },
      {
        x: mouseX + 50, // Move 50 pixels to the right of the mouse X position
        y: mouseY, // Maintain the Y position
        opacity: 1, // Optional: Fade in the box
        ease: Power2.easeOut,
      }
    );
  });


  return (
    <main className='p-16'>
      <h1 className='text-2xl font-bold text-black flex flex-col justify-center items-start mb-4'>
        <span className='text-teal-500 text-6xl'>.fromTo()</span>
      </h1>
      <p className='mb-10'>
        A gsap.fromTo() tween lets you define BOTH the starting and ending values for an animation (as opposed to from() and to() tweens which use the current state as either the start or end). This is great for having full control over an animation, especially when it is chained with other animations. 
      </p>
      <div className='flex'>
        <div className="flex items-center justify-center text-white h-[100px] w-[100px] opacity-0 rounded-md bg-green-500 green" style={{ marginBottom: '20px' }}>
          Element 1
        </div>
        <div className="flex items-center justify-center text-white h-[100px] w-[100px] rounded-md bg-blue-500 blue">
          Element 2
        </div>
      </div>
    </main>
  )
}
