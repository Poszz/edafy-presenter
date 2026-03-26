import React from 'react';
export function DataFlowSlide() {
  return (
    <section
      className="slide text-white"
      style={{
        backgroundImage:
        'url(/bg-slide-main.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      <div className="slide-content container flex flex-col items-center justify-center">
        <div className="mb-6 animate-slide-up text-center">
          <h2 className="font-display text-fluid-h2 text-white font-bold leading-tight">
            EDAFY Asset Data Flow
          </h2>
          <p className="font-body text-purple-300 text-fluid-body italic mt-1">
            From Assets to Integration, Analysis & Visualization
          </p>
        </div>

        <div className="w-full animate-slide-up delay-200">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-3 shadow-[0_0_60px_rgba(192,132,252,0.15)] flex flex-col items-center">
            <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center p-2">
              <img
                src="/Slide5.jpg"
                alt="EDAFY Asset Data Flow Diagram"
                className="w-full object-contain rounded-xl"
                style={{
                  maxHeight: 'min(65vh, 600px)'
                }} />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

}