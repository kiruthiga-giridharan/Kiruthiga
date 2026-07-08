import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, heroStats } from '../data/resumeData';

// Deterministic particle positions
const PARTICLES = [
  { id: 0, x: 8, y: 15, size: 3, dur: 14, del: 0, opacity: 0.5 },
  { id: 1, x: 23, y: 72, size: 2, dur: 18, del: 2.1, opacity: 0.3 },
  { id: 2, x: 47, y: 33, size: 4, dur: 11, del: 1.0, opacity: 0.6 },
  { id: 3, x: 62, y: 82, size: 2, dur: 20, del: 3.5, opacity: 0.4 },
  { id: 4, x: 78, y: 18, size: 3, dur: 16, del: 0.5, opacity: 0.5 },
  { id: 5, x: 91, y: 58, size: 4, dur: 13, del: 4.0, opacity: 0.35 },
  { id: 6, x: 15, y: 88, size: 2, dur: 22, del: 1.5, opacity: 0.45 },
  { id: 7, x: 38, y: 47, size: 3, dur: 17, del: 2.5, opacity: 0.6 },
  { id: 8, x: 54, y: 8, size: 2, dur: 15, del: 3.0, opacity: 0.3 },
  { id: 9, x: 72, y: 42, size: 4, dur: 19, del: 0.8, opacity: 0.5 },
  { id: 10, x: 5, y: 52, size: 3, dur: 21, del: 1.2, opacity: 0.4 },
  { id: 11, x: 49, y: 93, size: 2, dur: 14, del: 2.0, opacity: 0.35 },
  { id: 12, x: 68, y: 68, size: 3, dur: 12, del: 4.2, opacity: 0.55 },
  { id: 13, x: 32, y: 28, size: 4, dur: 23, del: 0.5, opacity: 0.3 },
  { id: 14, x: 85, y: 87, size: 2, dur: 16, del: 3.1, opacity: 0.45 },
  { id: 15, x: 18, y: 40, size: 3, dur: 18, del: 1.5, opacity: 0.6 },
  { id: 16, x: 58, y: 55, size: 2, dur: 20, del: 2.3, opacity: 0.4 },
  { id: 17, x: 88, y: 32, size: 4, dur: 15, del: 0.0, opacity: 0.35 },
  { id: 18, x: 42, y: 78, size: 3, dur: 17, del: 3.0, opacity: 0.5 },
  { id: 19, x: 76, y: 5, size: 2, dur: 13, del: 1.0, opacity: 0.45 },
  { id: 20, x: 28, y: 62, size: 3, dur: 25, del: 0.7, opacity: 0.3 },
  { id: 21, x: 93, y: 20, size: 2, dur: 19, del: 3.8, opacity: 0.6 },
  { id: 22, x: 11, y: 76, size: 4, dur: 16, del: 2.8, opacity: 0.35 },
];

// Icons
const icons = {
  clock: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2"/>
    </svg>
  ),
  building: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>
  ),
  database: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  ),
};

