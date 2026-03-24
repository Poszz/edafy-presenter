import React from 'react';
import { MonitorIcon, BarChart3Icon, ChevronRightIcon } from 'lucide-react';

const LOGO_URL = "./Logo_For_Dark_Bg_(1).png";

interface OverviewProps {
  onSelect: (deck: 'platform' | 'asset') => void;
}

export function Overview({ onSelect }: OverviewProps) {
  return (
    <section
      className="w-full h-screen overflow-hidden text-white flex flex-col"
      style={{
        backgroundImage:
          'url(https://cdn.magicpatterns.com/uploads/oNo2BAMCGVU39vB2KQpoNK/image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Logo */}
      <div className="pt-8 pl-8">
        <img
          src={LOGO_URL}
          alt="AFED Digital"
          className="h-14 md:h-16 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ maxHeight: 'none' }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="font-display text-white/80 tracking-[0.2em] uppercase mb-3 text-sm font-bold">
            AFED Digital
          </h2>
          <h1
            className="font-display font-black leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            EDAFY <span className="text-purple-300">Presentations</span>
          </h1>
          <p className="font-body text-white/60 text-lg max-w-xl mx-auto">
            Select a presentation to begin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl animate-slide-up delay-200">
          {/* Card 1 - EDAFY Platform */}
          <button
            onClick={() => onSelect('platform')}
            className="group relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl text-left transition-all duration-500 hover:bg-white/15 hover:border-purple-400/40 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(192,132,252,0.2)] cursor-pointer"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center mb-5 group-hover:bg-purple-500/30 transition-colors">
                <MonitorIcon className="w-7 h-7 text-purple-300" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2 group-hover:text-purple-200 transition-colors">
                EDAFY Platform
              </h3>
              <p className="font-body text-white/70 text-sm mb-6 leading-relaxed">
                The Subsurface Data Intelligence & Integration Platform — overview, ecosystem, architecture, and differentiators.
              </p>
              <div className="flex items-center gap-2 text-purple-300 text-sm font-medium">
                <span>7 Slides</span>
                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>

          {/* Card 2 - EDAFY Asset */}
          <button
            onClick={() => onSelect('asset')}
            className="group relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl text-left transition-all duration-500 hover:bg-white/15 hover:border-purple-400/40 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(192,132,252,0.2)] cursor-pointer"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center mb-5 group-hover:bg-purple-500/30 transition-colors">
                <BarChart3Icon className="w-7 h-7 text-purple-300" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2 group-hover:text-purple-200 transition-colors">
                EDAFY Asset
              </h3>
              <p className="font-body text-white/70 text-sm mb-6 leading-relaxed">
                Insights into your Asset Life Cycle — asset management, modules, lifecycle, data flow, and dynamic navigation.
              </p>
              <div className="flex items-center gap-2 text-purple-300 text-sm font-medium">
                <span>6 Slides</span>
                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Footer hint */}
      <div className="pb-6 text-center">
        <p className="text-white/20 text-xs tracking-widest uppercase">
          Click a presentation to start
        </p>
      </div>
    </section>
  );
}
