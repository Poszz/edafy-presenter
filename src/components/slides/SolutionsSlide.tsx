import React from 'react';
export function SolutionsSlide() {
  return (
    <section
      className="slide text-white"
      style={{
        backgroundImage:
        'url(/bg-slide-main.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      <div className="slide-content container max-w-[1100px]">
        <h2 className="font-display text-fluid-h2 text-white font-bold mb-8 animate-slide-up text-center">
          EDAFY Ecosystem
        </h2>

        <div className="flex flex-col gap-4 h-full">
          {/* Top Row — EDAFY INSIGHT */}
          <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(192,132,252,0.3)] transition-all duration-300 cursor-pointer animate-slide-up delay-100 shadow-lg group">
            <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-purple-200 transition-colors">
              EDAFY INSIGHT
            </h3>
            <p className="text-sm text-white/80 group-hover:text-white transition-colors">
              Basin Insight | Field Insight | Well Insight | Seismic Insight
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 flex-1">
            {/* Left Column Labels */}
            <div className="w-full md:w-1/4 flex flex-col gap-4">
              <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex items-center shadow-lg hover:bg-white/15 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(192,132,252,0.25)] transition-all duration-300 cursor-pointer group">
                <h3 className="font-display font-bold text-white text-lg group-hover:text-purple-200 transition-colors">
                  Business
                  <br />
                  Intelligence
                </h3>
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex items-center shadow-lg hover:bg-white/15 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(192,132,252,0.25)] transition-all duration-300 cursor-pointer group">
                <h3 className="font-display font-bold text-white text-lg group-hover:text-purple-200 transition-colors">
                  Core
                </h3>
              </div>
              <div className="h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex items-center shadow-lg hover:bg-white/15 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(192,132,252,0.25)] transition-all duration-300 cursor-pointer group">
                <h3 className="font-display font-bold text-white text-lg group-hover:text-purple-200 transition-colors">
                  Data &<br />
                  Infrastructure
                </h3>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="w-full md:w-3/4 flex flex-col gap-4">
              {/* BI Row */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-purple-500/30 backdrop-blur-xl border border-purple-400/30 rounded-xl p-4 hover:bg-purple-500/50 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:border-purple-300/50 transition-all duration-300 cursor-pointer animate-slide-up delay-200 shadow-lg group">
                  <h4 className="font-display font-bold text-white text-base mb-1 flex items-center gap-2">
                    <img src="/EdafyAI.png" alt="EDAFY AI" className="w-7 h-7 object-contain group-hover:scale-125 transition-transform duration-300" />
                    <span className="group-hover:text-purple-200 transition-colors">
                      EDAFY AI
                    </span>
                  </h4>
                  <p className="text-xs text-white/80 group-hover:text-white/95 transition-colors">
                    DaMia, Modular AI, Domain AI, AI Agents, Knowledge Graph,
                    Natural Language Queries
                  </p>
                </div>
                <div className="bg-purple-600/30 backdrop-blur-xl border border-purple-400/30 rounded-xl p-4 hover:bg-purple-600/50 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:border-purple-300/50 transition-all duration-300 cursor-pointer animate-slide-up delay-300 shadow-lg group">
                  <h4 className="font-display font-bold text-white text-base mb-1 flex items-center gap-2">
                    <img src="/EdafyHub.png" alt="EDAFY HUB" className="w-7 h-7 object-contain group-hover:scale-125 transition-transform duration-300" />
                    <span className="group-hover:text-purple-200 transition-colors">
                      EDAFY HUB Platform
                    </span>
                  </h4>
                  <p className="text-xs text-white/80 group-hover:text-white/95 transition-colors">
                    Orchestrating data, intelligence, and workflows into one
                    powerful, scalable decision engine
                  </p>
                </div>
              </div>

              {/* Core Row */}
              <div className="flex-1 flex flex-col sm:flex-row gap-4">
                {[
                {
                  icon: '/EdafyData.png',
                  name: 'EDAFY DATA',
                  desc: 'One single source of truth for all your subsurface data'
                },
                {
                  icon: '/EdafyAsset.png',
                  name: 'EDAFY ASSET',
                  desc: 'Turns production complexity into clarity in a unified platform'
                },
                {
                  icon: '/EdafyPlan.png',
                  name: 'EDAFY PLAN',
                  desc: 'Clear visibility of all your upstream project management'
                }].
                map((item, idx) =>
                <div
                  key={idx}
                  className="flex-1 bg-purple-400/20 backdrop-blur-xl border border-purple-400/30 rounded-xl p-4 flex flex-col justify-between hover:bg-purple-400/40 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(192,132,252,0.4)] hover:border-purple-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer animate-slide-up shadow-lg group"
                  style={{
                    animationDelay: `${400 + idx * 100}ms`
                  }}>

                    <h4 className="font-display font-bold text-white text-base mb-2 flex items-center gap-2">
                      <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain group-hover:scale-125 transition-transform duration-300" />
                      <span className="group-hover:text-purple-200 transition-colors">
                        {item.name}
                      </span>
                    </h4>
                    <p className="text-xs text-white/80 text-center group-hover:text-white/95 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                )}
              </div>

              {/* Data Row */}
              <div className="h-20 flex flex-col sm:flex-row gap-4">
                {['E&P Data Sources', 'Interoperability', 'Infrastructure'].map(
                  (label, idx) =>
                  <div
                    key={idx}
                    className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-3 flex items-center justify-center hover:bg-white/20 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(192,132,252,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-pointer animate-slide-up shadow-lg group"
                    style={{
                      animationDelay: `${500 + idx * 100}ms`
                    }}>
                    
                      <span className="text-sm font-medium text-white text-center group-hover:text-purple-200 transition-colors">
                        {label}
                      </span>
                    </div>

                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}