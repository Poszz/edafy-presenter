import React from 'react';
import { MapIcon, EyeIcon, GitMergeIcon, BarChart3Icon } from 'lucide-react';
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
      
      <div className="slide-content container flex flex-col md:flex-row items-center justify-between gap-8 h-full py-8">
        {/* Left Column - Content */}
        <div className="w-full md:w-[40%] flex flex-col gap-6 animate-slide-in-left z-10">
          <div className="glass-strong p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden">
            {/* Header: Logo & Title */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-4 mb-2">
                <img
                  src="/Group_2352.png"
                  alt="EDAFY Logo"
                  className="w-10 h-10 object-contain shrink-0 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]"
                  style={{
                    maxHeight: 'none'
                  }} />
                
                <h2 className="font-display text-fluid-h2 font-bold text-white tracking-tight leading-tight">
                  EDAFY Data
                </h2>
              </div>
              <p className="font-display text-purple-300 italic font-medium text-lg">
                Geospatial Intelligence
              </p>
            </div>

            {/* Description */}
            <p className="font-body text-fluid-body text-white/80 leading-relaxed border-l-2 border-purple-500/50 pl-4">
              EDAFY Data transforms raw data into actionable knowledge,
              empowering data-driven decisions.
            </p>

            {/* Feature List */}
            <div className="flex flex-col gap-3 mt-2">
              <div className="interactive-card p-3 flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition-colors shrink-0">
                  <MapIcon className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" />
                </div>
                <span className="font-body text-sm md:text-base font-medium text-white/90">
                  Integrate with ArcGis map
                </span>
              </div>

              <div className="interactive-card p-3 flex items-center gap-4 group delay-100">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40 transition-colors shrink-0">
                  <EyeIcon className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" />
                </div>
                <span className="font-body text-sm md:text-base font-medium text-white/90">
                  Build in Well Viewer
                </span>
              </div>

              <div className="interactive-card p-3 flex items-center gap-4 group delay-200">
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/40 transition-colors shrink-0">
                  <GitMergeIcon className="w-5 h-5 text-teal-300 group-hover:text-white transition-colors" />
                </div>
                <span className="font-body text-sm md:text-base font-medium text-white/90">
                  Integration for well correlation
                </span>
              </div>

              <div className="interactive-card p-3 flex items-center gap-4 group delay-300">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/40 transition-colors shrink-0">
                  <BarChart3Icon className="w-5 h-5 text-pink-300 group-hover:text-white transition-colors" />
                </div>
                <span className="font-body text-sm md:text-base font-medium text-white/90">
                  Quick qualitative analysis
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
        <div className="w-full md:w-[60%] flex justify-center items-center animate-slide-in-right delay-200 h-full max-h-[70vh]">
          <div className="relative w-full h-full glass p-2 hover:scale-[1.02] transition-transform duration-500 cursor-pointer group flex items-center justify-center animate-float">
            {/* Shimmer effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer rounded-2xl pointer-events-none z-10" />

            <img
              src="/Picture2.png"
              alt="EDAFY Data - ArcGIS Map Dashboard on MacBook"
              className="w-full h-full object-contain relative z-0 drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              style={{
                maxHeight: 'none'
              }} />
            
          </div>
        </div>
      </div>
    </section>);

}