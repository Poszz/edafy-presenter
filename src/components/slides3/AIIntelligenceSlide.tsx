import React from 'react';
import { AfedLogo } from '../AfedLogo';
interface AIIntelligenceSlideProps {
  isActive: boolean;
}
export function AIIntelligenceSlide({ isActive }: AIIntelligenceSlideProps) {
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

      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[35vw] h-[35vw] rounded-full opacity-10 animate-orb"
          style={{
            background:
            'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
            top: '5%',
            left: '-10%',
            animationDelay: '2s'
          }} />
        
        <div
          className="absolute w-[25vw] h-[25vw] rounded-full opacity-8 animate-orb"
          style={{
            background:
            'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)',
            bottom: '10%',
            right: '-5%',
            animationDelay: '5s'
          }} />
        
      </div>

      <div
        className="slide-content relative z-10 flex flex-col"
        style={{
          padding: 'var(--slide-padding)'
        }}>
        
        {/* Top-left logo */}
        <div
          className={`absolute top-6 left-6 md:top-8 md:left-8 z-20 ${isActive ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          <AfedLogo size="sm" />
        </div>

        {/* Title + Subtitle */}
        <div className="mb-4 mt-2 shrink-0">
          <h2
            className={`font-inter font-extrabold text-white ${isActive ? 'animate-fade-in-left' : 'opacity-0'}`}
            style={{
              fontSize: 'var(--title-size)'
            }}>
            
            AI Intelligence
          </h2>
          <p
            className={`font-inter text-purple-300 mt-1 ${isActive ? 'animate-fade-in-left delay-100' : 'opacity-0'}`}
            style={{
              fontSize: 'var(--body-size)'
            }}>
            
            Deep Dive into EDAFY's AI-Powered Capabilities
          </p>
        </div>

        {/* Glass card with diagram image */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className={`relative rounded-3xl border border-white/10 overflow-hidden ${isActive ? 'animate-fade-in-scale delay-200' : 'opacity-0'}`}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              boxShadow:
              '0 0 80px rgba(139,92,246,0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
              maxWidth: 'min(90vw, 1100px)',
              maxHeight: 'min(70vh, 650px)',
              padding: 'clamp(1rem, 2vw, 2.5rem)'
            }}>
            
            {/* Inner glow border */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 60px rgba(139,92,246,0.08)'
              }} />
            

            {/* Diagram image */}
            <img
              src="./Gemini_Generated_Image_193iy0193iy0193i.jpg"
              alt="EDAFY AI Engine - Hub and spoke diagram showing AI capabilities"
              className="relative z-10 w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.15))'
              }} />
            
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
    </section>);

}