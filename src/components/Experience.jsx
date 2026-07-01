import React, { useRef, useState, useEffect } from 'react';
import { experience } from '../data/resumeData';

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

const MetricBadge = ({ label, value, suffix, color }) => (
  <div
    className="flex flex-col items-center px-4 py-3 rounded-xl"
    style={{ background: `${color}12`, border: `1px solid ${color}25` }}
  >
    <span className="text-xl font-black" style={{ color }}>
      {value}{suffix}
    </span>
    <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-0.5 text-center">{label}</span>
  </div>
);

const ExperienceCard = ({ job, index }) => {
  const { ref, visible } = useVisible();
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex gap-6 items-start transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Left: Timeline */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1" style={{ width: 48 }}>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm z-10"
          style={{
            background: `linear-gradient(135deg, ${job.color}, ${job.color}70)`,
            boxShadow: `0 0 20px ${job.color}40`,
          }}
        >
          {index + 1}
        </div>
        {index < experience.length - 1 && (
          <div
            className="w-0.5 flex-1 mt-3"
            style={{ minHeight: 60, background: `linear-gradient(to bottom, ${job.color}50, rgba(255,255,255,0.05))` }}
          />
        )}
      </div>

      {/* Right: Card */}
      <div className="flex-1 mb-10">
        {/* Period badge */}
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold mb-3"
          style={{ background: `${job.color}18`, color: job.color, border: `1px solid ${job.color}30` }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: job.color }} />
          {job.period}
        </div>

        {/* Main card */}
        <div
          className="rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl"
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(24px)',
            borderColor: `${job.color}20`,
            boxShadow: expanded ? `0 20px 60px ${job.color}15` : 'none',
          }}
        >
          {/* Card header */}
          <div
            className="p-6 cursor-pointer select-none"
            onClick={() => setExpanded(prev => !prev)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                {/* Company */}
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: job.color }} />
                  <span className="text-[13px] font-semibold uppercase tracking-widest" style={{ color: job.color }}>
                    {job.company}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-1">{job.role}</h3>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </p>
              </div>

              {/* Expand icon */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{ background: `${job.color}15`, border: `1px solid ${job.color}30`, transform: expanded ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: job.color }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-sm text-gray-400 leading-relaxed mt-3 italic">{job.tagline}</p>

            {/* Key metrics (always visible) */}
            {job.achievements && (
              <div className="grid grid-cols-3 gap-3 mt-5">
                {job.achievements.map((ach, i) => (
                  <MetricBadge key={i} label={ach.label} value={ach.value} suffix={ach.suffix} color={job.color} />
                ))}
              </div>
            )}

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {job.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-[11px] font-semibold"
                  style={{
                    background: `${job.color}12`,
                    color: job.color,
                    border: `1px solid ${job.color}25`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Expanded highlights */}
          <div
            className="overflow-hidden transition-all duration-500"
            style={{ maxHeight: expanded ? '600px' : '0px' }}
          >
            <div
              className="px-6 pb-6 pt-0 border-t"
              style={{ borderColor: `${job.color}15` }}
            >
              <h4 className="text-sm font-bold text-gray-300 mb-4 mt-4 flex items-center gap-2">
                <span className="w-4 h-0.5 rounded" style={{ background: job.color }} />
                Key Responsibilities & Achievements
              </h4>
              <ul className="flex flex-col gap-3">
                {job.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: job.color }}
                    />
                    <p className="text-sm text-gray-300 leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { ref: headerRef, visible: headerVisible } = useVisible();

  return (
    <section id="experience" className="section bg-[#07090d]">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label">Professional History</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Click any role to expand detailed responsibilities and achievements
          </p>
        </div>

        {/* Experience cards */}
        <div>
          {experience.map((job, i) => (
            <ExperienceCard key={job.id} job={job} index={i} />
          ))}
        </div>

        {/* Summary bar */}
        <div
          className="mt-4 rounded-2xl p-6 border border-white/[0.08]"
          style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}
        >
          <p className="text-center text-gray-500 text-[13px] mb-4 font-medium uppercase tracking-wider">Combined Impact Across All Roles</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Years Experience', value: '4.5+', color: '#ec4899' },
              { label: 'Customer Portfolio', value: '200+', color: '#c084fc' },
              { label: 'Queries Resolved / Wk', value: '80+', color: '#7c3aed' },
              { label: 'Releases Managed', value: '15+', color: '#a855f7' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black mb-1" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
