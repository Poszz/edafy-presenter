import React from 'react';
import { AfedLogo } from '../AfedLogo';
interface EcosystemSlideProps {
  isActive: boolean;
}
export function EcosystemSlide({ isActive }: EcosystemSlideProps) {
  return (
    <section
      className="slide relative overflow-hidden"
      style={{
        backgroundImage:
        'url(/bg-slide-plan.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-purple-950/40 pointer-events-none" />

      {/* Background orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[30vw] h-[30vw] rounded-full opacity-10 animate-orb"
          style={{
            background:
            'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)',
            top: '30%',
            left: '30%',
            animationDelay: '3s'
          }} />
        
      </div>

      {/* Top-left logo */}
      <div
        className={`absolute top-6 left-6 md:top-8 md:left-8 z-20 ${isActive ? 'animate-fade-in-up' : 'opacity-0'}`}>
        
        <AfedLogo size="sm" />
      </div>

      {/* Main Content Wrapper */}
      <div
        className="slide-content relative z-10 flex flex-col items-center justify-center"
        style={{
          padding: 'var(--slide-padding)'
        }}>
        
        {/* Title */}
        <div
          className={`w-full max-w-[1200px] text-center pb-3 shrink-0 ${isActive ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          
          <h2
            className="font-inter font-extrabold text-white"
            style={{
              fontSize: 'clamp(1.6rem, 4vw, 3rem)',
              lineHeight: 1.15
            }}>
            
            The Operational Heart of
            <br />
            the EDAFY Ecosystem
          </h2>
        </div>

        {/* Glassmorphism Card wrapping the diagram image */}
        <div
          className={`relative w-full max-w-[1200px] flex-1 max-h-[75vh] flex items-center justify-center rounded-3xl border border-white/20 shadow-2xl shadow-purple-900/50 overflow-hidden ${isActive ? 'animate-fade-in-scale delay-300' : 'opacity-0'}`}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)'
          }}>
          
          {/* Subtle inner glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
              'radial-gradient(ellipse at center, rgba(16,185,129,0.06) 0%, transparent 70%)'
            }} />
          

          {/* Diagram SVG Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
            <img
              src="./edafy_ecosystem_v4.svg"
              alt="EDAFY Ecosystem Diagram — EDAFY Plan at center connected to EDAFY Data, EDAFY AI, EDAFY Asset, and EDAFY Insights"
              className="w-full h-full object-contain"
              style={{
                maxHeight: 'min(65vh, 650px)',
                filter: 'drop-shadow(0 0 20px rgba(16,185,129,0.15))'
              }} />
            
          </div>
        </div>
      </div>
    </section>);

}