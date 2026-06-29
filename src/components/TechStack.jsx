import React, { useRef, useState, useEffect } from 'react';
import { technologies } from '../data/resumeData';

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

const sizeMap = {
  xl: { width: 130, height: 130, font: 14, badge: 13 },
  lg: { width: 110, height: 110, font: 13, badge: 11 },
  md: { width: 95, height: 95, font: 12, badge: 10 },
  sm: { width: 80, height: 80, font: 11, badge: 10 },
};

const categoryColors = {
  'Programming': '#06b6d4',
  'Database': '#a855f7',
  'BI Tools': '#6366f1',
  'Business Apps': '#f59e0b',
  'Cloud': '#3b82f6',
  'Tools': '#8b5cf6',
  'Delivery': '#ec4899',
};

const categories = [...new Set(technologies.map(t => t.category))];

const TechBubble = ({ tech, visible, delay = 0 }) => {
  const [hovered, setHovered] = useState(false);
  const dims = sizeMap[tech.size] || sizeMap.md;

  return (
    <div
      className="flex flex-col items-center gap-2 cursor-default"
      style={{
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1) translateY(0)' : 'scale(0.6) translateY(20px)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Bubble */}
      <div
        className="relative flex flex-col items-center justify-center rounded-2xl transition-all duration-300"
        style={{
          width: dims.width,
          height: dims.height,
          background: hovered
            ? `radial-gradient(circle at 30% 30%, ${tech.color}40, ${tech.color}15)`
            : `radial-gradient(circle at 30% 30%, ${tech.color}25, ${tech.color}08)`,
          border: `1.5px solid ${tech.color}${hovered ? '60' : '30'}`,
          boxShadow: hovered
            ? `0 0 30px ${tech.color}35, 0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 ${tech.color}20`
            : `0 0 12px ${tech.color}15, 0 4px 12px rgba(0,0,0,0.3)`,
          transform: hovered ? 'translateY(-6px) scale(1.06)' : 'translateY(0) scale(1)',
        }}
      >
        {/* Shine effect */}
        <div
          className="absolute top-2 left-2 right-2 h-8 rounded-xl opacity-20"
          style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)' }}
        />

        {/* Tech name */}
        <span
          className="font-bold text-center px-2 z-10 leading-tight"
          style={{
            fontSize: dims.font,
            color: hovered ? '#fff' : 'rgba(255,255,255,0.9)',
            textShadow: hovered ? `0 0 20px ${tech.color}` : 'none',
          }}
        >
          {tech.name}
        </span>

        {/* Level */}
        <span
          className="text-[10px] font-semibold mt-1 z-10"
          style={{ color: `${tech.color}${hovered ? 'ff' : 'cc'}` }}
        >
          {tech.level}%
        </span>

        {/* Glow dot */}
        {hovered && (
          <div
            className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full"
            style={{ background: tech.color, boxShadow: `0 0 6px ${tech.color}` }}
          />
        )}
      </div>

      {/* Category tag */}
      <span
        className="text-[10px] font-medium px-2 py-0.5 rounded-full transition-all duration-200"
        style={{
          color: categoryColors[tech.category] || '#94a3b8',
          background: `${categoryColors[tech.category] || '#94a3b8'}15`,
          border: `1px solid ${categoryColors[tech.category] || '#94a3b8'}25`,
          opacity: hovered ? 1 : 0.6,
        }}
      >
        {tech.category}
      </span>
    </div>
  );
};

const TechStack = () => {
  const { ref: headerRef, visible: headerVisible } = useVisible(0.1);
  const { ref: bubblesRef, visible: bubblesVisible } = useVisible(0.1);
  const [filter, setFilter] = useState('All');

  const filteredTech = filter === 'All'
    ? technologies
    : technologies.filter(t => t.category === filter);

  return (
    <section id="techstack" className="section bg-[#070714]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label">Technology Arsenal</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Interactive technology map — bubble size reflects tool proficiency and frequency of use across professional roles
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <button
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 ${
              filter === 'All'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/20'
                : 'text-gray-400 border border-white/10 bg-white/[0.04] hover:text-white hover:border-white/20'
            }`}
          >
            All ({technologies.length})
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                filter === cat ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
              style={{
                background: filter === cat
                  ? `${categoryColors[cat] || '#06b6d4'}25`
                  : 'rgba(255,255,255,0.04)',
                border: `1px solid ${filter === cat ? (categoryColors[cat] || '#06b6d4') + '50' : 'rgba(255,255,255,0.08)'}`,
                color: filter === cat ? (categoryColors[cat] || '#06b6d4') : undefined,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bubbles grid */}
        <div ref={bubblesRef}>
          <div className="flex flex-wrap justify-center items-end gap-6">
            {filteredTech.map((tech, i) => (
              <TechBubble
                key={tech.name}
                tech={tech}
                visible={bubblesVisible}
                delay={i * 60}
              />
            ))}
          </div>
        </div>

        {/* Legend */}
        <div
          className="mt-16 rounded-2xl p-6 border border-white/[0.08]"
          style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Tools Listed', value: technologies.length, color: '#06b6d4' },
              { label: 'Categories', value: categories.length, color: '#a855f7' },
              { label: 'Top Skill Level', value: '93%', color: '#22d3ee' },
              { label: 'Years Applied', value: '5+', color: '#6366f1' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-black mb-1" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wide font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
