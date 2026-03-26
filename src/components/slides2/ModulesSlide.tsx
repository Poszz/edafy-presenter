import React from 'react';
import { CheckCircle2Icon, ActivityIcon, EyeIcon, ZapIcon } from 'lucide-react';
export function ModulesSlide() {
  const eaMain = [
  'Production Performance',
  'Financial & Economics',
  'Projects & Opportunities',
  'Technology replication',
  'Asset Health & Integrity',
  'Portfolio/Production KPIs',
  'Surveillance Standards',
  'RMP',
  'RWFM summary'];

  const surveillance = [
  'Daily well surveillance',
  'Exception Base Surveillance',
  'Well test compliance',
  'Well inventory',
  'Well Analytics Module',
  'Reservoir Management',
  'Production deferment',
  'Corrosion',
  'Flow assurance',
  'Emissions CO2 Flare Vent',
  'Diagnostic Plot'];

  const optimization = [
  'Well models (Prosper, XECTA)',
  'Reservoir models (Mbal, Excel)',
  'Network Models (GAP, Pipesim)',
  'GLAI (AI Gas Lift)',
  'ESP-AI',
  'AI Emissions Arrest'];

  const columns = [
  {
    title: 'EA Main',
    items: eaMain,
    icon: ActivityIcon,
    gradient: 'from-purple-600/90 to-violet-500/90',
    dotColor: 'bg-purple-400',
    dotGlow: 'shadow-[0_0_6px_rgba(192,132,252,0.8)]',
    hoverBorder: 'hover:border-purple-400/40',
    accentLine: 'bg-purple-500'
  },
  {
    title: 'Surveillance',
    items: surveillance,
    icon: EyeIcon,
    gradient: 'from-blue-600/90 to-cyan-500/90',
    dotColor: 'bg-blue-400',
    dotGlow: 'shadow-[0_0_6px_rgba(96,165,250,0.8)]',
    hoverBorder: 'hover:border-blue-400/40',
    accentLine: 'bg-blue-500'
  },
  {
    title: 'Optimization',
    items: optimization,
    icon: ZapIcon,
    gradient: 'from-orange-600/90 to-amber-500/90',
    dotColor: 'bg-orange-400',
    dotGlow: 'shadow-[0_0_6px_rgba(251,146,60,0.8)]',
    hoverBorder: 'hover:border-orange-400/40',
    accentLine: 'bg-orange-500'
  }];

  return (
    <section
      className="slide text-white"
      style={{
        backgroundImage:
        'url(/bg-slide-main.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      <div className="slide-content container max-w-[1600px] flex flex-col h-full py-4">
        {/* Header */}
        <div
          className="mb-4 text-center shrink-0 module-card-entrance"
          style={{
            animationDelay: '0ms'
          }}>
          
          <h2 className="font-display text-fluid-h2 text-white font-bold leading-tight">
            EDAFY Asset Modules
          </h2>
          <p className="font-body italic mt-1 text-[20px] text-[#E2BCFB]">
            Comprehensive Asset Management Platform
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-3 min-h-0">
          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 flex-1 min-h-0">
            {columns.map((col, colIdx) => {
              const Icon = col.icon;
              return (
                <div
                  key={col.title}
                  className="module-card-entrance bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col group hover:bg-white/12 hover:border-white/25 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
                  style={{
                    animationDelay: `${200 + colIdx * 250}ms`
                  }}>
                  
                  {/* Card Header */}
                  <div
                    className={`bg-gradient-to-r ${col.gradient} p-3 sm:p-4 flex items-center gap-3 border-b border-white/20 shrink-0 relative overflow-hidden`}>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent module-shimmer" />
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 relative z-10">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center gap-2 relative z-10">
                      <h3 className="font-display font-bold text-white text-base sm:text-lg tracking-wide">
                        {col.title}
                      </h3>
                      <span className="text-[10px] bg-white/20 rounded-full px-2 py-0.5 text-white/80 font-mono">
                        {col.items.length}
                      </span>
                    </div>
                  </div>

                  {/* Card Items */}
                  <div className="p-3 sm:p-4 overflow-y-auto flex-1 custom-scrollbar">
                    <div className="flex flex-col gap-1.5">
                      {col.items.map((item, i) =>
                      <div
                        key={i}
                        className={`module-item-entrance bg-white/5 border border-white/8 rounded-lg px-3 py-2 flex items-center gap-2.5 hover:bg-white/10 ${col.hoverBorder} transition-all duration-300 cursor-default`}
                        style={{
                          animationDelay: `${400 + colIdx * 250 + i * 60}ms`
                        }}>
                        
                          <div
                          className={`w-1.5 h-1.5 rounded-full ${col.dotColor} shrink-0 ${col.dotGlow}`} />
                        
                          <span className="text-xs sm:text-sm text-white/90 font-medium leading-snug">
                            {item}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`h-0.5 ${col.accentLine} opacity-60`} />
                </div>);

            })}
          </div>

          {/* Footer Banner */}
          <div
            className="module-card-entrance bg-gradient-to-r from-purple-900/50 via-purple-600/50 to-purple-900/50 backdrop-blur-xl border border-purple-400/40 rounded-xl p-3 text-center shadow-[0_0_25px_rgba(168,85,247,0.15)] shrink-0"
            style={{
              animationDelay: '1100ms'
            }}>
            
            <p className="font-display font-bold text-white text-sm sm:text-base flex items-center justify-center gap-2 tracking-wide">
              <CheckCircle2Icon className="w-5 h-5 text-green-400 drop-shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
              All data must be OSDU and PPDM compliant
            </p>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Card entrance animation — staggered */
        @keyframes moduleCardEntrance {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          60% {
            opacity: 1;
            transform: translateY(-4px) scale(1.01);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .module-card-entrance {
          opacity: 0;
          animation: moduleCardEntrance 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* Item entrance — subtle fade in from left */
        @keyframes moduleItemEntrance {
          0% {
            opacity: 0;
            transform: translateX(-12px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .module-item-entrance {
          opacity: 0;
          animation: moduleItemEntrance 0.4s ease-out forwards;
        }

        /* Shimmer sweep on card headers */
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .module-shimmer {
          animation: shimmerSweep 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        /* Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.25);
        }
      `
        }} />
      
    </section>);

}