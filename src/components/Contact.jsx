import React, { useRef, useState, useEffect } from 'react';
import { personalInfo, recommendations } from '../data/resumeData';

const useVisible = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

const ContactCard = ({ icon, label, value, href, color, delay, visible }) => (
  <a
    href={href}
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel="noopener noreferrer"
    className="group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
    style={{
      background: 'rgba(255,255,255,0.04)',
      backdropFilter: 'blur(20px)',
      borderColor: `${color}20`,
      boxShadow: 'none',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: `all 0.5s ease ${delay}ms`,
    }}
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300 group-hover:scale-110"
      style={{
        background: `${color}15`,
        border: `1px solid ${color}30`,
        boxShadow: `0 0 16px ${color}20`,
      }}
    >
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-white truncate group-hover:text-cyan-400 transition-colors">{value}</p>
    </div>
    <svg
      className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
      fill="none" stroke="currentColor" viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </a>
);

const Contact = () => {
  const { ref: headerRef, visible: headerVisible } = useVisible(0.1);
  const { ref: cardsRef, visible: cardsVisible } = useVisible(0.1);

  const contactItems = [
    {
      icon: '✉️',
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: '#06b6d4',
    },
    {
      icon: '📞',
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
      color: '#a855f7',
    },
    {
      icon: '📍',
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: '#6366f1',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'View LinkedIn Profile',
      href: personalInfo.linkedin,
      color: '#0ea5e9',
    },
  ];

  return (
    <section id="contact" className="section bg-[#070714] relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.6) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-4 relative z-10">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label">Let's Connect</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            Open to Commercial Analyst, Data Analyst, and Business Analyst opportunities in Dublin, Ireland.
            <br />
            <span className="inline-flex items-center gap-1.5 mt-2 text-cyan-400/80">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              {personalInfo.authorisedToWork}
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact cards */}
          <div ref={cardsRef} className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-white mb-2">Contact Details</h3>
            {contactItems.map((item, i) => (
              <ContactCard
                key={item.label}
                {...item}
                delay={i * 100}
                visible={cardsVisible}
              />
            ))}

            {/* Download resume button */}
            <div
              className="mt-2 p-5 rounded-2xl border border-dashed border-cyan-500/25 flex flex-col items-center gap-3 transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/5"
              style={{ background: 'rgba(6,182,212,0.04)' }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-2xl">
                📄
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-white mb-0.5">Download Resume</p>
                <p className="text-xs text-gray-500">Kiruthiga Giridharan · Commercial Analyst</p>
              </div>
              <button
                className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)', boxShadow: '0 4px 20px rgba(6,182,212,0.25)' }}
                onClick={() => window.print()}
              >
                Download PDF
              </button>
            </div>
          </div>

          {/* Right: Profile summary + Footer note */}
          <div className="flex flex-col gap-6">

            {/* Profile card */}
            <div
              className="rounded-2xl p-8 border border-white/[0.08] text-center"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}
            >
              {/* Avatar */}
              <div className="relative inline-flex mb-6">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-black text-white"
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                    boxShadow: '0 0 40px rgba(6,182,212,0.3)',
                  }}
                >
                  KG
                </div>
                <div
                  className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full border-2 border-[#070714] flex items-center justify-center"
                  style={{ background: '#10b981' }}
                >
                  <span className="text-[10px]">✓</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-1">{personalInfo.name}</h3>
              <p className="text-cyan-400 font-semibold mb-2">{personalInfo.title}</p>
              <p className="text-gray-400 text-sm mb-6">{personalInfo.subtitle}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {['Python', 'SQL', 'Power BI', 'Tableau', 'Data Analysis'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 border"
                    style={{ background: 'rgba(6,182,212,0.1)', borderColor: 'rgba(6,182,212,0.25)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-green-400"
                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to Work · Dublin, Ireland
              </div>
            </div>

            {/* Quick stats */}
            <div
              className="rounded-2xl p-6 border border-white/[0.08]"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}
            >
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">At a Glance</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Experience', value: '4.5+ Years', color: '#06b6d4' },
                  { label: 'Current Role', value: 'Commercial Analyst', color: '#a855f7' },
                  { label: 'Location', value: 'Dublin 🇮🇪', color: '#6366f1' },
                  { label: 'Education', value: 'MSc · BEng', color: '#8b5cf6' },
                  { label: 'Key Tools', value: 'Python · SQL', color: '#ec4899' },
                  { label: 'Work Rights', value: 'Authorised ✓', color: '#10b981' },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-0.5">{item.label}</p>
                    <p className="text-[13px] font-bold" style={{ color: item.color }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-gray-600 text-sm">
            Built with{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #06b6d4, #a855f7)' }}>
              React + Tailwind CSS
            </span>
            {' '}· Portfolio of{' '}
            <span className="text-white font-semibold">Kiruthiga Giridharan</span>
          </p>
          <p className="text-gray-700 text-xs mt-1">
            Commercial Analyst · Dublin, Ireland · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