// Animated count-up component
const CountUp = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const totalFrames = Math.round(duration / 16);
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * eased));
      if (frame >= totalFrames) { clearInterval(timer); setCount(end); }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030d1a]">

      {/* ─── Animated grid ─── */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14,165,233,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.5) 1px, transparent 1px)`,
          backgroundSize: '70px 70px',
        }}
      />

      {/* Scan line */}
      <div className="scan-line" />

      {/* ─── Gradient orbs ─── */}
      <div
        className="absolute top-[10%] left-[5%] w-[700px] h-[700px] rounded-full pointer-events-none orb-drift"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 65%)', filter: 'blur(20px)' }}
      />
      <div
        className="absolute bottom-[5%] right-[5%] w-[600px] h-[600px] rounded-full pointer-events-none orb-drift-reverse"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 65%)', filter: 'blur(20px)' }}
      />
      <div
        className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,1) 0%, transparent 60%)', filter: 'blur(60px)' }}
      />

      {/* ─── Floating particles ─── */}
      {PARTICLES.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.id % 3 === 0
              ? `rgba(99, 102, 241, ${p.opacity})`
              : `rgba(14, 165, 233, ${p.opacity})`,
            boxShadow: `0 0 ${p.size * 3}px ${p.id % 3 === 0 ? 'rgba(79,70,229,0.6)' : 'rgba(14,165,233,0.6)'}`,
            animation: `float ${p.dur}s ease-in-out ${p.del}s infinite, twinkle ${p.dur * 0.7}s ease-in-out ${p.del * 0.5}s infinite`,
          }}
        />
      ))}

      {/* ─── Hero content ─── */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full">

        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-500/25 bg-gold-500/8 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ background: 'rgba(14,165,233,0.08)' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" style={{ animation: 'ping-slow 2s ease-out infinite' }} />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
          </span>
          Available for Opportunities · Dublin, Ireland
        </div>

        {/* Name */}
        <h1
          className={`font-black leading-none mb-5 transition-all duration-1000 delay-[150ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span
            className="block text-[clamp(3.5rem,12vw,8rem)] text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, #38bdf8 0%, #a5b4fc 50%, #a5b4fc 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 4s ease infinite',
            }}
          >
            KIRUTHIGA
          </span>
          <span className="block text-[clamp(3.5rem,12vw,8rem)] text-white">
            GIRIDHARAN
          </span>
        </h1>

        {/* Title divider */}
        <div
          className={`flex items-center justify-center gap-4 mb-5 transition-all duration-1000 delay-[250ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/70" />
          <p className="text-lg sm:text-xl text-gray-300 font-light tracking-[0.3em] uppercase">
            Data & Operations Analyst
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-nav-400/70" />
        </div>

        {/* Tech tags */}
        <p
          className={`text-sm sm:text-base text-gold-400/75 font-medium tracking-widest mb-5 transition-all duration-1000 delay-[350ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          SQL &nbsp;&bull;&nbsp; Azure Pipeline &nbsp;&bull;&nbsp; Power BI &amp; DAX &nbsp;&bull;&nbsp; Tableau &nbsp;&bull;&nbsp; Financial Systems &nbsp;&bull;&nbsp; Python
        </p>

        {/* Summary */}
        <p
          className={`text-gray-400 max-w-2xl mx-auto mb-14 text-[0.95rem] leading-relaxed transition-all duration-1000 delay-[450ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          5+ years transforming complex datasets into actionable insights across enterprise, banking, and commercial environments. Delivering 100% accuracy and on-time analytical reporting at scale.
        </p>

        {/* KPI Stats */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14 transition-all duration-1000 delay-[600ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {heroStats.map((stat, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-5 border border-white/[0.08] card-glow transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}
            >
              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gold-400/50 group-hover:bg-gold-400 transition-colors" />

              <div className="flex items-center gap-2 mb-2 text-gold-400/60 group-hover:text-gold-400 transition-colors">
                {icons[stat.icon]}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text mb-1"
                style={{ backgroundImage: 'linear-gradient(135deg, #38bdf8, #4f46e5)' }}>
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[11px] text-gray-400 font-medium tracking-wide uppercase">{stat.label}</div>

              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-500/5 to-nav-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-[800ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-gold-500/20"
            style={{ background: 'linear-gradient(135deg, #0ea5e9, #4f46e5)' }}
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl font-semibold text-white border border-white/15 hover:border-white/35 hover:bg-white/5 hover:scale-105 active:scale-95 transition-all duration-200"
            style={{ backdropFilter: 'blur(12px)', background: 'rgba(255,255,255,0.04)' }}
          >
            View My Work ↓
          </button>
        </div>
      </div>

      {/* ─── Scroll indicator ─── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center pt-1.5">
          <div
            className="w-1 h-2 rounded-full bg-gold-400"
            style={{ animation: 'float 2s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
