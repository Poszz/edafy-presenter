import React from 'react';
import {
  LightbulbIcon,
  DatabaseIcon,
  NetworkIcon,
  BrainIcon,
  BotIcon } from
'lucide-react';
export function TitleSlide() {
  return (
    <section className="slide slide-bg-hub">
      <div className="slide-content container relative z-10 flex flex-col h-full justify-center">
        {/* Header Section */}
        <div className="mb-8 animate-slide-up">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
            EDAFY AI & HUB
          </h1>
          <p className="font-body text-xl md:text-2xl text-[#e9d5ff] italic drop-shadow-sm">
            An Intelligence Hub — not just a data platform
          </p>
        </div>

        {/* Main Banner */}
        <div className="glass-strong p-6 md:p-8 mb-6 flex items-start gap-6 animate-slide-up delay-100 border-l-4 border-l-[#a855f7] hover:bg-white/20 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer">
          <div className="shrink-0">
            <LightbulbIcon
              className="w-12 h-12 text-white drop-shadow-md"
              strokeWidth={1.5} />
            
          </div>
          <div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-[#fbbf24] mb-3 drop-shadow-sm">
              Data is the foundation. Intelligence is the product.
            </h2>
            <p className="font-body text-white/90 text-sm md:text-base leading-relaxed">
              EDAFY transforms your raw upstream data into actionable
              exploration intelligence, knowledge graphs, and AI-powered
              decision support.
            </p>
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-slide-up delay-200">
          {/* Card 1 */}
          <div className="glass p-6 flex items-start gap-5 hover:bg-white/20 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer group">
            <DatabaseIcon
              className="w-10 h-10 text-[#c4b5fd] shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(196,181,253,0.8)] transition-all"
              strokeWidth={1.5} />
            
            <div>
              <h3 className="font-display text-lg font-bold text-[#c4b5fd] mb-2">
                Data Management
              </h3>
              <p className="font-body text-white/80 text-sm leading-relaxed">
                Unified repository for well logs, seismic, core data, production
                history, and reports
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass p-6 flex items-start gap-5 hover:bg-white/20 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer group">
            <NetworkIcon
              className="w-10 h-10 text-[#c4b5fd] shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(196,181,253,0.8)] transition-all"
              strokeWidth={1.5} />
            
            <div>
              <h3 className="font-display text-lg font-bold text-[#c4b5fd] mb-2">
                Knowledge Graph
              </h3>
              <p className="font-body text-white/80 text-sm leading-relaxed">
                Dynamic, domain-specific graphs linking basins, wells,
                formations, and geological insights
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass p-6 flex items-start gap-5 hover:bg-white/20 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer group">
            <BrainIcon
              className="w-10 h-10 text-[#c4b5fd] shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(196,181,253,0.8)] transition-all"
              strokeWidth={1.5} />
            
            <div>
              <h3 className="font-display text-lg font-bold text-[#c4b5fd] mb-2">
                AI Engine
              </h3>
              <p className="font-body text-white/80 text-sm leading-relaxed">
                Modular AI for Basin AI, Well AI, Seismic AI, and GeoAI —
                purpose-built for upstream
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass p-6 flex items-start gap-5 hover:bg-white/20 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer group">
            <BotIcon
              className="w-10 h-10 text-[#c4b5fd] shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(196,181,253,0.8)] transition-all"
              strokeWidth={1.5} />
            
            <div>
              <h3 className="font-display text-lg font-bold text-[#c4b5fd] mb-2">
                Agentic Intelligence
              </h3>
              <p className="font-body text-white/80 text-sm leading-relaxed">
                From narrow task AI to wide decision support — evolving toward
                autonomous exploration advisory
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}