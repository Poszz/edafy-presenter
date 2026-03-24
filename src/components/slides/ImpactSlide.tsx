import React from 'react';
export function ImpactSlide() {
  return (
    <section
      className="slide text-white"
      style={{
        backgroundImage:
        'url(https://cdn.magicpatterns.com/uploads/oNo2BAMCGVU39vB2KQpoNK/image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      <div className="slide-content container">
        <div className="mb-8 animate-slide-up">
          <p className="font-display text-purple-300 text-sm tracking-widest uppercase mb-2 font-bold">
            CLOSING STATEMENT
          </p>
          <h2 className="font-display text-fluid-h2 text-white font-bold leading-tight">
            EDAFY – The Subsurface Data Intelligence & Integration Platform
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 h-full items-center">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl animate-slide-up delay-100">
              <div className="flex justify-end gap-2 mb-4 opacity-50">
                <div className="w-3 h-3 rounded-full bg-white/50" />
                <div className="w-3 h-3 rounded-full bg-white/50" />
                <div className="w-3 h-3 rounded-full bg-white/50" />
              </div>

              <p className="font-body text-white text-lg italic mb-4">
                EDAFY is not just a catalog or ETL tool.
                <br />
                It becomes the Subsurface Data Intelligence & Integration
                Platform connecting:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-white/90">
                  <span className="text-xl">🛠️</span> Interpretation tools (3rd
                  Party)
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="text-xl">☁️</span> Data providers (3rd Party)
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="text-xl">🏢</span> Enterprise data platforms
                  (OSDU, PPDM)
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="text-xl">🤝</span> External partners
                </li>
              </ul>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-2xl opacity-80">🧠</span>
                  <span className="text-sm font-medium">
                    Complete Intelligence Platform
                  </span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-2xl opacity-80">🔗</span>
                  <span className="text-sm font-medium">
                    Unified Ecosystem Connectivity
                  </span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-2xl opacity-80">🛡️</span>
                  <span className="text-sm font-medium">
                    Embedded Governance
                  </span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-2xl opacity-80">👥</span>
                  <span className="text-sm font-medium">
                    Multi-Stakeholder Value
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Subsurface Illustration */}
          <div className="w-full md:w-1/2 flex flex-col animate-slide-up delay-300">
            <div className="relative w-full h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl overflow-hidden hover:shadow-[0_0_80px_rgba(192,132,252,0.4)] hover:bg-white/15 transition-all duration-500">
              <img
                src="/image.png"
                alt="EDAFY Subsurface Data Intelligence Platform - 3D geological layers visualization"
                className="w-full h-full object-cover rounded-xl"
                style={{
                  maxHeight: 'none'
                }} />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

}