import React, { Fragment } from 'react';
import {
  SearchIcon,
  Building2Icon,
  FactoryIcon,
  TrendingUpIcon,
  PowerOffIcon,
  ChevronRightIcon } from
'lucide-react';
export function LifeCycleSlide() {
  return (
    <section
      className="slide text-white"
      style={{
        backgroundImage:
        'url(https://cdn.magicpatterns.com/uploads/oNo2BAMCGVU39vB2KQpoNK/image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      <div className="slide-content container max-w-[1400px] flex flex-col justify-center items-center h-full">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12 shrink-0 animate-slide-up">
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{
              fontSize: 'clamp(1.75rem, 4.5vw, 4rem)'
            }}>
            
            End-to-End Asset Lifecycle
          </h2>
          <p
            className="font-body mt-2 lg:mt-3 text-purple-300/90 italic"
            style={{
              fontSize: 'clamp(0.8rem, 1.4vw, 1.15rem)'
            }}>
            
            From discovery to decommission — powered by data & optimization
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex items-center justify-center w-full px-2 lg:px-0 relative">
          {/* Horizontal connecting line behind everything */}
          <div
            className="absolute left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent hidden lg:block"
            style={{
              top: '52%'
            }} />
          

          {/* Phase 01 - Exploration & Appraisal */}
          <div
            className="lifecycle-card animate-slide-up"
            style={{
              animationDelay: '100ms'
            }}>
            
            <div className="lifecycle-card-inner bg-[#DECFEC]">
              <span className="lifecycle-number">01</span>
              <div className="lifecycle-icon-wrap">
                <SearchIcon
                  className="w-6 h-6 lg:w-7 lg:h-7 text-slate-700"
                  strokeWidth={1.5} />
                
              </div>
              <div className="lifecycle-divider" />
              <h3 className="lifecycle-title">
                Exploration &<br />
                Appraisal
              </h3>
              <p className="lifecycle-desc">Seismic, surveys, drilling</p>
            </div>
          </div>

          {/* Connector 1→2 */}
          <div
            className="lifecycle-connector animate-slide-up"
            style={{
              animationDelay: '150ms'
            }}>
            
            <ChevronRightIcon
              className="w-3.5 h-3.5 text-white/70"
              strokeWidth={2.5} />
            
          </div>

          {/* Phase 02 - Development & Construction */}
          <div
            className="lifecycle-card animate-slide-up"
            style={{
              animationDelay: '200ms'
            }}>
            
            <div className="lifecycle-card-inner bg-[#DECFEC]">
              <span className="lifecycle-number">02</span>
              <div className="lifecycle-icon-wrap">
                <Building2Icon
                  className="w-6 h-6 lg:w-7 lg:h-7 text-slate-700"
                  strokeWidth={1.5} />
                
              </div>
              <div className="lifecycle-divider" />
              <h3 className="lifecycle-title">
                Development &<br />
                Construction
              </h3>
              <p className="lifecycle-desc">
                Facilities, wells, infrastructure
              </p>
            </div>
          </div>

          {/* Connector 2→3 */}
          <div
            className="lifecycle-connector animate-slide-up"
            style={{
              animationDelay: '250ms'
            }}>
            
            <ChevronRightIcon
              className="w-3.5 h-3.5 text-white/70"
              strokeWidth={2.5} />
            
          </div>

          {/* Phase 03 - Production & Operations */}
          <div
            className="lifecycle-card animate-slide-up"
            style={{
              animationDelay: '300ms'
            }}>
            
            <div className="lifecycle-card-inner bg-[#DECFEC]">
              <span className="lifecycle-number">03</span>
              <div className="lifecycle-icon-wrap">
                <FactoryIcon
                  className="w-6 h-6 lg:w-7 lg:h-7 text-slate-700"
                  strokeWidth={1.5} />
                
              </div>
              <div className="lifecycle-divider" />
              <h3 className="lifecycle-title">
                Production &<br />
                Operations
              </h3>
              <p className="lifecycle-desc">Extraction, monitoring</p>
            </div>
          </div>

          {/* Connector 3→4 */}
          <div
            className="lifecycle-connector animate-slide-up"
            style={{
              animationDelay: '350ms'
            }}>
            
            <ChevronRightIcon
              className="w-3.5 h-3.5 text-white/70"
              strokeWidth={2.5} />
            
          </div>

          {/* Phase 04 - Optimization & Life Extension */}
          <div
            className="lifecycle-card animate-slide-up"
            style={{
              animationDelay: '400ms'
            }}>
            
            <div className="lifecycle-card-inner bg-[#DECFEC]">
              <span className="lifecycle-number">04</span>
              <div className="lifecycle-icon-wrap">
                <TrendingUpIcon
                  className="w-6 h-6 lg:w-7 lg:h-7 text-slate-700"
                  strokeWidth={1.5} />
                
              </div>
              <div className="lifecycle-divider" />
              <h3 className="lifecycle-title">
                Optimization &<br />
                Life Extension
              </h3>
              <p className="lifecycle-desc">AI, analytics, efficiency</p>
            </div>
          </div>

          {/* Connector 4→5 */}
          <div
            className="lifecycle-connector animate-slide-up"
            style={{
              animationDelay: '450ms'
            }}>
            
            <ChevronRightIcon
              className="w-3.5 h-3.5 text-white/70"
              strokeWidth={2.5} />
            
          </div>

          {/* Phase 05 - Decommissioning & Abandonment */}
          <div
            className="lifecycle-card animate-slide-up"
            style={{
              animationDelay: '500ms'
            }}>
            
            <div className="lifecycle-card-inner bg-[#DECFEC]">
              <span className="lifecycle-number">05</span>
              <div className="lifecycle-icon-wrap">
                <PowerOffIcon
                  className="w-6 h-6 lg:w-7 lg:h-7 text-slate-700"
                  strokeWidth={1.5} />
                
              </div>
              <div className="lifecycle-divider" />
              <h3 className="lifecycle-title">
                Decommissioning
                <br />& Abandonment
              </h3>
              <p className="lifecycle-desc">Plug & abandon, restore</p>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* ===== Lifecycle Card Base ===== */
        .lifecycle-card {
          flex: 1;
          max-width: clamp(120px, 16vw, 240px);
          z-index: 2;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .lifecycle-card:hover {
          transform: scale(1.1);
          z-index: 5;
        }

        .lifecycle-card-inner {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: clamp(12px, 1.5vw, 20px);
          padding: clamp(12px, 1.8vw, 28px) clamp(10px, 1.2vw, 20px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: clamp(180px, 30vh, 340px);
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .lifecycle-card:hover .lifecycle-card-inner {
          background: rgba(255, 255, 255, 0.72);
          border-color: rgba(255, 255, 255, 0.85);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15), 0 0 30px rgba(139, 92, 246, 0.12);
        }

        /* ===== Number ===== */
        .lifecycle-number {
          align-self: flex-start;
          font-size: clamp(0.9rem, 1.6vw, 1.5rem);
          font-weight: 700;
          color: rgba(88, 28, 135, 0.7);
          margin-bottom: clamp(8px, 1.5vh, 20px);
          letter-spacing: 0.05em;
        }

        /* ===== Icon Circle ===== */
        .lifecycle-icon-wrap {
          width: clamp(44px, 6vw, 80px);
          height: clamp(44px, 6vw, 80px);
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: clamp(8px, 1.5vh, 16px);
          flex-shrink: 0;
          transition: all 0.35s ease;
        }

        .lifecycle-card:hover .lifecycle-icon-wrap {
          background: rgba(139, 92, 246, 0.18);
          border-color: rgba(139, 92, 246, 0.35);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
        }

        /* ===== Divider Line ===== */
        .lifecycle-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent);
          margin-bottom: clamp(8px, 1.5vh, 16px);
          flex-shrink: 0;
        }

        /* ===== Title ===== */
        .lifecycle-title {
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: rgba(30, 10, 60, 0.9);
          font-size: clamp(0.55rem, 1vw, 0.9rem);
          line-height: 1.35;
          margin-bottom: clamp(4px, 0.8vh, 10px);
          flex-shrink: 0;
        }

        /* ===== Description ===== */
        .lifecycle-desc {
          font-size: clamp(0.5rem, 0.85vw, 0.8rem);
          color: rgba(60, 30, 90, 0.65);
          line-height: 1.4;
        }

        /* ===== Connector Circle ===== */
        .lifecycle-connector {
          width: clamp(24px, 3vw, 38px);
          height: clamp(24px, 3vw, 38px);
          border-radius: 50%;
          background: rgba(30, 20, 50, 0.8);
          border: 1px solid rgba(139, 92, 246, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 4;
          margin: 0 clamp(-4px, -0.5vw, -8px);
          box-shadow: 0 0 12px rgba(139, 92, 246, 0.15);
        }

        /* ===== Responsive ===== */
        @media (max-width: 900px) {
          .lifecycle-card {
            max-width: clamp(90px, 15vw, 160px);
          }
          .lifecycle-card-inner {
            min-height: clamp(140px, 25vh, 240px);
            padding: clamp(8px, 1.2vw, 16px) clamp(6px, 1vw, 12px);
          }
          .lifecycle-connector {
            width: clamp(18px, 2.5vw, 28px);
            height: clamp(18px, 2.5vw, 28px);
          }
        }

        @media (max-width: 640px) {
          .lifecycle-connector {
            display: none;
          }
          .lifecycle-card {
            max-width: none;
          }
        }

        @media (max-height: 600px) {
          .lifecycle-card-inner {
            min-height: clamp(120px, 22vh, 200px);
            padding: clamp(6px, 1vw, 12px);
          }
        }
      `
        }} />
      
    </section>);

}