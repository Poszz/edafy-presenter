import React from 'react';
export function VideoSlide() {
  return (
    <section
      className="slide text-white"
      style={{
        backgroundImage:
        'url(/bg-slide-main.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      <div className="slide-content container flex flex-col items-center justify-center">
        <h2 className="font-display text-fluid-h2 text-white font-bold mb-8 animate-slide-up text-center">
          Platform <span className="text-purple-300">Overview</span>
        </h2>

        {/* Glassmorphism Video Screen */}
        <div className="w-full max-w-4xl animate-slide-up delay-200">
          {/* Monitor Frame */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-3 shadow-[0_0_60px_rgba(192,132,252,0.15)]">
            {/* Screen bezel */}
            <div
              className="bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 relative"
              style={{
                aspectRatio: '16/9'
              }}>
              
              {/* Subtle screen reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-10" />

              <video
                className="w-full h-full object-contain relative z-0"
                controls
                playsInline
                preload="auto"
                src="/videos/afed-montage.mp4"
              />
            </div>
          </div>

          {/* Monitor Stand */}
          <div className="flex flex-col items-center mt-0">
            <div className="w-24 h-4 bg-white/10 backdrop-blur-xl border-x border-b border-white/15 rounded-b-lg" />
            <div className="w-40 h-2 bg-white/10 backdrop-blur-xl border border-white/15 rounded-full mt-0" />
          </div>
        </div>

        <p className="font-body text-white/40 text-sm mt-6 animate-slide-up delay-400 text-center">
          EDAFY Platform Demo
        </p>
      </div>
    </section>);

}