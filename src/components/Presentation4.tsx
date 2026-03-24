import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  Fragment } from
'react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  HomeIcon,
  NetworkIcon,
  ShieldCheckIcon,
  GlobeIcon,
  GitCompareArrowsIcon,
  MessageSquareTextIcon,
  ClipboardCheckIcon } from
'lucide-react';
const TOTAL_SLIDES = 8;
/* --- Sparkle positions (reused across slides) --- */
const sparkles = [
{
  top: '8%',
  left: '12%',
  cls: 'sparkle-sm',
  delay: '0s'
},
{
  top: '15%',
  left: '78%',
  cls: 'sparkle-md',
  delay: '1.2s'
},
{
  top: '22%',
  left: '45%',
  cls: 'sparkle-sm',
  delay: '0.5s'
},
{
  top: '35%',
  left: '88%',
  cls: 'sparkle-lg',
  delay: '2s'
},
{
  top: '42%',
  left: '5%',
  cls: 'sparkle-sm',
  delay: '0.8s'
},
{
  top: '55%',
  left: '72%',
  cls: 'sparkle-md',
  delay: '1.5s'
},
{
  top: '18%',
  left: '32%',
  cls: 'sparkle-lg',
  delay: '0.3s'
},
{
  top: '65%',
  left: '20%',
  cls: 'sparkle-sm',
  delay: '2.5s'
}];

function Sparkles() {
  return (
    <div className="decorative absolute inset-0 pointer-events-none z-0">
      {sparkles.map((s, i) =>
      <div
        key={i}
        className={`sparkle ${s.cls} animate-sparkle`}
        style={{
          top: s.top,
          left: s.left,
          animationDelay: s.delay
        }} />

      )}
    </div>);

}
function TerrainWave() {
  return <div className="terrain-wave" />;
}
/* --- Vertical data lines for title slide --- */
function DataLines() {
  const lines = [
  {
    left: '10%',
    h: '45%',
    delay: '0s'
  },
  {
    left: '18%',
    h: '55%',
    delay: '0.5s'
  },
  {
    left: '25%',
    h: '35%',
    delay: '1s'
  },
  {
    left: '33%',
    h: '60%',
    delay: '0.3s'
  },
  {
    left: '40%',
    h: '40%',
    delay: '1.5s'
  },
  {
    left: '48%',
    h: '50%',
    delay: '0.8s'
  },
  {
    left: '55%',
    h: '65%',
    delay: '0.2s'
  },
  {
    left: '62%',
    h: '38%',
    delay: '1.2s'
  },
  {
    left: '70%',
    h: '52%',
    delay: '0.6s'
  },
  {
    left: '78%',
    h: '42%',
    delay: '1.8s'
  },
  {
    left: '85%',
    h: '58%',
    delay: '0.4s'
  },
  {
    left: '92%',
    h: '48%',
    delay: '1.1s'
  }];

  return (
    <div className="decorative absolute inset-0 pointer-events-none z-0">
      {lines.map((l, i) =>
      <div
        key={i}
        className="absolute bottom-[30%] animate-data-line"
        style={{
          left: l.left,
          height: l.h,
          animationDelay: l.delay
        }}>

          <div className="w-px h-full bg-gradient-to-t from-transparent via-cyan-400/30 to-cyan-400/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-cyan-400/70 shadow-[0_0_6px_rgba(0,212,255,0.6)]" />
          {i % 3 === 0 &&
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-cyan-400/50 shadow-[0_0_4px_rgba(0,212,255,0.4)]" />
        }
        </div>
      )}
    </div>);

}

interface Presentation4Props {
  onBack: () => void;
}

