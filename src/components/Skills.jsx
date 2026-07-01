import React, { useRef, useState, useEffect } from 'react';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer,
} from 'recharts';
import { radarData, skillCategories, topSkills } from '../data/resumeData';

const useVisible = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

// Circular progress ring
const ProgressRing = ({ skill, visible, delay = 0 }) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.level / 100) * circumference;

  return (
    <div
      className="flex flex-col items-center gap-3 group cursor-default"
      style={{ transition: `all 0.6s ease ${delay}ms`, opacity: visible ? 1 : 0, transform: visible ? 'scale(1)' : 'scale(0.7)' }}
    >
      <div className="relative">
        <svg width="100" height="100" viewBox="0 0 100 100">
          {/* Background ring */}
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="7"
          />
          {/* Progress ring */}
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke={skill.color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={visible ? offset : circumference}
            transform="rotate(-90 50 50)"
            style={{
              transition: `stroke-dashoffset 1.4s cubic-bezier(0.4, 0, 0.2, 1) ${delay + 200}ms`,
              filter: `drop-shadow(0 0 6px ${skill.color}60)`,
            }}
          />
          {/* Percentage */}
          <text x="50" y="47" textAnchor="middle" fill="white" fontSize="16" fontWeight="800" fontFamily="Inter, sans-serif">
            {skill.level}
          </text>
          <text x="50" y="60" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Inter, sans-serif">
            %
          </text>
        </svg>

        {/* Glow dot at progress end */}
        <div
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            background: skill.color,
            boxShadow: `0 0 10px ${skill.color}`,
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: visible ? 1 : 0,
            transition: `opacity 0.4s ease ${delay + 400}ms`,
          }}
        />
      </div>
      <span className="text-[13px] font-semibold text-gray-300 group-hover:text-white transition-colors text-center">{skill.name}</span>
    </div>
  );
};

// Skill bar
const SkillBar = ({ name, level, color, visible, delay = 0 }) => (
  <div
    className="mb-3"
    style={{ transition: `all 0.5s ease ${delay}ms`, opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-20px)' }}
  >
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-[13px] font-medium text-gray-300">{name}</span>
      <span className="text-[12px] font-bold" style={{ color }}>{level}%</span>
    </div>
    <div className="h-1.5 rounded-full bg-white/[0.07] overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{
          width: visible ? `${level}%` : '0%',
          background: `linear-gradient(90deg, ${color}, ${color}80)`,
          transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${delay + 100}ms`,
          boxShadow: `0 0 8px ${color}60`,
        }}
      />
    </div>
  </div>
);

const Skills = () => {
  const { ref: headerRef, visible: headerVisible } = useVisible(0.1);
  const { ref: radarRef, visible: radarVisible } = useVisible(0.2);
  const { ref: ringsRef, visible: ringsVisible } = useVisible(0.2);
  const { ref: barsRef, visible: barsVisible } = useVisible(0.1);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section bg-[#06080e]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label">Competency Matrix</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Skills <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Visualising core competencies across data analysis, engineering, and business intelligence domains
          </p>
        </div>

        {/* Row 1: Radar + Rings */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">

          {/* Radar Chart */}
          <div
            ref={radarRef}
            className={`rounded-2xl p-6 border border-white/[0.08] transition-all duration-700 ${radarVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-6 rounded-full bg-gradient-to-b from-gold-400 to-nav-500" />
              <h3 className="text-lg font-bold text-white">Competency Radar</h3>
              <span className="ml-auto text-[11px] text-gray-500 border border-white/10 px-2 py-0.5 rounded-full">8 Domains</span>
            </div>

            <div style={{ height: 320 }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
                  <PolarGrid
                    gridType="polygon"
                    stroke="rgba(255,255,255,0.08)"
                  />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: 'rgba(255,255,255,0.65)', fontSize: 11, fontFamily: 'Inter, sans-serif' }}
                  />
                  <Radar
                    name="Skill Level"
                    dataKey="value"
                    stroke="#ec4899"
                    fill="#ec4899"
                    fillOpacity={0.18}
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: '#ec4899', strokeWidth: 0 }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gold-400" />
                <span className="text-xs text-gray-400">Proficiency Level</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-gold-400/40" />
                <span className="text-xs text-gray-400">Domain Boundary</span>
              </div>
            </div>
          </div>

          {/* Progress Rings */}
          <div
            ref={ringsRef}
            className={`rounded-2xl p-6 border border-white/[0.08] transition-all duration-700 ${ringsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-6 rounded-full bg-gradient-to-b from-nav-400 to-gold-500" />
              <h3 className="text-lg font-bold text-white">Core Proficiencies</h3>
              <span className="ml-auto text-[11px] text-gray-500 border border-white/10 px-2 py-0.5 rounded-full">Top 6</span>
            </div>

            <div className="grid grid-cols-3 gap-5">
              {topSkills.map((skill, i) => (
                <ProgressRing key={skill.name} skill={skill} visible={ringsVisible} delay={i * 100} />
              ))}
            </div>

            {/* Info note */}
            <div className="mt-6 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] text-gray-500 text-center leading-relaxed">
                Proficiency levels reflect depth of hands-on application across professional roles
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Category skill bars */}
        <div
          ref={barsRef}
          className={`rounded-2xl border border-white/[0.08] transition-all duration-700 delay-200 ${barsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}
        >
          <div className="p-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-6 rounded-full bg-gradient-to-b from-nav-600 to-gold-600" />
              <h3 className="text-lg font-bold text-white">Skill Breakdown by Category</h3>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {skillCategories.map((cat, i) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(i)}
                  className={`px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                    activeCategory === i ? 'text-white scale-[1.02]' : 'text-gray-400 hover:text-gray-200'
                  }`}
                  style={{
                    background: activeCategory === i ? `${cat.color}25` : 'rgba(255,255,255,0.04)',
                    border: activeCategory === i ? `1px solid ${cat.color}50` : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: activeCategory === i ? `0 0 12px ${cat.color}20` : 'none',
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="grid sm:grid-cols-2 gap-x-12">
              {skillCategories[activeCategory].skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skillCategories[activeCategory].color}
                  visible={barsVisible}
                  delay={i * 80}
                />
              ))}
            </div>

            {/* Category description */}
            <div
              className="mt-4 p-4 rounded-xl text-sm text-gray-400 border"
              style={{
                background: `${skillCategories[activeCategory].color}08`,
                borderColor: `${skillCategories[activeCategory].color}20`,
              }}
            >
              <span className="font-semibold" style={{ color: skillCategories[activeCategory].color }}>
                {skillCategories[activeCategory].name}
              </span>
              {' — '}
              {activeCategory === 0 && 'Core programming and statistical analysis capabilities using Python ecosystem tools applied across all professional roles.'}
              {activeCategory === 1 && 'Advanced SQL expertise with 100+ complex queries executed across regulated banking environments; primary tool for data extraction and validation.'}
              {activeCategory === 2 && 'Interactive dashboard development and KPI reporting using Power BI, Tableau, and Advanced Excel for enterprise stakeholders.'}
              {activeCategory === 3 && 'CRM analytics on Salesforce and MS Dynamics; project coordination via Jira and Confluence across agile teams.'}
              {activeCategory === 4 && 'Agile delivery methodologies, cloud pipeline experience, and cross-functional stakeholder communication skills.'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
