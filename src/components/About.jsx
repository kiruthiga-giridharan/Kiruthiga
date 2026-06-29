import React, { useRef, useState, useEffect } from 'react';
import { personalInfo, recommendations } from '../data/resumeData';

// Intersection observer hook
const useVisible = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
};

const timelineEvents = [
  {
    year: '2016 – 2020',
    type: 'education',
    title: 'Bachelor of Engineering',
    subtitle: 'Anna University · Chennai, India',
    detail: 'CGPA 8.2/10 · First Class · Best Outgoing Student 2020',
    color: '#a855f7',
    icon: '🎓',
    delay: 0,
  },
  {
    year: '2020 – 2022',
    type: 'work',
    title: 'Systems Analyst',
    subtitle: 'Tata Consultancy Services · Chennai, India',
    detail: '100+ SQL queries · 100% data accuracy · 15+ banking releases · Top Performer FY2021',
    color: '#8b5cf6',
    icon: '💼',
    delay: 150,
  },
  {
    year: '2022 – 2023',
    type: 'education',
    title: 'MSc in Management',
    subtitle: 'Trinity College Dublin · Dublin, Ireland',
    detail: 'Statistical Modelling, Enterprise Risk & Analytics · Research on Data-Driven Decision Frameworks',
    color: '#06b6d4',
    icon: '🎓',
    delay: 300,
  },
  {
    year: '2022 – 2024',
    type: 'work',
    title: 'Commercial Analyst',
    subtitle: 'Estee Lauder Companies · Dublin, Ireland',
    detail: '20%+ conversion uplift · 15% procurement cost cut · 5+ product launches/yr',
    color: '#ec4899',
    icon: '💼',
    delay: 450,
  },
  {
    year: '2024 – Present',
    type: 'work',
    title: 'Commercial & Operations Analyst',
    subtitle: 'Circana Market Research · Dublin, Ireland',
    detail: '200+ client EMEA portfolio · 25% fewer recurring errors · 20% less manual reporting',
    color: '#06b6d4',
    icon: '🚀',
    delay: 600,
  },
];

const TimelineItem = ({ event, index }) => {
  const { ref, visible } = useVisible();
  const isWork = event.type === 'work';

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 pb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
      style={{ transitionDelay: `${event.delay}ms` }}
    >
      {/* Left: Year + Line */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: 80 }}>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-lg flex-shrink-0 z-10"
          style={{
            background: `linear-gradient(135deg, ${event.color}30, ${event.color}15)`,
            border: `2px solid ${event.color}50`,
            boxShadow: `0 0 16px ${event.color}30`,
          }}
        >
          {event.icon}
        </div>
        {index < timelineEvents.length - 1 && (
          <div
            className="w-0.5 flex-1 mt-2 min-h-[40px]"
            style={{ background: `linear-gradient(to bottom, ${event.color}60, rgba(255,255,255,0.05))` }}
          />
        )}
      </div>

      {/* Right: Content */}
      <div className="flex-1 pb-2">
        <div
          className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold mb-3"
          style={{
            background: `${event.color}18`,
            color: event.color,
            border: `1px solid ${event.color}30`,
          }}
        >
          {event.year} · {isWork ? 'Work Experience' : 'Education'}
        </div>

        <div
          className="rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-0.5 card-glow cursor-default"
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(20px)',
            borderColor: `${event.color}25`,
          }}
        >
          <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
          <p className="text-sm font-medium mb-3" style={{ color: event.color }}>{event.subtitle}</p>
          <p className="text-sm text-gray-400 leading-relaxed">{event.detail}</p>

          {/* Type badge */}
          <div className="flex items-center gap-2 mt-3">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: event.color }} />
            <span className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">
              {isWork ? 'Professional' : 'Academic'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const { ref: headerRef, visible: headerVisible } = useVisible();

  return (
    <section id="about" className="section bg-[#070714]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label">Career Journey</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            {personalInfo.summary.split('.').slice(0, 2).join('.') + '.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Timeline */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-sm">📅</span>
              Career Timeline
            </h3>
            {timelineEvents.map((event, i) => (
              <TimelineItem key={event.year + event.title} event={event} index={i} />
            ))}
          </div>

          {/* Right: Summary + Recommendations */}
          <div className="flex flex-col gap-8">

            {/* Quick facts */}
            <div
              className="rounded-2xl p-6 border border-white/[0.08]"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}
            >
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span>⚡</span> Quick Facts
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Location', value: 'Dublin, Ireland', icon: '📍' },
                  { label: 'Work Rights', value: 'Authorised in Ireland', icon: '✅' },
                  { label: 'Experience', value: '4.5+ Years', icon: '📊' },
                  { label: 'Education', value: 'MSc + BEng', icon: '🎓' },
                  { label: 'Companies', value: '3 Major Firms', icon: '🏢' },
                  { label: 'Specialisation', value: 'Commercial & BI', icon: '🔍' },
                ].map((fact, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-base mt-0.5">{fact.icon}</span>
                    <div>
                      <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wide mb-0.5">{fact.label}</p>
                      <p className="text-sm font-semibold text-white">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div>
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span>💬</span> Professional Recommendations
              </h3>
              <div className="flex flex-col gap-4">
                {recommendations.map((rec, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      backdropFilter: 'blur(20px)',
                      borderColor: `${rec.color}25`,
                    }}
                  >
                    <p className="text-sm text-gray-300 leading-relaxed italic mb-4">{rec.text}</p>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                        style={{ background: `linear-gradient(135deg, ${rec.color}, ${rec.color}80)` }}
                      >
                        {rec.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{rec.name}</p>
                        <p className="text-[11px] text-gray-400">{rec.role} · {rec.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <p className="text-xs text-gray-500 text-center italic">Full recommendations available on LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
