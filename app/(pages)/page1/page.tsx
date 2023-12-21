'use client';
import React, { useRef, useState } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function GsapTo() {
  const { contextSafe } = useGSAP();
  const container: any = useRef();
  const [isAnimating, setIsAnimating]: any = useState(true);


  useGSAP(() => {
    gsap.to(".green", { rotation: 360, x: 300, duration: 2 });
  });

  const onClick: any = contextSafe(({ currentTarget }: any) => {
    setIsAnimating(!isAnimating);

    if (isAnimating) {
    gsap.to(currentTarget, { rotation: 360, x: 300, duration: 2 });
    } else {
      gsap.to(currentTarget, { rotation: 0, x: 0, duration: 2 });
    }
  });

  const onHover: any = contextSafe(({ currentTarget }: any) => {
    gsap.to(currentTarget, { rotation: 360 });
  });

  const onHoverLeave: any = contextSafe(({ currentTarget }: any) => {
    gsap.to(currentTarget, { rotation: 0 });
  });


  return (
    <main className='flex justify-center p-16 gap-8 flex-col'>
      <div className="h-[100px] w-[100px] rounded-md bg-green-500 green"></div>
      <div className="h-[100px] w-[100px] rounded-md bg-purple-500 purple" onClick={onClick}></div>
      <div className="h-[100px] w-[100px] rounded-md bg-blue-500 blue" onMouseEnter={onHover} onMouseLeave={onHoverLeave}></div>
    </main>
  )
}
