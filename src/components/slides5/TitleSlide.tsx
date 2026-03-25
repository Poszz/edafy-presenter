import React from 'react';
import { DatabaseIcon, SearchIcon, GitBranchIcon, LinkIcon } from 'lucide-react';
export function TitleSlide() {
  return (
    <section
      className="slide text-white"
      style={{
        backgroundImage:
        'url(https://cdn.magicpatterns.com/uploads/oNo2BAMCGVU39vB2KQpoNK/image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      <div className="slide-content container flex flex-col md:flex-row items-center justify-between gap-8 h-full py-8">
        {/* Left Column - Content */}
        <div className="w-full md:w-[45%] flex flex-col gap-6 animate-slide-in-left z-10">
          <div className="glass-strong p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden">
            {/* Header: Logo & Title */}
            <div className="flex items-center gap-4">
              <img
                src="/Group_2352.png"
                alt="EDAFY Logo"
                className="w-12 h-12 object-contain shrink-0 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]"
                style={{
                  maxHeight: 'none'
                }} />
              
              <h1 className="font-display text-fluid-h2 font-bold text-white tracking-tight leading-tight">
                EDAFY Data
              </h1>
            </div>

            {/* Description */}
            <p className="font-body text-fluid-body text-white/80 leading-relaxed border-l-2 border-purple-500/50 pl-4">
              EDAFY Data transforms raw data into actionable knowledge,
              empowering data-driven decisions.
            </p>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              <div className="interactive-card p-4 flex flex-col gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition-colors">
                  <DatabaseIcon className="w-4 h-4 text-purple-300 group-hover:text-white transition-colors" />
                </div>
                <span className="font-body text-sm font-medium text-white/90 leading-snug">
                  Data Ingestion and Quality Control
                </span>
              </div>

              <div className="interactive-card p-4 flex flex-col gap-3 group delay-100">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40 transition-colors">
                  <SearchIcon className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors" />
                </div>
                <span className="font-body text-sm font-medium text-white/90 leading-snug">
                  Data Catalog & Discovery
                </span>
              </div>

              <div className="interactive-card p-4 flex flex-col gap-3 group delay-200">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/40 transition-colors">
                  <GitBranchIcon className="w-4 h-4 text-teal-300 group-hover:text-white transition-colors" />
                </div>
                <span className="font-body text-sm font-medium text-white/90 leading-snug">
                  Data Lineage and Semantic Search
                </span>
              </div>

              <div className="interactive-card p-4 flex flex-col gap-3 group delay-300">
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/40 transition-colors">
                  <LinkIcon className="w-4 h-4 text-pink-300 group-hover:text-white transition-colors" />
                </div>
                <span className="font-body text-sm font-medium text-white/90 leading-snug">
                  Integration with Applications
                </span>
              </div>
            </div>
          </div>

          {/* Quote Banner */}
          <div className="glass-subtle p-4 border-l-4 border-purple-400 animate-slide-up delay-400 shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <p className="font-display text-base md:text-lg italic font-medium text-purple-100 text-center drop-shadow-md">
              "Unified Platform for Ingestion to Discovery to Visualization"
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-[55%] flex justify-center items-center animate-slide-in-right delay-200 h-full max-h-[70vh]">
          <div className="relative w-full h-full glass p-2 hover:scale-[1.02] transition-transform duration-500 cursor-pointer group flex items-center justify-center animate-float">
            {/* Shimmer effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer rounded-2xl pointer-events-none z-10" />

            {/* Video Placeholder — replace with your video element */}
            <div className="w-full h-full flex flex-col items-center justify-center rounded-2xl bg-gray-900/60 border-2 border-dashed border-purple-400/40 relative z-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-purple-300 ml-1"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="font-body text-sm md:text-base text-white/50 font-medium">
                Video Placeholder
              </p>
              <p className="font-body text-xs text-white/30 mt-1">
                Replace with your video
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}