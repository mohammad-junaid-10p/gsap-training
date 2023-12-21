'use client';

import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import React from 'react'

export default function GsapFrom() {

  useGSAP(() => {
    gsap.from(".card", {x: '100%', duration: 1, stagger: 0.3 });
    gsap.from(".header", {y: '-100%', duration: 1 });
    gsap.from(".sidebar", {x: '-100%', duration: 1 });
  });

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 bg-gray-800 text-white p-4 sidebar">
        <h1 className="text-2xl font-bold">Sidebar</h1>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-gray-900 text-white p-4 header">
          <h1 className="text-2xl font-bold">Header</h1>
        </header>

        <main className="flex-1 overflow-x-hidden flex flex-col gap-4 overflow-y-auto p-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-full h-64 card">
            <h2 className="text-xl font-bold mb-4">Card Title</h2>
            <p>This is the content of the card. You can customize it as needed.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full h-64 card">
            <h2 className="text-xl font-bold mb-4">Card Title</h2>
            <p>This is the content of the card. You can customize it as needed.</p>
          </div>
        </main>
      </div>
    </div>
  )
}
