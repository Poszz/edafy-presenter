import React from 'react';
import { MonitorIcon, BarChart3Icon, ClipboardListIcon, GlobeIcon, DatabaseIcon, BrainIcon, ChevronRightIcon } from 'lucide-react';

const LOGO_URL = "./Logo_For_Dark_Bg_(1).png";

interface OverviewProps {
  onSelect: (deck: 'platform' | 'asset' | 'plan' | 'basin' | 'data' | 'aihub') => void;
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
        <div className="text-center mb-10 animate-slide-up">
          <h2 className="font-display text-white/80 tracking-[0.2em] uppercase mb-3 text-sm font-bold">
            AFED Digital
          </h2>
          <h1
            className="font-display font-black leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            EDAFY <span className="text-purple-300">EcoSystem</span>
          </h1>
          <p className="font-body text-white/60 text-lg max-w-xl mx-auto">
            Select a presentation to begin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full max-w-7xl animate-slide-up delay-200">
          {/* Card 1 - EDAFY Platform */}
          <button
            onClick={() => onSelect('platform')}
            className="group relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-7 shadow-2xl text-left transition-all duration-500 hover:bg-white/15 hover:border-purple-400/40 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(192,132,252,0.2)] cursor-pointer"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <MonitorIcon className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-purple-200 transition-colors">
                EDAFY Platform
              </h3>
              <p className="font-body text-white/70 text-sm mb-5 leading-relaxed">
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
            className="group relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-7 shadow-2xl text-left transition-all duration-500 hover:bg-white/15 hover:border-purple-400/40 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(192,132,252,0.2)] cursor-pointer"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <BarChart3Icon className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-purple-200 transition-colors">
                EDAFY Asset
              </h3>
              <p className="font-body text-white/70 text-sm mb-5 leading-relaxed">
                Insights into your Asset Life Cycle — asset management, modules, lifecycle, data flow, and dynamic navigation.
              </p>
              <div className="flex items-center gap-2 text-purple-300 text-sm font-medium">
                <span>6 Slides</span>
                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>

          {/* Card 3 - EDAFY Plan */}
          <button
            onClick={() => onSelect('plan')}
            className="group relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-7 shadow-2xl text-left transition-all duration-500 hover:bg-white/15 hover:border-purple-400/40 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(192,132,252,0.2)] cursor-pointer"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <ClipboardListIcon className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-purple-200 transition-colors">
                EDAFY Plan
              </h3>
              <p className="font-body text-white/70 text-sm mb-5 leading-relaxed">
                AI-Driven Upstream E&P Project Management — risk prediction, forecasting, conversational AI, and more.
              </p>
              <div className="flex items-center gap-2 text-purple-300 text-sm font-medium">
                <span>11 Slides</span>
                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>

          {/* Card 4 - EDAFY Basin Hub */}
          <button
            onClick={() => onSelect('basin')}
            className="group relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-7 shadow-2xl text-left transition-all duration-500 hover:bg-white/15 hover:border-purple-400/40 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(192,132,252,0.2)] cursor-pointer"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <GlobeIcon className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-purple-200 transition-colors">
                EDAFY Basin Hub
              </h3>
              <p className="font-body text-white/70 text-sm mb-5 leading-relaxed">
                AI-Ready Geo-Basin Intelligence for Exploration & Appraisal — knowledge graph, data architecture, and basin insights.
              </p>
              <div className="flex items-center gap-2 text-purple-300 text-sm font-medium">
                <span>8 Slides</span>
                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>

          {/* Card 5 - EDAFY Data */}
          <button
            onClick={() => onSelect('data')}
            className="group relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-7 shadow-2xl text-left transition-all duration-500 hover:bg-white/15 hover:border-purple-400/40 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(192,132,252,0.2)] cursor-pointer"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <DatabaseIcon className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-purple-200 transition-colors">
                EDAFY Data
              </h3>
              <p className="font-body text-white/70 text-sm mb-5 leading-relaxed">
                Subsurface Data Intelligence — data ingestion, catalog & discovery, geospatial integration, and AI-assisted NDR/VDR.
              </p>
              <div className="flex items-center gap-2 text-purple-300 text-sm font-medium">
                <span>7 Slides</span>
                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>

          {/* Card 6 - EDAFY AI & Hub */}
          <button
            onClick={() => onSelect('aihub')}
            className="group relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-7 shadow-2xl text-left transition-all duration-500 hover:bg-white/15 hover:border-purple-400/40 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(192,132,252,0.2)] cursor-pointer"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <BrainIcon className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-purple-200 transition-colors">
                EDAFY AI & Hub
              </h3>
              <p className="font-body text-white/70 text-sm mb-5 leading-relaxed">
                Intelligence Hub — Rock Physics, CRM reservoir connectivity, AI engine, and agentic intelligence capabilities.
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
