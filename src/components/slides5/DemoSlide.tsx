import React from 'react';
import {
  DatabaseIcon,
  SearchIcon,
  GitBranchIcon,
  LinkIcon,
  GlobeIcon,
  HomeIcon } from
'lucide-react';
export function DemoSlide() {
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
        <div className="w-full md:w-[45%] flex flex-col gap-5 animate-slide-in-left z-10">
          <div className="glass-strong p-6 md:p-8 flex flex-col gap-5 relative overflow-hidden">
            {/* Header: Logo & Title */}
            <div className="flex items-center gap-4">
              <img
                src="/Group_2352.png"
                alt="EDAFY Logo"
                className="w-12 h-12 object-contain shrink-0 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]"
                style={{
                  maxHeight: 'none'
                }} />
              
              <h2 className="font-display text-fluid-h2 font-bold text-white tracking-tight leading-tight">
                EDAFY Data
              </h2>
            </div>

            {/* Description */}
            <p className="font-body text-fluid-body text-white/80 leading-relaxed border-l-2 border-purple-500/50 pl-4">
              EDAFY Data transforms raw data into actionable knowledge,
              empowering data-driven decisions.
            </p>

            {/* Bullet List */}
            <div className="flex flex-col gap-2">
              <div className="interactive-card p-3 flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition-colors shrink-0">
                  <DatabaseIcon className="w-4 h-4 text-purple-300 group-hover:text-white transition-colors" />
                </div>
                <span className="font-body text-sm font-medium text-white/90">
                  Data Ingestion and Quality Control
                </span>
              </div>

              <div className="interactive-card p-3 flex items-center gap-3 group delay-100">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40 transition-colors shrink-0">
                  <SearchIcon className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors" />
                </div>
                <span className="font-body text-sm font-medium text-white/90">
                  Data Catalog & Discovery
                </span>
              </div>

              <div className="interactive-card p-3 flex items-center gap-3 group delay-200">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/40 transition-colors shrink-0">
                  <GitBranchIcon className="w-4 h-4 text-teal-300 group-hover:text-white transition-colors" />
                </div>
                <span className="font-body text-sm font-medium text-white/90">
                  Data Lineage and Semantic Search
                </span>
              </div>

              <div className="interactive-card p-3 flex items-center gap-3 group delay-300">
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/40 transition-colors shrink-0">
                  <LinkIcon className="w-4 h-4 text-pink-300 group-hover:text-white transition-colors" />
                </div>
                <span className="font-body text-sm font-medium text-white/90">
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

        {/* Right Column - Image + CTA */}
        <div className="w-full md:w-[55%] flex flex-col gap-5 animate-slide-in-right delay-200 h-full justify-center">
          {/* Image Container */}
          <div className="relative w-full flex-1 min-h-0 glass p-2 hover:scale-[1.02] transition-transform duration-500 cursor-pointer group flex items-center justify-center animate-float">
            {/* Shimmer effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer rounded-2xl pointer-events-none z-10" />

            <img
              src="/Picture3.png"
              alt="EDAFY Data Platform - Subsurface Visualization"
              className="w-full h-full object-contain rounded-2xl relative z-0 drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              style={{
                maxHeight: 'none'
              }} />
            
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 justify-center animate-slide-up delay-500">
            <a
              href="http://188.166.238.11:3002/login"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-3 px-6 py-3 hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(192,132,252,0.4)] transition-all duration-300 cursor-pointer group no-underline">
              
              <GlobeIcon className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" />
              <span className="font-body text-sm font-semibold text-white">
                Click to view our live demo
              </span>
            </a>

            <button className="glass flex items-center gap-2 px-5 py-3 hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(192,132,252,0.4)] transition-all duration-300 cursor-pointer group">
              <HomeIcon className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" />
              <span className="font-body text-sm font-semibold text-white">
                HOME
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>);

}