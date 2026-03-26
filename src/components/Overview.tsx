import React from 'react';
import { MonitorIcon, BarChart3Icon, ClipboardListIcon, GlobeIcon, DatabaseIcon, BrainIcon, ChevronRightIcon } from 'lucide-react';

const LOGO_URL = "./Logo_For_Dark_Bg_(1).png";

interface OverviewProps {
  onSelect: (deck: 'platform' | 'asset' | 'plan' | 'basin' | 'data' | 'aihub') => void;
}

const decks = [
  { key: 'platform' as const, icon: MonitorIcon, title: 'EDAFY Platform', slides: 7, desc: 'Subsurface Data Intelligence & Integration Platform' },
  { key: 'asset' as const, icon: BarChart3Icon, title: 'EDAFY Asset', slides: 6, desc: 'Asset Life Cycle — management, modules & data flow' },
  { key: 'plan' as const, icon: ClipboardListIcon, title: 'EDAFY Plan', slides: 11, desc: 'AI-Driven Upstream E&P Project Management' },
  { key: 'basin' as const, icon: GlobeIcon, title: 'EDAFY Basin Hub', slides: 8, desc: 'AI-Ready Geo-Basin Intelligence for E&A' },
  { key: 'data' as const, icon: DatabaseIcon, title: 'EDAFY Data', slides: 7, desc: 'Data ingestion, catalog, geospatial & NDR/VDR' },
  { key: 'aihub' as const, icon: BrainIcon, title: 'EDAFY AI & Hub', slides: 6, desc: 'Rock Physics, CRM & agentic intelligence' },
];

export function Overview({ onSelect }: OverviewProps) {
  return (
    <section
      className="w-full h-screen overflow-hidden text-white flex flex-col"
      style={{
        backgroundImage: 'url(/bg-slide-main.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header — logo + title inline to save vertical space */}
      <div className="flex items-center gap-4 pt-4 pb-2 px-6">
        <img
          src={LOGO_URL}
          alt="AFED Digital"
          className="h-10 md:h-12 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ maxHeight: 'none' }}
        />
        <div>
          <h1 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)' }}>
            EDAFY <span className="text-purple-300">EcoSystem</span>
          </h1>
          <p className="font-body text-white/50 text-xs mt-0.5">Select a presentation to begin</p>
        </div>
      </div>

      {/* Cards grid — fills remaining space */}
      <div className="flex-1 flex items-center justify-center px-6 pb-4 min-h-0">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-5xl">
          {decks.map((deck) => {
            const Icon = deck.icon;
            return (
              <button
                key={deck.key}
                onClick={() => onSelect(deck.key)}
                className="group relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 shadow-2xl text-left transition-all duration-500 hover:bg-white/15 hover:border-purple-400/40 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(192,132,252,0.2)] cursor-pointer"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors shrink-0">
                      <Icon className="w-4 h-4 text-purple-300" />
                    </div>
                    <h3 className="font-display font-bold text-sm md:text-base group-hover:text-purple-200 transition-colors leading-tight">
                      {deck.title}
                    </h3>
                  </div>
                  <p className="font-body text-white/60 text-xs leading-snug mb-2 line-clamp-2">
                    {deck.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-purple-300 text-xs font-medium">
                    <span>{deck.slides} Slides</span>
                    <ChevronRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
