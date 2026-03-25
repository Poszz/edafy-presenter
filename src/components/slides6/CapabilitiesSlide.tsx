import React from 'react';
export function CapabilitiesSlide() {
  return (
    <section className="slide slide-bg-hub">
      <div className="slide-content container max-w-[1200px] h-full flex flex-col justify-center">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <h2 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight drop-shadow-md">
            Operational Value <span className="text-[#e9d5ff]">of CRM</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 flex-1 min-h-0">
          {/* Left Column - Bullets */}
          <div className="w-full lg:w-1/2 animate-slide-up delay-100">
            <div className="glass p-6 rounded-xl flex flex-col gap-5 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-3">
                <span className="text-[#fbbf24] text-2xl mt-1 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]">
                  •
                </span>
                <p className="font-body text-lg md:text-xl text-white leading-relaxed font-medium drop-shadow-sm">
                  After calibration, CRM provides actionable reservoir insights.
                </p>
              </div>

              <ul className="space-y-4 pl-8">
                {[
                'Interwell connectivity matrix identifying dominant flow paths',
                'Reservoir response time indicating pressure support strength',
                'Production forecasting for oil, gas, and water rates',
                'Water-cut prediction under different injection scenarios',
                'Injection optimization while respecting facility constraints',
                'CRM supports digital oilfield reservoir surveillance'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3 group">
                    <span className="text-purple-400 text-xl mt-1 group-hover:text-purple-300 transition-colors">
                      •
                    </span>
                    <span className="font-body text-base md:text-lg text-white/80 leading-relaxed group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Right Column - Table */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start animate-slide-up delay-300">
            <div className="w-full">
              <p className="text-center text-white/90 font-medium mb-4 tracking-wide uppercase text-sm">
                Injector → Producer Connectivity Matrix
              </p>

              <div className="overflow-hidden glass rounded-xl p-1 bg-[#5A206253]">
                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-r border-white/20 p-4 backdrop-blur-md rounded-tl-lg bg-[#5A206282]"></th>
                      <th className="border-b border-white/20 p-4 font-medium text-[#2dd4bf] backdrop-blur-md bg-[#5A206282]">
                        P1
                      </th>
                      <th className="border-b border-white/20 p-4 font-medium text-[#2dd4bf] backdrop-blur-md bg-[#5A206282]">
                        P2
                      </th>
                      <th className="border-b border-white/20 p-4 font-medium text-[#2dd4bf] backdrop-blur-md bg-[#5A206282]">
                        P3
                      </th>
                      <th className="border-b border-white/20 p-4 font-medium text-[#2dd4bf] backdrop-blur-md rounded-tr-lg bg-[#5A206282]">
                        P4
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-white/90">
                    <tr className="hover:bg-white/20 hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer">
                      <td className="border-b border-r border-white/10 p-4 font-medium text-[#fbbf24] bg-white/5">
                        I1
                      </td>
                      <td className="border-b border-white/10 p-4 bg-white/5">
                        0.35
                      </td>
                      <td className="border-b border-white/10 p-4 bg-white/5">
                        0.1
                      </td>
                      <td className="border-b border-white/10 p-4 bg-white/5">
                        0.05
                      </td>
                      <td className="border-b border-white/10 p-4 bg-white/5">
                        0.02
                      </td>
                    </tr>
                    <tr className="hover:bg-white/20 hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer">
                      <td className="border-b border-r border-white/10 p-4 font-medium text-[#fbbf24] bg-white/10">
                        I2
                      </td>
                      <td className="border-b border-white/10 p-4 bg-white/10">
                        0.15
                      </td>
                      <td className="border-b border-white/10 p-4 bg-white/10">
                        0.4
                      </td>
                      <td className="border-b border-white/10 p-4 bg-white/10">
                        0.1
                      </td>
                      <td className="border-b border-white/10 p-4 bg-white/10">
                        0.05
                      </td>
                    </tr>
                    <tr className="hover:bg-white/20 hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer">
                      <td className="border-r border-white/10 p-4 font-medium text-[#fbbf24] bg-white/5 rounded-bl-lg">
                        I3
                      </td>
                      <td className="p-4 bg-white/5">0.05</td>
                      <td className="p-4 bg-white/5">0.2</td>
                      <td className="p-4 bg-white/5">0.45</td>
                      <td className="p-4 bg-white/5 rounded-br-lg">0.1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}