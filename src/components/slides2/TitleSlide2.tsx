import React from 'react';
export function TitleSlide2() {
  return (
    <section
      className="slide text-white"
      style={{
        backgroundImage:
        'url(/bg-slide-main.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      <div className="slide-content container">
        <div className="max-w-4xl animate-slide-up bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-10 shadow-2xl">
          <h2 className="font-display text-white/80 tracking-[0.2em] uppercase mb-element-gap text-fluid-body font-bold">
            AFED Digital
          </h2>
          <h1 className="font-display text-fluid-title leading-[1.1] mb-content-gap font-black">
            EDAFY <span className="text-purple-300">ASSET</span>
          </h1>
          <p className="font-body text-fluid-h3 text-white/90 max-w-2xl border-l-4 border-purple-400 pl-6 font-medium">
            Insights Into Your Asset Life Cycle
          </p>
        </div>
      </div>
    </section>);

}