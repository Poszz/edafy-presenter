import React from 'react';
export function CoverSlide() {
  return (
    <section
      className="slide text-white"
      style={{
        backgroundImage:
        'url(/bg-slide-main.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      <div className="slide-content container flex items-center justify-center">
        <div className="max-w-4xl 2xl:max-w-6xl animate-slide-up bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-10 2xl:p-16 shadow-2xl text-center">
          <h2 className="font-display text-white/80 tracking-[0.2em] uppercase mb-4 text-base md:text-lg font-bold">
            AFED Digital
          </h2>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6 font-black">
            EDAFY <span className="text-purple-300">AI & HUB</span>
          </h1>
          <p className="font-body text-lg md:text-xl lg:text-2xl text-white/90 font-medium mx-auto max-w-2xl 2xl:max-w-4xl">
            An Intelligence Hub
          </p>
          <div className="w-24 2xl:w-40 h-1 bg-purple-400 mx-auto mt-8 2xl:mt-12 rounded-full" />
        </div>
      </div>
    </section>);

}