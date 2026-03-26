import React from 'react';
export function ChallengeSlide() {
  const layers = [
  {
    name: 'Access Control Layer',
    sub: 'Roles & Permissions',
    color: 'border-green-400',
    boxBg: 'bg-green-400/50',
    boxes: [
    {
      title: 'Administrator',
      desc: 'Full access • Role assignment • Retention & purge'
    },
    {
      title: 'Data Loader',
      desc: 'CRUD on datasets • Soft delete • Audit trail'
    },
    {
      title: 'Data Analyst',
      desc: 'Read/analyze • Derived datasets • No permant delete'
    }],

    rightText: 'Role-based access control across all platform capabilities'
  },
  {
    name: 'Discovery Layer',
    sub: 'User-Facing Search',
    color: 'border-teal-400',
    boxBg: 'bg-teal-400/50',
    boxes: [
    {
      title: 'Catalog',
      desc: ''
    },
    {
      title: 'Well',
      desc: ''
    },
    {
      title: 'Seismic',
      desc: ''
    },
    {
      title: 'Interpretations',
      desc: ''
    }],

    rightText:
    'Centralized discovery and search across all subsurface asset types'
  },
  {
    name: 'Data Intelligence Layer',
    sub: 'Insights & Monitoring',
    color: 'border-blue-400',
    boxBg: 'bg-blue-400/50',
    boxes: [
    {
      title: 'Data Lineage',
      desc: ''
    },
    {
      title: 'Data Health Dashboards',
      desc: ''
    },
    {
      title: 'Visibility & Monitoring',
      desc: ''
    },
    {
      title: 'Governance',
      desc: ''
    }],

    rightText:
    'Visibility, monitoring, and intelligence across all data flows'
  },
  {
    name: 'Operations Layer',
    sub: 'Automation & Ingestion',
    color: 'border-orange-400',
    boxBg: 'bg-orange-400/50',
    boxes: [
    {
      title: 'Connectors',
      desc: ''
    },
    {
      title: 'Pipelines',
      desc: ''
    },
    {
      title: 'Sync Managers',
      desc: ''
    },
    {
      title: 'Automated Ingestion',
      desc: ''
    },
    {
      title: 'Transformation',
      desc: ''
    }],

    rightText:
    'Automated data ingestion, synchronization, and transformation'
  },
  {
    name: 'Governance Layer',
    sub: 'Policy & Control',
    color: 'border-purple-400',
    boxBg: 'bg-purple-400/50',
    boxes: [
    {
      title: 'Control Center',
      desc: ''
    },
    {
      title: 'Metadata Governance',
      desc: ''
    },
    {
      title: 'Data Categorization',
      desc: ''
    },
    {
      title: 'Enterprise Data Control',
      desc: ''
    }],

    rightText: 'Metadata governance and enterprise data control'
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
      
      <div className="slide-content container max-w-[1200px]">
        <div className="mb-6 animate-slide-up">
          <h2 className="font-display text-fluid-h2 text-white font-bold leading-tight">
            EDAFY Platform Architecture
          </h2>
          <p className="font-body text-purple-300 text-fluid-body italic mt-1">
            Complete Platform Overview
          </p>
        </div>

        <div className="flex flex-col gap-3 h-full overflow-y-auto pr-2 pb-4">
          {layers.map((layer, idx) =>
          <div
            key={idx}
            className={`bg-white/10 backdrop-blur-xl border-2 ${layer.color} rounded-2xl p-4 shadow-lg hover:bg-white/20 hover:scale-[1.01] transition-all duration-300 cursor-pointer animate-slide-up flex flex-col md:flex-row items-center gap-4`}
            style={{
              animationDelay: `${(idx + 1) * 100}ms`
            }}>
            
              {/* Left Title */}
              <div className="w-full md:w-1/4 flex items-center gap-3 shrink-0">
                <div
                className={`w-6 h-6 rounded-full border-2 ${layer.color} shrink-0`} />
              
                <div>
                  <h3 className="font-display text-white font-bold text-sm md:text-base">
                    {layer.name}
                  </h3>
                  <p className="font-body text-white/60 text-xs bg-white/5 inline-block px-2 py-0.5 rounded mt-1">
                    {layer.sub}
                  </p>
                </div>
              </div>

              {/* Center Boxes */}
              <div className="w-full md:w-1/2 flex flex-wrap gap-2 justify-center md:justify-start">
                {layer.boxes.map((box, bIdx) =>
              <div
                key={bIdx}
                className={`${layer.boxBg} border ${layer.color} border-opacity-50 rounded px-3 py-1.5 flex flex-col justify-center ${box.desc ? 'w-full sm:w-[30%]' : ''}`}>
                
                    <span className="text-xs font-bold text-white text-center">
                      {box.title}
                    </span>
                    {box.desc &&
                <span className="text-[9px] text-white/70 text-center mt-1 leading-tight">
                        {box.desc}
                      </span>
                }
                  </div>
              )}
              </div>

              {/* Right Text */}
              <div className="w-full md:w-1/4 text-center md:text-right shrink-0">
                <p className="font-body text-white/80 text-xs md:text-sm italic">
                  {layer.rightText}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}