import React, { useRef, useState, useEffect } from 'react';
import { education, awards } from '../data/resumeData';

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

// CGPA progress bar
const GradeBar = ({ cgpa, maxCgpa = 10, color, visible }) => {
  const pct = (cgpa / maxCgpa) * 100;
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-gray-400 font-medium">CGPA</span>
        <span className="font-bold" style={{ color }}>{cgpa} / {maxCgpa}</span>
      </div>
      <div className="h-2 rounded-full bg-white/[0.07] overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: visible ? `${pct}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1) 400ms',
            boxShadow: `0 0 10px ${color}60`,
          }}
        />
      </div>
    </div>
  );
};

const EducationCard = ({ edu, index }) => {
  const { ref, visible } = useVisible();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div
        className="rounded-2xl overflow-hidden border hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 card-glow"
        style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(24px)',
          borderColor: `${edu.color}25`,
        }}
      >
        {/* Top accent bar */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${edu.color}, ${edu.color}40, transparent)` }}
        />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-5">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
              style={{
                background: `${edu.color}15`,
                border: `2px solid ${edu.color}30`,
                boxShadow: `0 0 20px ${edu.color}20`,
              }}
            >
              🎓
            </div>
            <div>
              <div
                className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold mb-2"
                style={{ background: `${edu.color}18`, color: edu.color, border: `1px solid ${edu.color}30` }}
              >
                {edu.period}
              </div>
              <h3 className="text-xl font-black text-white">{edu.institution}</h3>
              <p className="text-sm font-semibold mt-0.5" style={{ color: edu.color }}>{edu.degree}</p>
            </div>
          </div>

          {/* Specialisation */}
          <div className="mb-4">
            <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wider mb-1">Specialisation</p>
            <p className="text-sm text-gray-200 font-medium">{edu.specialization}</p>
          </div>

          {/* CGPA bar (only for undergrad) */}
          {edu.cgpa && (
            <div className="mb-4">
              <GradeBar cgpa={edu.cgpa} maxCgpa={10} color={edu.color} visible={visible} />
            </div>
          )}

          {/* Research */}
          <div className="mb-5 p-3 rounded-xl border" style={{ background: `${edu.color}08`, borderColor: `${edu.color}20` }}>
            <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: edu.color }}>Research / Project</p>
            <p className="text-[13px] text-gray-300 italic leading-relaxed">{edu.research}</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-500 text-[12px] mb-4">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            {edu.location}
          </div>

          {/* Achievements */}
          <div>
            <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Achievements</p>
            <div className="flex flex-wrap gap-2">
              {edu.achievements.map((ach, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium"
                  style={{
                    background: `${edu.color}12`,
                    color: edu.color,
                    border: `1px solid ${edu.color}25`,
                  }}
                >
                  <span>🏆</span>
                  {ach}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AwardCard = ({ award, index }) => {
  const { ref, visible } = useVisible();

  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 p-4 rounded-2xl border transition-all duration-500 hover:-translate-y-0.5 card-glow ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
      style={{
        transitionDelay: `${index * 100}ms`,
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(20px)',
        borderColor: `${award.color}20`,
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
        style={{ background: `${award.color}15`, border: `1px solid ${award.color}30` }}
      >
        🏆
      </div>
      <div>
        <h4 className="text-[14px] font-bold text-white mb-0.5">{award.title}</h4>
        <p className="text-[12px] text-gray-400">{award.organization}</p>
        <div
          className="inline-block mt-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold"
          style={{ background: `${award.color}15`, color: award.color }}
        >
          {award.year}
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const { ref: headerRef, visible: headerVisible } = useVisible(0.1);

  return (
    <section id="education" className="section bg-[#050510]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label">Academic Background</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Education &amp; <span className="gradient-text">Awards</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Academic foundations in statistical modelling, risk analytics, and engineering — complementing 5+ years of practical data expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Education cards — left 2 cols */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <EducationCard key={edu.id} edu={edu} index={i} />
            ))}

            {/* Education path visual */}
            <div
              className="sm:col-span-2 rounded-2xl p-5 border border-white/[0.08]"
              style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)' }}
            >
              <p className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-4">Education Timeline</p>
              <div className="relative flex items-center">
                <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 rounded-full" />
                {[
                  { year: '2016', label: 'BEng Starts', color: '#a855f7' },
                  { year: '2020', label: 'BEng Complete', color: '#8b5cf6' },
                  { year: '2022', label: 'MSc Starts', color: '#6366f1' },
                  { year: '2023', label: 'MSc Complete', color: '#06b6d4' },
                ].map((point, i, arr) => (
                  <div
                    key={i}
                    className="relative flex flex-col items-center flex-1"
                  >
                    <div
                      className="w-3 h-3 rounded-full border-2 border-[#050510] z-10 mb-3"
                      style={{ background: point.color, boxShadow: `0 0 8px ${point.color}` }}
                    />
                    <span className="text-[11px] font-bold" style={{ color: point.color }}>{point.year}</span>
                    <span className="text-[10px] text-gray-500 text-center mt-0.5 max-w-[80px]">{point.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards — right col */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/20 flex items-center justify-center text-sm">🏆</span>
              Awards &amp; Recognition
            </h3>
            <div className="flex flex-col gap-3">
              {awards.map((award, i) => (
                <AwardCard key={i} award={award} index={i} />
              ))}
            </div>

            {/* Academic stats */}
            <div
              className="mt-6 rounded-2xl p-5 border border-white/[0.08]"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}
            >
              <p className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-4">Academic Highlights</p>
              {[
                { label: 'Undergraduate CGPA', value: '8.2 / 10', color: '#a855f7' },
                { label: 'Classification', value: 'First Class', color: '#8b5cf6' },
                { label: 'Postgraduate Degree', value: 'MSc', color: '#06b6d4' },
                { label: 'Specialisation', value: 'Statistical Modelling', color: '#6366f1' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/[0.05] last:border-0">
                  <span className="text-[12px] text-gray-400">{item.label}</span>
                  <span className="text-[12px] font-bold" style={{ color: item.color }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
