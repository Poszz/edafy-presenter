import React, { Fragment } from 'react';
import { CheckIcon } from 'lucide-react';
export function CapabilitiesSlide() {
  const tableData = [
  {
    cap: 'Cross-Platform Integration',
    ind: 'Limited or custom scripts',
    edafy: 'Native connectors'
  },
  {
    cap: 'Data Lineage',
    ind: 'Rarely available',
    edafy: 'Built-in lineage tracking'
  },
  {
    cap: 'Data Quality Monitoring',
    ind: 'Manual processes',
    edafy: 'Automated health dashboards'
  },
  {
    cap: 'Sync Management',
    ind: 'Batch transfers',
    edafy: 'Intelligent sync monitoring'
  },
  {
    cap: 'Data Governance',
    ind: 'External tools',
    edafy: 'Integrated control center'
  },
  {
    cap: 'Operational Visibility',
    ind: 'Limited',
    edafy: 'Real-time integration insights'
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
      
      <div className="slide-content container max-w-[1000px]">
        <div className="mb-6 animate-slide-up">
          <h2 className="font-display text-fluid-h2 text-white font-bold leading-tight">
            How EDAFY Stands Out
          </h2>
          <p className="font-body text-purple-300 text-fluid-body italic mt-1">
            Key Differentiators vs. Industry Solutions
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Table */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl animate-slide-up delay-100">
            <div className="grid grid-cols-3 bg-white/5 border-b border-white/20">
              <div className="p-3 text-center font-bold text-orange-300">
                Capability
              </div>
              <div className="p-3 text-center font-bold text-orange-300 border-l border-white/20">
                Typical Industry Platforms
              </div>
              <div className="p-3 text-center font-bold text-white bg-white/10 border-l border-white/20">
                EDAFY
              </div>
            </div>
            {tableData.map((row, i) =>
            <div
              key={i}
              className="grid grid-cols-3 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors">
              
                <div className="p-3 text-center text-sm text-white/90">
                  {row.cap}
                </div>
                <div className="p-3 text-center text-sm text-white/70 border-l border-white/10">
                  {row.ind}
                </div>
                <div className="p-3 text-left text-sm text-white font-medium bg-white/5 border-l border-white/10 flex items-center gap-2 pl-6">
                  <CheckIcon className="w-4 h-4 text-green-400 shrink-0" />
                  {row.edafy}
                </div>
              </div>
            )}
          </div>

          {/* Example Data Flow */}
          <div className="animate-slide-up delay-300">
            <h3 className="font-display text-orange-300 font-bold mb-3">
              Example Data Flow:
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-lg">
              {[
              'Petrel Interpretation',
              'Connector',
              'Schema Mapping',
              'Unit & CRS Conversion',
              'Catalog Storage',
              'Export to OpenWorks / OSDU'].
              map((step, i) =>
              <Fragment key={i}>
                  <div className="bg-[#2a1b42] border border-orange-300/50 rounded-lg px-3 py-2 text-xs md:text-sm text-center font-medium shadow-[0_0_10px_rgba(253,186,116,0.2)]">
                    {step}
                  </div>
                  {i < 5 &&
                <span className="text-orange-300 font-bold">→</span>
                }
                </Fragment>
              )}
            </div>
          </div>

          {/* Personas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-slide-up delay-500">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex items-start gap-3 shadow-lg hover:bg-white/20 hover:scale-[1.02] transition-all cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-orange-400/20 flex items-center justify-center shrink-0 border border-orange-300/50 text-xl">
                🔬
              </div>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">
                  For Geoscientists –
                </h4>
                <p className="text-xs text-white/80 flex items-start gap-1">
                  <CheckIcon className="w-3 h-3 text-white shrink-0 mt-0.5" />{' '}
                  Faster access to trusted data
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex items-start gap-3 shadow-lg hover:bg-white/20 hover:scale-[1.02] transition-all cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-orange-400/20 flex items-center justify-center shrink-0 border border-orange-300/50 text-xl">
                🗄️
              </div>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">
                  For Data Managers –
                </h4>
                <p className="text-xs text-white/80 flex items-start gap-1">
                  <CheckIcon className="w-3 h-3 text-white shrink-0 mt-0.5" />{' '}
                  Centralized governance and quality control
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex items-start gap-3 shadow-lg hover:bg-white/20 hover:scale-[1.02] transition-all cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-orange-400/20 flex items-center justify-center shrink-0 border border-orange-300/50 text-xl">
                💻
              </div>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">For IT –</h4>
                <p className="text-xs text-white/80 flex items-start gap-1">
                  <CheckIcon className="w-3 h-3 text-white shrink-0 mt-0.5" />{' '}
                  Reduced integration complexity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}