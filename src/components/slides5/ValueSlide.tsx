import React from 'react';
import { TrendingUpIcon, UsersIcon, CpuIcon } from 'lucide-react';
export function ValueSlide() {
  return (
    <section
      className="slide text-white"
      style={{
        backgroundImage:
        'url(/bg-slide-main.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      <div className="slide-content container flex flex-col items-center justify-center h-full py-8 gap-6">
        {/* Title */}
        <div className="w-full text-center animate-slide-up z-10">
          <h2 className="font-display text-fluid-title font-black text-white tracking-tight leading-tight">
            Maximize. Elevate. Scale.
          </h2>
        </div>

        {/* 3 Value Cards */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5 z-10">
          {/* Maximize Value */}
          <div className="interactive-card p-6 flex flex-col gap-4 group animate-slide-up delay-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition-colors">
              <TrendingUpIcon className="w-6 h-6 text-purple-300 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-display text-fluid-h3 font-bold text-white">
              Maximize Value
            </h3>
            <p className="font-body text-fluid-small text-white/70 leading-relaxed">
              Unify all E&P data — subsurface, surface, unstructured — into a
              single trusted platform. Reduce maintenance costs and data
              fragmentation.
            </p>
          </div>

          {/* Elevate Productivity */}
          <div className="interactive-card p-6 flex flex-col gap-4 group animate-slide-up delay-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40 transition-colors">
              <UsersIcon className="w-6 h-6 text-blue-300 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-display text-fluid-h3 font-bold text-white">
              Elevate Productivity
            </h3>
            <p className="font-body text-fluid-small text-white/70 leading-relaxed">
              Domain experts collaborate with AI-assisted search, data
              conversation, and seamless app integration.
            </p>
          </div>

          {/* Scale AI Confidently */}
          <div className="interactive-card p-6 flex flex-col gap-4 group animate-slide-up delay-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/40 transition-colors">
              <CpuIcon className="w-6 h-6 text-teal-300 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-display text-fluid-h3 font-bold text-white">
              Scale AI Confidently
            </h3>
            <p className="font-body text-fluid-small text-white/70 leading-relaxed">
              Deploy ready-to-use, physics-based or custom AI models.
            </p>
          </div>
        </div>

        {/* Decorative accent line */}
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-full animate-slide-up delay-400 opacity-60" />
      </div>
    </section>);

}