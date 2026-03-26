import React from 'react';
import { AfedLogo } from '../AfedLogo';
import {
  SettingsIcon,
  LayoutDashboardIcon,
  CheckSquareIcon,
  DollarSignIcon,
  ShieldIcon,
  MapPinIcon } from
'lucide-react';
interface AnatomySlideProps {
  isActive: boolean;
}
const cards = [
{
  icon: SettingsIcon,
  title: 'System Administration',
  description:
  'Manage users, roles, permissions, and platform-wide configuration settings.',
  gradient: 'from-amber-700 to-orange-900',
  delay: 'delay-200'
},
{
  icon: LayoutDashboardIcon,
  title: 'Top Management Dashboard',
  description:
  'Executive view of portfolio health, KPIs, and real-time project status.',
  gradient: 'from-teal-600 to-cyan-800',
  delay: 'delay-300'
},
{
  icon: CheckSquareIcon,
  title: 'Project Management',
  description:
  'Work breakdown, scheduling, milestones, and cross-team coordination.',
  gradient: 'from-emerald-600 to-green-800',
  delay: 'delay-400'
},
{
  icon: DollarSignIcon,
  title: 'Project Finance',
  description:
  'Budget tracking, cost control, invoicing, and financial forecasting.',
  gradient: 'from-amber-700 to-orange-900',
  delay: 'delay-500'
},
{
  icon: ShieldIcon,
  title: 'Governance',
  description:
  'Approvals, risk registers, compliance frameworks, and audit trails.',
  gradient: 'from-purple-600 to-violet-800',
  delay: 'delay-600'
},
{
  icon: MapPinIcon,
  title: 'AI Intelligence',
  description:
  'Predictive analytics, risk scoring, and AI-driven decision support.',
  gradient: 'from-teal-600 to-green-800',
  delay: 'delay-700'
}];

export function AnatomySlide({ isActive }: AnatomySlideProps) {
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
          className="absolute w-[35vw] h-[35vw] rounded-full opacity-10 animate-orb"
          style={{
            background:
            'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
            top: '10%',
            right: '-5%',
            animationDelay: '1s'
          }} />
        
      </div>

      <div
        className="slide-content relative z-10"
        style={{
          padding: 'var(--slide-padding)'
        }}>
        
        {/* Top-left logo */}
        <div
          className={`absolute top-6 left-6 md:top-8 md:left-8 z-20 ${isActive ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          <AfedLogo size="sm" />
        </div>

        {/* Title */}
        <div className="mb-4 mt-2 shrink-0">
          <h2
            className={`font-inter font-extrabold text-white ${isActive ? 'animate-fade-in-left' : 'opacity-0'}`}
            style={{
              fontSize: 'var(--title-size)'
            }}>
            
            The Anatomy of EDAFY Plan
          </h2>
        </div>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 flex-1">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`rounded-2xl border border-white/10 p-4 md:p-5 flex flex-col items-start group cursor-pointer transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-purple-900/30 ${isActive ? `animate-fade-in-up ${card.delay}` : 'opacity-0'}`}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)'
                }}>
                
                {/* Icon badge — rounded square */}
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-3 shrink-0 group-hover:scale-105 transition-transform`}>
                  
                  <Icon
                    className="w-7 h-7 md:w-8 md:h-8 text-white"
                    strokeWidth={1.8} />
                  
                </div>

                {/* Title */}
                <h3 className="font-inter font-bold text-white mb-1.5 text-[40px]">
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="font-inter text-white/50 leading-snug"
                  style={{
                    fontSize: 'var(--small-size)'
                  }}>
                  
                  {card.description}
                </p>
              </div>);

          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
    </section>);

}