export function Presentation4({ onBack }: Presentation4Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState<Set<number>>(new Set([0]));
  const isAnimating = useRef(false);

  const navigateToSlide = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(TOTAL_SLIDES - 1, index));
    if (clamped === currentSlide || isAnimating.current) return;
    isAnimating.current = true;
    setCurrentSlide(clamped);
    setVisibleSlides((prev) => {
      const next = new Set(prev);
      next.add(clamped);
      return next;
    });
    setTimeout(() => {
      isAnimating.current = false;
    }, 600);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onBack();
        return;
      }
      const navKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '];
      if (!navKeys.includes(e.key)) return;
      e.preventDefault();
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        navigateToSlide(currentSlide + 1);
      } else {
        navigateToSlide(currentSlide - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, navigateToSlide, onBack]);

  // Mouse wheel navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 10) return;
      if (e.deltaY > 0) navigateToSlide(currentSlide + 1);
      else navigateToSlide(currentSlide - 1);
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlide, navigateToSlide]);

  // Touch swipe navigation
  useEffect(() => {
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < 50) return;
      if (deltaY > 0) navigateToSlide(currentSlide + 1);
      else navigateToSlide(currentSlide - 1);
    };
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSlide, navigateToSlide]);

  const vis = (i: number) => {
    const base = currentSlide === i ? 'slide-active ' : '';
    return base + (visibleSlides.has(i) ? 'slide-visible' : '');
  };
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Logo — top-left on every slide */}
      <img
        src="./afed-logo.svg"
        alt="AFED logo"
        className="fixed top-5 left-5 z-50 h-[clamp(1.5rem,3vw,2.5rem)] w-auto pointer-events-none" />

      {/* Back to Overview Button */}
      <button
        onClick={onBack}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <HomeIcon className="w-4 h-4 text-white" />
        <span className="text-white text-xs font-medium">Overview</span>
      </button>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-0.5 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-400 transition-all duration-500 ease-out"
          style={{
            width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%`,
          }}
        />
      </div>

      {/* Nav Dots */}
      <nav
        className="nav-dots fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2"
        aria-label="Slide navigation">

        {Array.from(
          {
            length: TOTAL_SLIDES
          },
          (_, i) =>
          <button
            key={i}
            onClick={() => navigateToSlide(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === i ? 'bg-amber-400 shadow-[0_0_8px_rgba(212,160,23,0.6)] scale-125' : 'bg-white/20 hover:bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={currentSlide === i ? 'step' : undefined} />


        )}
      </nav>

      {/* Bottom Nav */}
      <button
        onClick={() => navigateToSlide(currentSlide - 1)}
        disabled={currentSlide === 0}
        className="fixed bottom-5 left-5 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full glass-card-strong font-body font-medium text-white transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none hover:bg-white/10"
        style={{
          fontSize: 'var(--small-size)'
        }}
        aria-label="Previous slide">

        <ChevronLeftIcon className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      <div
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full glass-card-strong font-body font-medium tracking-widest text-white/60"
        style={{
          fontSize: 'var(--small-size)'
        }}>

        <span className="text-white">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
        <span className="mx-2">/</span>
        <span>{String(TOTAL_SLIDES).padStart(2, '0')}</span>
      </div>

      <button
        onClick={() => navigateToSlide(currentSlide + 1)}
        disabled={currentSlide === TOTAL_SLIDES - 1}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full glass-card-strong font-body font-medium text-white transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none hover:bg-white/10"
        style={{
          fontSize: 'var(--small-size)'
        }}
        aria-label="Next slide">

        <span className="hidden sm:inline">Next</span>
        <ChevronRightIcon className="w-4 h-4" />
      </button>

      {/* SLIDE 1: TITLE */}
      <section data-slide-index={0} className={`slide4 pink-glow ${vis(0)}`}>
        <DataLines />
        <Sparkles />
        <TerrainWave />

        <div className="slide-content items-start justify-center text-left relative z-10">
          <div
            className="animate-on-enter w-fit max-w-[90vw] rounded-2xl px-[clamp(2rem,5vw,4rem)] py-[clamp(1.5rem,4vw,3rem)] flex flex-col items-start"
            style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow:
              '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12)'
            }}>

            <p
              className="font-body font-semibold uppercase tracking-[0.2em] text-white/60 mb-[var(--element-gap)]"
              style={{
                fontSize: 'var(--small-size)'
              }}>

              AFED Digital
            </p>

            <h1
              className="font-heading font-extrabold text-white mb-[var(--content-gap)] whitespace-nowrap"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)'
              }}>

              EDAFY{' '}
              <span className="text-[#D8B4FE]">Basin Hub and Insights</span>
            </h1>

            <div className="flex items-start gap-[clamp(0.5rem,1.5vw,1rem)]">
              <div
                className="w-[3px] flex-shrink-0 rounded-full self-stretch"
                style={{
                  background: 'var(--accent-gold)'
                }} />

              <p
                className="font-body text-white/70 whitespace-nowrap"
                style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1.5rem)'
                }}>

                AI-Ready Geo-Basin Intelligence for Exploration &amp; Appraisal
                Teams
              </p>
            </div>
          </div>

          <div className="animate-on-enter delay-3 flex flex-wrap items-center gap-[clamp(0.4rem,1vw,0.75rem)] mt-[var(--content-gap)]">
            {[
            'Knowledge Graph',
            'AI-Ready Data',
            'DaMia NL Assistant',
            'OSDU R3 Native'].
            map((label, i, arr) =>
            <Fragment key={label}>
                <span
                className="font-body font-medium whitespace-nowrap"
                style={{
                  fontSize: 'var(--small-size)',
                  color: 'var(--accent-gold)',
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(212,160,23,0.45)',
                  borderRadius: '9999px',
                  padding:
                  'clamp(0.25rem,0.6vw,0.4rem) clamp(0.6rem,1.5vw,1.1rem)'
                }}>

                  {label}
                </span>
                {i < arr.length - 1 &&
              <span
                className="inline-block w-[5px] h-[5px] rounded-full flex-shrink-0"
                style={{
                  background: 'var(--accent-gold)',
                  opacity: 0.6
                }} />

              }
              </Fragment>
            )}
          </div>
        </div>
      </section>

      {/* SLIDE 2: COST OF WRONG DECISIONS */}
      <section data-slide-index={1} className={`slide4 pink-glow ${vis(1)}`}>
        <Sparkles />

        <div className="slide-content relative z-10 max-w-6xl mx-auto w-full">
          <h2
            className="animate-on-enter font-heading font-bold leading-tight mb-[var(--content-gap)]"
            style={{
              fontSize: 'var(--h2-size)'
            }}>

            The cost of a wrong Exploration decision isn't a slow afternoon—It's
            a dry hole and a missed licence round
          </h2>

          <div className="animate-on-enter delay-1 grid grid-cols-5 gap-[clamp(0.3rem,1vw,0.75rem)] mb-[var(--element-gap)]">
            <div className="glass-card-strong rounded-lg p-[clamp(0.4rem,1vw,0.75rem)]">
              <span
                className="font-body text-white/50 block mb-1"
                style={{
                  fontSize: 'var(--small-size)'
                }}>

                01
              </span>
              <p
                className="font-body text-white/90"
                style={{
                  fontSize: 'clamp(0.6rem, 1.1vw, 0.9rem)'
                }}>

                Licence rounds closed before you screen
              </p>
            </div>
            <div className="glass-card-strong rounded-lg p-[clamp(0.4rem,1vw,0.75rem)]">
              <span
                className="font-body text-white/50 block mb-1"
                style={{
                  fontSize: 'var(--small-size)'
                }}>

                02
              </span>
              <p
                className="font-body text-white/90"
                style={{
                  fontSize: 'clamp(0.6rem, 1.1vw, 0.9rem)'
                }}>

                GCoS built on unverifiable assumptions
              </p>
            </div>
            <div className="glass-card-strong rounded-lg p-[clamp(0.4rem,1vw,0.75rem)]">
              <span
                className="font-body text-white/50 block mb-1"
                style={{
                  fontSize: 'var(--small-size)'
                }}>

                03
              </span>
              <p
                className="font-body text-white/90"
                style={{
                  fontSize: 'clamp(0.6rem, 1.1vw, 0.9rem)'
                }}>

                Best analogues never surfaced
              </p>
            </div>
            <div className="glass-card-strong rounded-lg p-[clamp(0.4rem,1vw,0.75rem)]">
              <span
                className="font-body text-white/50 block mb-1"
                style={{
                  fontSize: 'var(--small-size)'
                }}>

                04
              </span>
              <p
                className="font-body text-white/90"
                style={{
                  fontSize: 'clamp(0.6rem, 1.1vw, 0.9rem)'
                }}>

                Institutional knowledge walks out the door
              </p>
            </div>
            <div className="glass-card-strong rounded-lg p-[clamp(0.4rem,1vw,0.75rem)]">
              <span
                className="font-body text-white/50 block mb-1"
                style={{
                  fontSize: 'var(--small-size)'
                }}>

                05
              </span>
              <p
                className="font-body text-white/90"
                style={{
                  fontSize: 'clamp(0.6rem, 1.1vw, 0.9rem)'
                }}>

                No audit trail when a drill decision fails
              </p>
            </div>
          </div>

          <div className="animate-on-enter delay-2 flex justify-around mb-[var(--element-gap)] px-4">
            {[0, 1, 2, 3, 4].map((i) =>
            <div key={i} className="flex flex-col items-center">
                <div className="w-px h-[clamp(12px,2vh,24px)] bg-white/30" />
                <ChevronDownIcon className="w-3 h-3 text-white/40" />
              </div>
            )}
          </div>

          <div className="animate-on-enter delay-3 glass-card-strong rounded-lg p-[clamp(0.5rem,1.5vw,1rem)] text-center flex items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="hidden md:block w-8 h-px bg-white/30" />
              <ChevronRightIcon className="hidden md:block w-4 h-4 text-white/40 rotate-180" />
              <h3
                className="font-heading font-bold"
                style={{
                  fontSize: 'var(--h3-size)'
                }}>

                Capital goes into the wrong basin
              </h3>
              <ChevronRightIcon className="hidden md:block w-4 h-4 text-white/40" />
              <div className="hidden md:block w-8 h-px bg-white/30" />
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 3: DATA ARCHITECTURE PROBLEM */}
      <section data-slide-index={2} className={`slide4 pink-glow ${vis(2)}`}>
        <Sparkles />

        <div className="slide-content relative z-10 max-w-6xl mx-auto w-full">
          <h2
            className="animate-on-enter font-heading font-bold leading-tight mb-2"
            style={{
              fontSize: 'var(--h2-size)'
            }}>

            The Problem Isn't the Geoscientist. It's the Data Architecture
          </h2>

          <p
            className="animate-on-enter delay-1 italic mb-[var(--content-gap)] max-w-4xl"
            style={{
              fontSize: 'var(--body-size)',
              color: 'var(--accent-gold-light)'
            }}>

            "Existing tools were built to store and visualize Oil & Gas data.
            None were built to make that data AI-ready — with the schema,
            ontology, lineage, and metadata that AI actually needs to reason
            correctly"
          </p>

          <div className="animate-on-enter delay-2 grid grid-cols-1 md:grid-cols-3 gap-[var(--content-gap)]">
            <div className="glass-card-strong rounded-xl p-[clamp(0.75rem,2vw,1.5rem)] border border-white/10">
              <h3
                className="font-heading font-bold text-white mb-[var(--element-gap)]"
                style={{
                  fontSize: 'var(--body-size)'
                }}>

                Broken Data Layer
              </h3>
              <div className="space-y-[var(--element-gap)]">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 rounded-full bg-orange-500 flex-shrink-0" />
                  <span
                    className="font-body"
                    style={{
                      fontSize: 'var(--body-size)',
                      color: 'var(--accent-orange-light)'
                    }}>

                    No OSDU schema
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 rounded-full bg-orange-500 flex-shrink-0" />
                  <span
                    className="font-body"
                    style={{
                      fontSize: 'var(--body-size)',
                      color: 'var(--accent-orange-light)'
                    }}>

                    Missing metadata
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 rounded-full bg-orange-500 flex-shrink-0" />
                  <span
                    className="font-body"
                    style={{
                      fontSize: 'var(--body-size)',
                      color: 'var(--accent-orange-light)'
                    }}>

                    Zero lineage
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-card-strong rounded-xl p-[clamp(0.75rem,2vw,1.5rem)] border border-white/10">
              <h3
                className="font-heading font-bold text-white mb-[var(--element-gap)]"
                style={{
                  fontSize: 'var(--body-size)'
                }}>

                Disconnected Knowledge
              </h3>
              <div className="space-y-[var(--element-gap)]">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 rounded-full bg-orange-500 flex-shrink-0" />
                  <span
                    className="font-body"
                    style={{
                      fontSize: 'var(--body-size)',
                      color: 'var(--accent-orange-light)'
                    }}>

                    No entity relationships
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 rounded-full bg-orange-500 flex-shrink-0" />
                  <span
                    className="font-body"
                    style={{
                      fontSize: 'var(--body-size)',
                      color: 'var(--accent-orange-light)'
                    }}>

                    No analogue intelligence
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 rounded-full bg-orange-500 flex-shrink-0" />
                  <span
                    className="font-body"
                    style={{
                      fontSize: 'var(--body-size)',
                      color: 'var(--accent-orange-light)'
                    }}>

                    No semantic reasoning
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-card-strong rounded-xl p-[clamp(0.75rem,2vw,1.5rem)] border border-white/10">
              <h3
                className="font-heading font-bold text-white mb-[var(--element-gap)]"
                style={{
                  fontSize: 'var(--body-size)'
                }}>

                AI Without Context
              </h3>
              <div className="space-y-[var(--element-gap)]">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 rounded-full bg-white/30 flex-shrink-0" />
                  <span
                    className="font-body text-[#C8B8E8]"
                    style={{
                      fontSize: 'var(--body-size)'
                    }}>

                    Generic LLMs fail
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 rounded-full bg-white/30 flex-shrink-0" />
                  <span
                    className="font-body"
                    style={{
                      fontSize: 'var(--body-size)',
                      color: 'var(--text-secondary)'
                    }}>

                    No domain grounding
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 rounded-full bg-white/30 flex-shrink-0" />
                  <span
                    className="font-body"
                    style={{
                      fontSize: 'var(--body-size)',
                      color: 'var(--text-secondary)'
                    }}>

                    No trust mechanism
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="animate-on-enter delay-3 mt-[var(--content-gap)] w-full rounded-xl py-[clamp(0.6rem,1.5vw,1rem)] px-[clamp(1rem,3vw,2rem)] text-center"
            style={{
              background:
              'linear-gradient(135deg, rgba(139,92,246,0.5) 0%, rgba(168,85,247,0.4) 50%, rgba(139,92,246,0.5) 100%)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(168,85,247,0.3)'
            }}>

            <p
              className="font-body font-medium text-white"
              style={{
                fontSize: 'var(--body-size)'
              }}>

              What the industry needs is not another data viewer — it needs a
              platform that makes{' '}
              <span className="font-semibold text-[#F0C140]">E&A data</span>{' '}
              think.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 4: WHY AI FAILS */}
      <section data-slide-index={3} className={`slide4 pink-glow ${vis(3)}`}>
        <Sparkles />

        <div className="slide-content relative z-10 max-w-6xl mx-auto w-full">
          <h2
            className="animate-on-enter font-heading font-bold leading-tight mb-2"
            style={{
              fontSize: 'var(--h2-size)'
            }}>

            Why AI Fails to Deliver in Exploration & Appraisal Today?
          </h2>

          <p
            className="animate-on-enter delay-1 italic mb-[var(--content-gap)]"
            style={{
              fontSize: 'var(--body-size)',
              color: 'var(--accent-gold-light)'
            }}>

            "The data exists — but it's buried, unlabelled, and AI can't trust
            it."
          </p>

          <div className="animate-on-enter delay-2 grid grid-cols-1 md:grid-cols-2 gap-[var(--element-gap)]">
            <div className="glass-card rounded-xl p-[clamp(0.6rem,1.5vw,1.25rem)]">
              <div className="flex items-center justify-between mb-2">
                <h3
                  className="font-heading font-bold text-white"
                  style={{
                    fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)'
                  }}>

                  Unlabelled & Orphaned Data
                </h3>
                <span
                  className="font-body font-semibold uppercase tracking-wider"
                  style={{
                    fontSize: 'clamp(0.5rem, 0.8vw, 0.7rem)',
                    color: 'var(--accent-gold)'
                  }}>

                  DATA QUALITY
                </span>
              </div>
              <p
                className="font-body"
                style={{
                  fontSize: 'var(--small-size)',
                  color: 'var(--text-secondary)'
                }}>

                Well logs, seismic, and core data stored without consistent
                metadata — AI tools return wrong answers or refuse to answer.
              </p>
            </div>

            <div className="glass-card rounded-xl p-[clamp(0.6rem,1.5vw,1.25rem)]">
              <div className="flex items-center justify-between mb-2">
                <h3
                  className="font-heading font-bold text-white"
                  style={{
                    fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)'
                  }}>

                  No Lineage Tracking
                </h3>
                <span
                  className="font-body font-semibold uppercase tracking-wider text-[#F0C140]"
                  style={{
                    fontSize: 'clamp(0.5rem, 0.8vw, 0.7rem)'
                  }}>

                  AUDITABILITY
                </span>
              </div>
              <p
                className="font-body"
                style={{
                  fontSize: 'var(--small-size)',
                  color: 'var(--text-secondary)'
                }}>

                Geoscientists can't trace where a parameter value came from —
                which vintage, which interpreter, which processing run.
              </p>
            </div>

            <div className="glass-card rounded-xl p-[clamp(0.6rem,1.5vw,1.25rem)]">
              <div className="flex items-center justify-between mb-2">
                <h3
                  className="font-heading font-bold text-white"
                  style={{
                    fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)'
                  }}>

                  Schema Fragmentation
                </h3>
                <span
                  className="font-body font-semibold uppercase tracking-wider"
                  style={{
                    fontSize: 'clamp(0.5rem, 0.8vw, 0.7rem)',
                    color: 'var(--accent-gold)'
                  }}>

                  INTEROPERABILITY
                </span>
              </div>
              <p
                className="font-body"
                style={{
                  fontSize: 'var(--small-size)',
                  color: 'var(--text-secondary)'
                }}>

                Legacy PPDM, in-house schemas, and unstructured files mean no
                single AI model can reliably ingest E&A data.
              </p>
            </div>

            <div className="glass-card rounded-xl p-[clamp(0.6rem,1.5vw,1.25rem)]">
              <div className="flex items-center justify-between mb-2">
                <h3
                  className="font-heading font-bold text-white"
                  style={{
                    fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)'
                  }}>

                  Weeks to Prep, Minutes to Decide
                </h3>
                <span
                  className="font-body font-semibold uppercase tracking-wider text-[#F0C140]"
                  style={{
                    fontSize: 'clamp(0.5rem, 0.8vw, 0.7rem)'
                  }}>

                  EFFICIENCY
                </span>
              </div>
              <p
                className="font-body"
                style={{
                  fontSize: 'var(--small-size)',
                  color: 'var(--text-secondary)'
                }}>

                Teams spend 60–70% of project time cleaning and reconciling data
                before any analysis begins — before any AI is even considered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 5: INTRODUCING EDAFY */}
      <section data-slide-index={4} className={`slide4 pink-glow ${vis(4)}`}>
        <Sparkles />

        <div className="slide-content items-center text-center relative z-10">
          <p
            className="animate-on-enter font-heading font-bold uppercase tracking-[0.25em] gold-glow-strong mb-2"
            style={{
              fontSize: 'var(--body-size)',
              color: 'var(--accent-gold)'
            }}>

            INTRODUCING
          </p>

          <h2
            className="animate-on-enter delay-1 font-heading font-extrabold mb-[var(--element-gap)]"
            style={{
              fontSize: 'var(--title-size)'
            }}>

            EDAFY Basin Insights
          </h2>

          <div className="animate-on-enter delay-2 glass-card rounded-lg px-[clamp(1rem,3vw,2rem)] py-[clamp(0.5rem,1.5vw,1rem)] mb-[var(--content-gap)] max-w-4xl">
            <p
              className="font-body"
              style={{
                fontSize: 'var(--body-size)',
                color: 'var(--text-secondary)'
              }}>

              The platform that turns your data from an archive into an AI-ready
              intelligence system. Your team makes faster, better, more
              confident decisions.
            </p>
          </div>

          <div className="animate-on-enter delay-3 grid grid-cols-1 md:grid-cols-3 gap-[var(--element-gap)] w-full max-w-5xl">
            <div className="glass-card-strong rounded-xl p-[clamp(0.6rem,1.5vw,1.25rem)] text-center">
              <h3
                className="font-heading font-bold mb-1"
                style={{
                  fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
                  color: 'var(--accent-gold)'
                }}>

                Data you can Trust
              </h3>
              <p
                className="font-body font-semibold text-white mb-1"
                style={{
                  fontSize: 'var(--small-size)'
                }}>

                AI-Ready Data Foundation
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: 'clamp(0.6rem, 0.95vw, 0.8rem)',
                  color: 'var(--text-secondary)'
                }}>

                OSDU-native schema, complete lineage, AI-curated metadata — your
                data becomes trustworthy at the architecture level.
              </p>
            </div>

            <div className="glass-card-strong rounded-xl p-[clamp(0.6rem,1.5vw,1.25rem)] text-center">
              <h3
                className="font-heading font-bold mb-1"
                style={{
                  fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
                  color: 'var(--accent-gold)'
                }}>

                Connected Knowledge
              </h3>
              <p
                className="font-body font-semibold text-white mb-1"
                style={{
                  fontSize: 'var(--small-size)'
                }}>

                Knowledge Graph Intelligence
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: 'clamp(0.6rem, 0.95vw, 0.8rem)',
                  color: 'var(--text-secondary)'
                }}>

                120+ subsurface entity types connected by semantic relationships
                — so your data can reason like an expert geoscientist.
              </p>
            </div>

            <div className="glass-card-strong rounded-xl p-[clamp(0.6rem,1.5vw,1.25rem)] text-center">
              <h3
                className="font-heading font-bold mb-1"
                style={{
                  fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
                  color: 'var(--accent-gold)'
                }}>

                Information on your Fingertips
              </h3>
              <p
                className="font-body font-semibold text-white mb-1"
                style={{
                  fontSize: 'var(--small-size)'
                }}>

                eMonk AI — Answers in Seconds
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: 'clamp(0.6rem, 0.95vw, 0.8rem)',
                  color: 'var(--text-secondary)'
                }}>

                The AI assistant grounded in your live geo-data. Ask in plain
                English. Get citable, lineage-stamped answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 6: EXPLORE SMARTER */}
      <section data-slide-index={5} className={`slide4 pink-glow ${vis(5)}`}>
        <Sparkles />

        <div className="slide-content relative z-10 w-full">
          <div className="flex flex-col lg:flex-row gap-[var(--content-gap)] h-full">
            <div className="flex-1 flex flex-col justify-center">
              <h2
                className="animate-on-enter font-heading font-bold italic leading-tight mb-[var(--content-gap)]"
                style={{
                  fontSize: 'var(--h2-size)',
                  color: 'var(--accent-gold)'
                }}>

                Explore Smarter.
                <br />
                Decide Faster.
              </h2>

              <h3
                className="animate-on-enter delay-1 font-heading font-extrabold text-white leading-[1.1] mb-[var(--content-gap)]"
                style={{
                  fontSize: 'clamp(1.25rem, 3.5vw, 2.75rem)'
                }}>

                Algorithm-driven
                <br />
                intelligence
                <br />
                for the teams that
                <br />
                want to win.
              </h3>

              <p
                className="animate-on-enter delay-2 font-body max-w-2xl"
                style={{
                  fontSize: 'var(--body-size)',
                  color: 'var(--text-secondary)'
                }}>

                EDAFY Basin Hub & AI applies AI to basin-scale subsurface
                knowledge, enabling automated analogue discovery, play fairway
                mapping, and prospect risking within an OSDU-native exploration
                intelligence platform.
              </p>
            </div>

            {/* Knowledge Graph Diagram */}
            <div className="animate-on-enter delay-2 flex-1 flex items-center justify-center">
              <div
                className="relative w-full"
                style={{
                  height: 'min(55vh, 500px)'
                }}>

                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-0"
                  viewBox="0 0 500 400"
                  preserveAspectRatio="xMidYMid meet">

                  {[
                  [250, 200, 80, 50],
                  [250, 200, 180, 40],
                  [250, 200, 350, 35],
                  [250, 200, 440, 60],
                  [250, 200, 60, 140],
                  [250, 200, 420, 130],
                  [250, 200, 450, 200],
                  [250, 200, 60, 260],
                  [250, 200, 140, 310],
                  [250, 200, 350, 300],
                  [250, 200, 440, 280],
                  [250, 200, 250, 370],
                  [250, 200, 140, 160],
                  [250, 200, 380, 170],
                  [250, 200, 100, 370],
                  [250, 200, 400, 360]].
                  map(([x1, y1, x2, y2], i) =>
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="rgba(0,212,255,0.25)"
                    strokeWidth="1"
                    strokeDasharray={i % 3 === 0 ? '4 3' : 'none'} />

                  )}
                </svg>

                {/* Center hub */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div
                    className="w-[clamp(50px,8vw,80px)] h-[clamp(50px,8vw,80px)] rounded-full flex items-center justify-center"
                    style={{
                      background:
                      'radial-gradient(circle, rgba(0,180,180,0.9) 0%, rgba(0,120,120,0.7) 60%, transparent 100%)',
                      boxShadow:
                      '0 0 30px rgba(0,212,255,0.4), 0 0 60px rgba(0,212,255,0.15)'
                    }}>

                    <div className="w-[60%] h-[60%] rounded-full bg-white/20 border border-white/30" />
                  </div>
                  <p
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-body text-white/80 font-semibold"
                    style={{
                      fontSize: 'clamp(0.45rem, 0.8vw, 0.65rem)'
                    }}>

                    Zagros Fold Belt
                  </p>
                </div>

                {/* Outer nodes */}
                {[
                {
                  x: '16%',
                  y: '12%',
                  color: '#22c55e',
                  label: 'Zagros Anticline',
                  size: 12
                },
                {
                  x: '36%',
                  y: '8%',
                  color: '#f97316',
                  label: 'Kashdumi Fm.',
                  size: 10
                },
                {
                  x: '70%',
                  y: '7%',
                  color: '#ef4444',
                  label: 'Hormuz Salt',
                  size: 11
                },
                {
                  x: '88%',
                  y: '14%',
                  color: '#a855f7',
                  label: 'Heat Flow',
                  size: 9
                },
                {
                  x: '12%',
                  y: '34%',
                  color: '#3b82f6',
                  label: 'Asmari Play',
                  size: 10
                },
                {
                  x: '84%',
                  y: '32%',
                  color: '#22c55e',
                  label: 'Sarvak Seq.',
                  size: 11
                },
                {
                  x: '90%',
                  y: '50%',
                  color: '#f59e0b',
                  label: 'Bangestan Thr.',
                  size: 9
                },
                {
                  x: '12%',
                  y: '65%',
                  color: '#ec4899',
                  label: 'Carbonate',
                  size: 10
                },
                {
                  x: '28%',
                  y: '78%',
                  color: '#8b5cf6',
                  label: 'Oil Kitchen',
                  size: 12
                },
                {
                  x: '70%',
                  y: '75%',
                  color: '#06b6d4',
                  label: 'Tethyan Grp.',
                  size: 10
                },
                {
                  x: '88%',
                  y: '70%',
                  color: '#ef4444',
                  label: 'Pabdeh Shale',
                  size: 9
                },
                {
                  x: '50%',
                  y: '92%',
                  color: '#22c55e',
                  label: 'Prospect Alpha',
                  size: 11
                },
                {
                  x: '28%',
                  y: '40%',
                  color: '#f97316',
                  label: 'Shiranish',
                  size: 8
                },
                {
                  x: '76%',
                  y: '42%',
                  color: '#3b82f6',
                  label: 'Asmari Ant.',
                  size: 10
                },
                {
                  x: '20%',
                  y: '92%',
                  color: '#a855f7',
                  label: 'Shallow Ma.',
                  size: 9
                },
                {
                  x: '80%',
                  y: '90%',
                  color: '#f59e0b',
                  label: 'Overburden',
                  size: 10
                }].
                map((node, i) =>
                <div
                  key={i}
                  className="absolute z-10 group"
                  style={{
                    left: node.x,
                    top: node.y,
                    transform: 'translate(-50%, -50%)'
                  }}>

                    <div
                    className="rounded-full animate-pulse-glow"
                    style={{
                      width: `${node.size}px`,
                      height: `${node.size}px`,
                      background: node.color,
                      boxShadow: `0 0 8px ${node.color}80, 0 0 16px ${node.color}30`,
                      animationDelay: `${i * 0.3}s`
                    }} />

                    <p
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0.5 whitespace-nowrap font-body text-white/60 opacity-80 group-hover:text-white group-hover:opacity-100 transition-all"
                    style={{
                      fontSize: 'clamp(0.35rem, 0.65vw, 0.55rem)'
                    }}>

                      {node.label}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom 5 cards */}
          <div className="animate-on-enter delay-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[var(--element-gap)] mb-[clamp(2.5rem,5vh,4rem)]">
            <div className="glass-card-strong rounded-xl p-[clamp(0.4rem,1vw,0.75rem)] text-center">
              <p
                className="font-body font-semibold text-white"
                style={{
                  fontSize: 'var(--small-size)'
                }}>

                Faster analogue discovery
              </p>
            </div>
            <div className="glass-card-strong rounded-xl p-[clamp(0.4rem,1vw,0.75rem)] text-center">
              <p
                className="font-body font-semibold text-white"
                style={{
                  fontSize: 'var(--small-size)'
                }}>

                Tools replaced by one AI platform
              </p>
            </div>
            <div className="glass-card-strong rounded-xl p-[clamp(0.4rem,1vw,0.75rem)] text-center">
              <p
                className="font-body font-semibold text-white"
                style={{
                  fontSize: 'var(--small-size)'
                }}>

                AI-ready, OSDU & auditable
              </p>
            </div>
            <div className="glass-card-strong rounded-xl p-[clamp(0.4rem,1vw,0.75rem)] text-center">
              <p
                className="font-body font-semibold text-white"
                style={{
                  fontSize: 'var(--small-size)'
                }}>

                AI-informed probabilistic risk
              </p>
            </div>
            <div className="glass-card-strong rounded-xl p-[clamp(0.4rem,1vw,0.75rem)] text-center">
              <p
                className="font-body font-semibold text-white"
                style={{
                  fontSize: 'var(--small-size)'
                }}>

                eMonk AI by DaMia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 7: LET'S BUILD YOUR PLATFORM */}
      <section data-slide-index={6} className={`slide4 pink-glow ${vis(6)}`}>
        <Sparkles />

        <div className="slide-content items-center justify-center text-center relative z-10">
          <p
            className="animate-on-enter font-body uppercase tracking-[0.25em] font-semibold mb-[var(--content-gap)]"
            style={{
              fontSize: 'var(--small-size)',
              color: 'var(--accent-gold)'
            }}>

            READY TO BRING AI TO YOUR Exploration & Appraisal Workflows?
          </p>

          <h2
            className="animate-on-enter delay-1 font-heading font-extrabold text-white leading-[1.1] mb-[var(--content-gap)] max-w-5xl"
            style={{
              fontSize: 'var(--title-size)'
            }}>

            Let's Build Your
            <br />
            Basin Intelligence Platform
          </h2>

          <div className="animate-on-enter delay-2 flex flex-wrap items-center justify-center gap-x-[clamp(0.75rem,2vw,1.5rem)] gap-y-2">
            {['Knowledge Graph', 'OSDU R3 Native', 'Bayesian GCoS', 'DaMia AI', 'Complete Lineage'].map((label, i, arr) =>
              <Fragment key={label}>
                <span
                  className="font-body italic"
                  style={{
                    fontSize: 'var(--body-size)',
                    color: 'var(--accent-gold)'
                  }}>
                  {label}
                </span>
                {i < arr.length - 1 &&
                  <span
                    className="text-white/40"
                    style={{
                      fontSize: 'var(--body-size)'
                    }}>
                    ·
                  </span>
                }
              </Fragment>
            )}
          </div>
        </div>
      </section>

      {/* SLIDE 8: LIVE DEMO CTA */}
      <section data-slide-index={7} className={`slide4 pink-glow ${vis(7)}`}>
        <Sparkles />

        <div className="slide-content items-center text-center relative z-10">
          <h2
            className="animate-on-enter font-heading font-extrabold text-white leading-[1.1] mb-[var(--content-gap)]"
            style={{
              fontSize: 'var(--h2-size)'
            }}>

            EDAFY Basin Hub & Insights
          </h2>

          <a
            href="https://insights.edafylabs.com/#portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-on-enter delay-1 block relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            style={{
              maxWidth: 'min(90vw, 800px)',
              boxShadow:
              '0 0 40px rgba(139, 92, 246, 0.3), 0 8px 32px rgba(0,0,0,0.3)'
            }}>

            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
              style={{
                boxShadow:
                '0 0 60px rgba(139, 92, 246, 0.5), 0 0 120px rgba(139, 92, 246, 0.2), inset 0 0 60px rgba(139, 92, 246, 0.1)'
              }} />

            <img
              src="./Gemini_Generated_Image_2ot4uf2ot4uf2ot4.jpg"
              alt="EDAFY Basin Hub & Insights - 3D subsurface intelligence visualization with seismic data, well logs, and reservoir simulation"
              className="w-full h-auto rounded-2xl border border-white/20 group-hover:border-purple-400/50 transition-all duration-500"
              style={{
                maxHeight: 'min(60vh, 550px)',
                objectFit: 'contain'
              }} />

          </a>

          <a
            href="https://insights.edafylabs.com/#portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-on-enter delay-2 mt-[var(--content-gap)] inline-flex items-center gap-3 px-8 py-3 rounded-xl font-body font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              fontSize: 'var(--body-size)',
              background:
              'linear-gradient(135deg, rgba(6,182,212,0.8), rgba(139,92,246,0.8))',
              boxShadow: '0 4px 24px rgba(6,182,212,0.3)'
            }}>

            Click on the picture to view our live demo
            <ChevronRightIcon className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>);

}
