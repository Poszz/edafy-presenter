import React from 'react';
import { PlayIcon } from 'lucide-react';
export function VideoSlide() {
  return (
    <section
      className="slide text-white"
      style={{
        backgroundImage:
        'url(https://cdn.magicpatterns.com/uploads/oNo2BAMCGVU39vB2KQpoNK/image.png)',
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

              {/* Video placeholder — replace the div below with your <video> or <iframe> */}
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 relative z-0">
                {/* Play button */}
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer shadow-[0_0_30px_rgba(192,132,252,0.3)]">
                  <PlayIcon className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-white/50 text-sm font-body tracking-wide">
                  Click to play video
                </p>
              </div>

              {/*
                TO ADD YOUR VIDEO: Replace the placeholder div above with one of these:
                For a video file:
                <video
                className="w-full h-full object-cover"
                controls
                src="YOUR_VIDEO_URL_HERE"
                />
                For a YouTube embed:
                <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
                */}
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