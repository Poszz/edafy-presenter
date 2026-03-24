import React from 'react';
import { AfedLogo } from '../AfedLogo';
import {
  SearchIcon,
  SettingsIcon,
  BellIcon,
  UserIcon,
  ChevronRightIcon,
  AlertTriangleIcon,
  SparklesIcon,
  RefreshCwIcon,
  LayoutDashboardIcon,
  FolderIcon,
  MessageSquareIcon,
  DatabaseIcon,
  BarChart3Icon,
  ChevronDownIcon,
  CheckCircle2Icon,
  EyeIcon,
  FileTextIcon,
  DollarSignIcon } from
'lucide-react';
interface PlatformSlideProps {
  isActive: boolean;
}
export function PlatformSlide({ isActive }: PlatformSlideProps) {
  return (
    <section
      className="slide relative overflow-hidden"
      style={{
        backgroundImage:
        'url(https://cdn.magicpatterns.com/uploads/rDHXLm66BWR6q7Pi1g3oF3/7.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-purple-950/40 pointer-events-none" />

      {/* Background orbs */}
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

        {/* Header — Title + Caption stacked */}
        <div
          className={`flex flex-col gap-1 mb-1 mt-8 md:mt-10 ${isActive ? 'animate-fade-in-left' : 'opacity-0'}`}>
          
          <h2 className="font-inter font-bold text-white shrink-0 text-[64px] leading-tight">
            One Platform. Infinite Clarity
          </h2>
          <p className="font-inter text-purple-300 text-[22px]">
            AI-powered project management for upstream E&P operations.
          </p>
        </div>

        {/* Dashboard + Feature Callouts */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Feature callout: Top-left + connector */}
          <div
            className={`absolute left-0 top-[8%] z-20 flex items-center gap-0 ${isActive ? 'animate-fade-in-left delay-400' : 'opacity-0'}`}>
            
            <div className="glass-card p-3 flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-400/20 flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                <EyeIcon className="w-4 h-4 text-teal-400" />
              </div>
              <span
                className="font-inter font-medium text-white"
                style={{
                  fontSize: 'var(--small-size)'
                }}>
                
                Real-time project visibility
              </span>
            </div>
            {/* Arrow connector → pointing right toward dashboard */}
            <svg
              width="60"
              height="16"
              viewBox="0 0 60 16"
              className="shrink-0"
              style={{
                marginLeft: '-2px'
              }}>
              
              <defs>
                <linearGradient id="arrow-teal" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(20,184,166,0.6)" />
                  <stop offset="100%" stopColor="rgba(20,184,166,0.9)" />
                </linearGradient>
              </defs>
              <line
                x1="0"
                y1="8"
                x2="48"
                y2="8"
                stroke="url(#arrow-teal)"
                strokeWidth="2" />
              
              <polygon points="46,3 58,8 46,13" fill="rgba(20,184,166,0.9)" />
            </svg>
          </div>

          {/* Feature callout: Top-right + connector */}
          <div
            className={`absolute right-0 top-[8%] z-20 flex items-center gap-0 ${isActive ? 'animate-fade-in-right delay-500' : 'opacity-0'}`}>
            
            {/* Arrow connector ← pointing left toward dashboard */}
            <svg
              width="60"
              height="16"
              viewBox="0 0 60 16"
              className="shrink-0"
              style={{
                marginRight: '-2px'
              }}>
              
              <defs>
                <linearGradient id="arrow-red" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor="rgba(248,113,113,0.6)" />
                  <stop offset="100%" stopColor="rgba(248,113,113,0.9)" />
                </linearGradient>
              </defs>
              <line
                x1="12"
                y1="8"
                x2="60"
                y2="8"
                stroke="url(#arrow-red)"
                strokeWidth="2" />
              
              <polygon points="14,3 2,8 14,13" fill="rgba(248,113,113,0.9)" />
            </svg>
            <div className="glass-card p-3 flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-400/20 flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                <AlertTriangleIcon className="w-4 h-4 text-red-400" />
              </div>
              <span
                className="font-inter font-medium text-white"
                style={{
                  fontSize: 'var(--small-size)'
                }}>
                
                Predictive risk alerts
              </span>
            </div>
          </div>

          {/* Feature callout: Bottom-left + connector */}
          <div
            className={`absolute left-0 bottom-[8%] z-20 flex items-center gap-0 ${isActive ? 'animate-fade-in-left delay-600' : 'opacity-0'}`}>
            
            <div className="glass-card p-3 flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                <DollarSignIcon className="w-4 h-4 text-emerald-400" />
              </div>
              <span
                className="font-inter font-medium text-white"
                style={{
                  fontSize: 'var(--small-size)'
                }}>
                
                End-to-end financial oversight
              </span>
            </div>
            {/* Arrow connector → pointing right toward dashboard */}
            <svg
              width="60"
              height="16"
              viewBox="0 0 60 16"
              className="shrink-0"
              style={{
                marginLeft: '-2px'
              }}>
              
              <defs>
                <linearGradient id="arrow-emerald" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(52,211,153,0.6)" />
                  <stop offset="100%" stopColor="rgba(52,211,153,0.9)" />
                </linearGradient>
              </defs>
              <line
                x1="0"
                y1="8"
                x2="48"
                y2="8"
                stroke="url(#arrow-emerald)"
                strokeWidth="2" />
              
              <polygon points="46,3 58,8 46,13" fill="rgba(52,211,153,0.9)" />
            </svg>
          </div>

          {/* Feature callout: Bottom-right + connector */}
          <div
            className={`absolute right-0 bottom-[8%] z-20 flex items-center gap-0 ${isActive ? 'animate-fade-in-right delay-700' : 'opacity-0'}`}>
            
            {/* Arrow connector ← pointing left toward dashboard */}
            <svg
              width="60"
              height="16"
              viewBox="0 0 60 16"
              className="shrink-0"
              style={{
                marginRight: '-2px'
              }}>
              
              <defs>
                <linearGradient id="arrow-blue" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor="rgba(96,165,250,0.6)" />
                  <stop offset="100%" stopColor="rgba(96,165,250,0.9)" />
                </linearGradient>
              </defs>
              <line
                x1="12"
                y1="8"
                x2="60"
                y2="8"
                stroke="url(#arrow-blue)"
                strokeWidth="2" />
              
              <polygon points="14,3 2,8 14,13" fill="rgba(96,165,250,0.9)" />
            </svg>
            <div className="glass-card p-3 flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <FileTextIcon className="w-4 h-4 text-blue-400" />
              </div>
              <span
                className="font-inter font-medium text-white"
                style={{
                  fontSize: 'var(--small-size)'
                }}>
                
                Automated reporting
              </span>
            </div>
          </div>

          {/* Dashboard UI Container — 2:1 aspect ratio, sized to not overlap callouts */}
          <div
            className={`relative w-[56vw] flex overflow-hidden rounded-2xl glass-strong border border-white/20 shadow-2xl shadow-purple-900/50 ${isActive ? 'animate-fade-in-scale delay-200' : 'opacity-0'}`}
            style={{
              aspectRatio: '2 / 1',
              maxHeight: '55vh'
            }}>
            
            {/* Left Sidebar */}
            <div className="hidden md:flex w-36 flex-col border-r border-white/10 p-2 gap-3 bg-black/10">
              {/* Logo area */}
              <div className="flex items-center gap-2 px-1 py-1">
                <div className="w-5 h-5 rounded bg-gradient-to-br from-purple-500 to-emerald-500 flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white">E</span>
                </div>
                <span className="font-bold text-white text-xs tracking-widest">
                  EDAFY
                </span>
              </div>

              {/* Search */}
              <div className="glass rounded-md flex items-center px-2 py-1 gap-1.5">
                <SearchIcon className="w-3 h-3 text-white/50" />
                <span className="text-white/50 text-[10px]">Search...</span>
              </div>

              {/* Nav Menu */}
              <div className="flex flex-col gap-0.5 flex-1 overflow-hidden">
                <div className="glass bg-white/10 rounded-md flex items-center gap-1.5 px-2 py-1 text-white">
                  <LayoutDashboardIcon className="w-3 h-3" />
                  <span className="text-[10px] font-medium">Dashboard</span>
                </div>
                <div className="rounded-md flex items-center gap-1.5 px-2 py-1 text-white/60">
                  <FolderIcon className="w-3 h-3" />
                  <span className="text-[10px]">Projects</span>
                </div>
                <div className="rounded-md flex items-center gap-1.5 px-2 py-1 text-white/60">
                  <BellIcon className="w-3 h-3" />
                  <span className="text-[10px]">Notifications</span>
                </div>

                <div className="mt-2 mb-0.5 px-2 text-[8px] font-bold text-white/40 uppercase tracking-wider">
                  Projects
                </div>
                <div className="rounded-md flex items-center gap-1.5 px-2 py-0.5 text-white/60">
                  <div className="w-1 h-1 rounded-full bg-emerald-400" />
                  <span className="text-[10px]">Active Projects</span>
                </div>
                <div className="rounded-md flex items-center gap-1.5 px-2 py-0.5 text-white/60">
                  <BarChart3Icon className="w-3 h-3" />
                  <span className="text-[10px]">Analyse</span>
                </div>
                <div className="rounded-md flex items-center gap-1.5 px-2 py-0.5 text-white/60">
                  <MessageSquareIcon className="w-3 h-3" />
                  <span className="text-[10px]">Discuss</span>
                </div>

                <div className="mt-2 mb-0.5 px-2 text-[8px] font-bold text-white/40 uppercase tracking-wider">
                  Data
                </div>
                <div className="rounded-md flex items-center gap-1.5 px-2 py-0.5 text-white/60">
                  <DatabaseIcon className="w-3 h-3" />
                  <span className="text-[10px]">Data Sources</span>
                </div>
              </div>

              {/* Settings Bottom */}
              <div className="mt-auto pt-2 border-t border-white/10">
                <div className="rounded-md flex items-center gap-1.5 px-2 py-1 text-white/60">
                  <SettingsIcon className="w-3 h-3" />
                  <span className="text-[10px]">Settings</span>
                </div>
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Top Nav Bar */}
              <div className="h-9 border-b border-white/10 flex items-center justify-between px-3 shrink-0 bg-black/5">
                <div className="flex items-center gap-1.5">
                  <span className="text-white/60 text-[10px]">Overview</span>
                  <ChevronRightIcon className="w-2.5 h-2.5 text-white/40" />
                  <span className="text-white text-[10px] font-medium">
                    Dashboard
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="glass px-2 py-1 rounded-md flex items-center gap-1 text-[10px] text-white/80">
                    Finance <ChevronDownIcon className="w-2.5 h-2.5" />
                  </button>
                  <button className="bg-emerald-500 text-white px-2 py-1 rounded-md text-[10px] font-bold shadow-lg shadow-emerald-500/20">
                    Dashboard
                  </button>
                  <div className="w-px h-3 bg-white/20 mx-0.5" />
                  <SettingsIcon className="w-3 h-3 text-white/60" />
                  <BellIcon className="w-3 h-3 text-white/60" />
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center border border-white/20">
                    <UserIcon className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="flex-1 p-2 flex flex-col gap-2 overflow-hidden">
                {/* Row 1: Timeline & Progress */}
                <div className="flex gap-2 h-[45%] shrink-0">
                  {/* Card 1: Project Timeline */}
                  <div className="glass-card flex-[2] p-2 flex flex-col overflow-hidden">
                    <div className="flex justify-between items-center mb-1.5 shrink-0">
                      <h3 className="text-white font-bold text-[10px]">
                        Project Timeline
                      </h3>
                      <div className="flex gap-1">
                        <span className="glass px-1.5 py-0.5 rounded text-[8px] text-white/70">
                          Milestone
                        </span>
                        <span className="glass px-1.5 py-0.5 rounded text-[8px] text-white/70">
                          Range
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col relative">
                      <div className="flex justify-between text-[7px] text-white/40 mb-1 px-12 shrink-0">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                        <span>Aug</span>
                        <span>Nov</span>
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-0.5">
                        {[
                        {
                          name: 'Project 1',
                          color: 'bg-emerald-400',
                          w: '40%',
                          l: '10%'
                        },
                        {
                          name: 'Project 2',
                          color: 'bg-blue-400',
                          w: '30%',
                          l: '20%'
                        },
                        {
                          name: 'Project 3',
                          color: 'bg-purple-400',
                          w: '50%',
                          l: '35%'
                        },
                        {
                          name: 'Project 4',
                          color: 'bg-amber-400',
                          w: '25%',
                          l: '5%'
                        },
                        {
                          name: 'Project 5',
                          color: 'bg-pink-400',
                          w: '45%',
                          l: '45%'
                        },
                        {
                          name: 'Project 6',
                          color: 'bg-teal-400',
                          w: '35%',
                          l: '15%'
                        },
                        {
                          name: 'Project 7',
                          color: 'bg-indigo-400',
                          w: '55%',
                          l: '25%'
                        }].
                        map((proj, i) =>
                        <div
                          key={i}
                          className="flex items-center gap-1 text-[8px]">
                          
                            <span className="text-white/60 w-10 truncate">
                              {proj.name}
                            </span>
                            <div className="flex-1 h-2 bg-white/5 rounded-full relative">
                              <div
                              className={`absolute h-full rounded-full ${proj.color} opacity-80`}
                              style={{
                                width: proj.w,
                                left: proj.l
                              }} />
                            
                              {i % 2 === 0 &&
                            <div
                              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]"
                              style={{
                                left: `calc(${proj.l} + ${proj.w} / 2)`
                              }} />

                            }
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Project Progress */}
                  <div className="glass-card flex-[1] p-2 flex flex-col">
                    <h3 className="text-white font-bold text-[10px] mb-2 shrink-0">
                      Project Progress
                    </h3>
                    <div className="flex-1 flex flex-col justify-between gap-1.5">
                      {[
                      {
                        label: 'Project Progress',
                        value: '66%',
                        color: 'bg-emerald-400',
                        w: '66%',
                        textColor: 'text-emerald-400'
                      },
                      {
                        label: 'Budget Utilised',
                        value: '72%',
                        color: 'bg-emerald-400',
                        w: '72%',
                        textColor: 'text-emerald-400'
                      },
                      {
                        label: 'Risks Detected',
                        value: '12 (2 Critical)',
                        color: 'bg-red-400',
                        w: '40%',
                        textColor: 'text-red-400'
                      },
                      {
                        label: 'AI Insights',
                        value: '4 Active',
                        color: 'bg-purple-400',
                        w: '25%',
                        textColor: 'text-purple-400'
                      }].
                      map((item, i) =>
                      <div key={i} className="flex flex-col gap-0.5">
                          <div className="flex justify-between text-[9px]">
                            <span className="text-white/70">{item.label}</span>
                            <span className={`${item.textColor} font-bold`}>
                              {item.value}
                            </span>
                          </div>
                          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div
                            className={`h-full ${item.color} rounded-full`}
                            style={{
                              width: item.w
                            }} />
                          
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Row 2: KPI Strip */}
                <div className="flex gap-2 h-[15%] shrink-0">
                  {[
                  {
                    label: 'Project Progress',
                    value: '68%',
                    icon:
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />

                  },
                  {
                    label: 'Budget Utilised',
                    value: '72%',
                    icon: <RefreshCwIcon className="w-3 h-3 text-blue-400" />
                  },
                  {
                    label: 'Risks Detected',
                    value: '12',
                    sub: '(2 Critical)',
                    subColor: 'text-red-400',
                    icon:
                    <AlertTriangleIcon className="w-3 h-3 text-red-400" />

                  },
                  {
                    label: 'AI Insights',
                    value: '4',
                    sub: 'Active',
                    subColor: 'text-purple-400',
                    icon:
                    <SparklesIcon className="w-3 h-3 text-purple-400" />

                  }].
                  map((kpi, i) =>
                  <div
                    key={i}
                    className="glass-card flex-1 p-2 flex flex-col justify-center overflow-hidden">
                    
                      <span className="text-[8px] text-white/60 mb-0.5">
                        {kpi.label}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-bold text-white">
                          {kpi.value}
                        </span>
                        {kpi.sub &&
                      <span className={`text-[8px] ${kpi.subColor}`}>
                            {kpi.sub}
                          </span>
                      }
                        {kpi.icon}
                      </div>
                    </div>
                  )}
                </div>

                {/* Row 3: Bottom Cards */}
                <div className="flex gap-2 h-[40%] shrink-0">
                  {/* Card 3: Active Projects */}
                  <div className="glass-card flex-1 p-2 flex flex-col overflow-hidden">
                    <div className="flex justify-between items-center mb-1.5 shrink-0">
                      <h3 className="text-white font-bold text-[10px]">
                        Active Projects
                      </h3>
                      <span className="text-[8px] text-purple-300">
                        View All
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col gap-1 overflow-hidden">
                      <div className="flex justify-between text-[8px] text-white/40 px-0.5 border-b border-white/10 pb-0.5">
                        <span>Project</span>
                        <span>Status</span>
                      </div>
                      {[1, 2, 3, 4].map((i) =>
                      <div
                        key={i}
                        className="flex justify-between items-center px-0.5 py-0.5">
                        
                          <span className="text-[9px] text-white/80">
                            Project {i}
                          </span>
                          <div className="flex items-center gap-1">
                            <span className="flex items-center gap-0.5 text-[7px] text-emerald-400 bg-emerald-400/10 px-1 py-0.5 rounded border border-emerald-400/20">
                              <CheckCircle2Icon className="w-2 h-2" /> Granted
                            </span>
                            <ChevronRightIcon className="w-2.5 h-2.5 text-white/40" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card 4: Financial Health */}
                  <div className="glass-card flex-1 p-2 flex flex-col overflow-hidden">
                    <h3 className="text-white font-bold text-[10px] mb-1.5 shrink-0">
                      Financial Health
                    </h3>
                    <div className="flex-1 flex flex-col justify-between gap-1">
                      {[
                      {
                        label: 'Allocations',
                        value: '10.6%',
                        color: 'bg-emerald-400',
                        w: '10.6%'
                      },
                      {
                        label: 'Budget Utilised',
                        value: '72%',
                        color: 'bg-emerald-400',
                        w: '72%'
                      },
                      {
                        label: 'Guardrail Utilised',
                        value: '30',
                        color: 'bg-amber-400',
                        w: '30%'
                      },
                      {
                        label: 'Run Amount',
                        value: '2.5%',
                        color: 'bg-red-400',
                        w: '2.5%'
                      }].
                      map((item, i) =>
                      <div key={i} className="flex flex-col gap-0.5">
                          <div className="flex justify-between text-[8px]">
                            <span className="text-white/60">{item.label}</span>
                            <span className="text-white">{item.value}</span>
                          </div>
                          <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div
                            className={`h-full ${item.color} rounded-full`}
                            style={{
                              width: item.w
                            }} />
                          
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card 5: AI Recommendations */}
                  <div className="glass-card flex-1 p-2 flex flex-col overflow-hidden">
                    <div className="flex items-center gap-1 mb-1.5 shrink-0">
                      <SparklesIcon className="w-3 h-3 text-purple-400" />
                      <h3 className="text-white font-bold text-[10px]">
                        AI Recommendations
                      </h3>
                    </div>
                    <div className="flex-1 flex flex-col gap-1.5 overflow-hidden">
                      {[
                      'AI Recommendations to manage comments/objects across multiple active projects.',
                      'Recommendations stem projects search focus and resource reallocation.',
                      'AI Recommendations works under/inescence for budget optimization.'].
                      map((text, i) =>
                      <div key={i} className="flex items-start gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-purple-400 mt-1 shrink-0" />
                          <p className="text-[8px] text-white/70 leading-relaxed">
                            {text}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
    </section>);

}