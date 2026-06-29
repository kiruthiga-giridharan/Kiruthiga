import React, { useRef, useState, useEffect } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
  AreaChart, Area,
} from 'recharts';
import { impactMetrics, techDistribution } from '../data/resumeData';

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

// Custom tooltip for dark mode
const DarkTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: 'rgba(5,5,16,0.95)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 12,
      padding: '10px 14px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
    }}>
      {label && <p style={{ color: '#94a3b8', fontSize: 11, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</p>}
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.fill || p.color || '#22d3ee', fontWeight: 700, fontSize: 14 }}>
          {p.name ? `${p.name}: ` : ''}{p.value}
          {p.name === 'value' || !p.name ? '%' : ''}
        </p>
      ))}
    </div>
  );
};

// Career progression data (based on resume timeline)
const careerProgressData = [
  { year: '2020', experience: 0, company: 'TCS Start' },
  { year: '2021', experience: 1, company: 'TCS' },
  { year: '2022', experience: 2, company: 'TCS / Estee Lauder' },
  { year: '2023', experience: 3, company: 'Estee Lauder / Trinity' },
  { year: '2024', experience: 4, company: 'Circana' },
  { year: '2025', experience: 5, company: 'Circana' },
];

const RADIAN = Math.PI / 180;
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={600} fontFamily="Inter, sans-serif">
      {percent > 0.08 ? `${(percent * 100).toFixed(0)}%` : ''}
    </text>
  );
};

const CareerInsights = () => {
  const { ref: headerRef, visible: headerVisible } = useVisible(0.1);
  const { ref: chart1Ref, visible: chart1Visible } = useVisible(0.2);
  const { ref: chart2Ref, visible: chart2Visible } = useVisible(0.2);
  const { ref: chart3Ref, visible: chart3Visible } = useVisible(0.2);
  const [activePieIndex, setActivePieIndex] = useState(null);

  return (
    <section id="insights" className="section bg-[#050510]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label">Analytics Dashboard</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Career <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Visual analytics derived directly from career data — metrics, distributions, and progression
          </p>
        </div>

        {/* Row 1: Impact metrics bar + Tech distribution pie */}
        <div className="grid lg:grid-cols-5 gap-8 mb-8">

          {/* Bar chart — Career impact metrics */}
          <div
            ref={chart1Ref}
            className={`lg:col-span-3 rounded-2xl p-6 border border-white/[0.08] transition-all duration-700 ${chart1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500" />
              <div>
                <h3 className="text-base font-bold text-white">Career Impact Metrics</h3>
                <p className="text-[12px] text-gray-500">Quantified achievements across all roles (from resume)</p>
              </div>
            </div>

            <div style={{ height: 340 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={impactMetrics}
                  layout="vertical"
                  margin={{ top: 0, right: 40, bottom: 0, left: 0 }}
                  barSize={14}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.06)" />
                  <XAxis
                    type="number"
                    domain={[0, 110]}
                    tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 11 }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                    tickLine={false}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <YAxis
                    type="category"
                    dataKey="metric"
                    width={135}
                    tick={{ fill: 'rgba(255,255,255,0.65)', fontSize: 11, fontFamily: 'Inter' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<DarkTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                    {impactMetrics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              {[
                { label: 'Circana', color: '#06b6d4' },
                { label: 'TCS', color: '#a855f7' },
                { label: 'Estee Lauder', color: '#ec4899' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                  <span className="text-[11px] text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Donut chart — Tech distribution */}
          <div
            ref={chart2Ref}
            className={`lg:col-span-2 rounded-2xl p-6 border border-white/[0.08] transition-all duration-700 delay-150 ${chart2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-6 rounded-full bg-gradient-to-b from-purple-400 to-indigo-500" />
              <div>
                <h3 className="text-base font-bold text-white">Technology Distribution</h3>
                <p className="text-[12px] text-gray-500">Relative usage across all roles</p>
              </div>
            </div>

            <div style={{ height: 220 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={techDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomLabel}
                    onMouseEnter={(_, index) => setActivePieIndex(index)}
                    onMouseLeave={() => setActivePieIndex(null)}
                  >
                    {techDistribution.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        opacity={activePieIndex === null || activePieIndex === index ? 1 : 0.5}
                        style={{ filter: activePieIndex === index ? `drop-shadow(0 0 12px ${entry.color}90)` : 'none', transition: 'all 0.2s ease' }}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<DarkTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-2 mt-2">
              {techDistribution.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                    <span className="text-[12px] text-gray-300">{item.name}</span>
                  </div>
                  <span className="text-[12px] font-bold" style={{ color: item.color }}>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Career progression area chart + Stat cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Area chart — Career progression */}
          <div
            ref={chart3Ref}
            className={`lg:col-span-2 rounded-2xl p-6 border border-white/[0.08] transition-all duration-700 ${chart3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-6 rounded-full bg-gradient-to-b from-indigo-400 to-pink-500" />
              <div>
                <h3 className="text-base font-bold text-white">Career Progression</h3>
                <p className="text-[12px] text-gray-500">Years of cumulative experience over time</p>
              </div>
            </div>

            <div style={{ height: 220 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={careerProgressData} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
                  <defs>
                    <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: 'rgba(255,255,255,0.55)', fontSize: 11 }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: 'rgba(255,255,255,0.55)', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v}yr`}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (!active || !payload?.length) return null;
                      const d = careerProgressData.find(x => x.year === label);
                      return (
                        <div style={{ background: 'rgba(5,5,16,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '10px 14px' }}>
                          <p style={{ color: '#94a3b8', fontSize: 11, marginBottom: 4 }}>{label}</p>
                          <p style={{ color: '#22d3ee', fontWeight: 700, fontSize: 14 }}>{payload[0]?.value} years</p>
                          {d?.company && <p style={{ color: '#a855f7', fontSize: 11 }}>{d.company}</p>}
                        </div>
                      );
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="experience"
                    stroke="#06b6d4"
                    strokeWidth={2.5}
                    fill="url(#expGrad)"
                    dot={{ r: 5, fill: '#06b6d4', strokeWidth: 2, stroke: '#0a0a1a' }}
                    activeDot={{ r: 7, fill: '#22d3ee', strokeWidth: 0 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Company annotations */}
            <div className="flex flex-wrap gap-4 mt-4">
              {[
                { years: '2020–22', company: 'TCS', color: '#8b5cf6' },
                { years: '2022–24', company: 'Estee Lauder', color: '#ec4899' },
                { years: '2024–', company: 'Circana', color: '#06b6d4' },
              ].map(c => (
                <div key={c.company} className="flex items-center gap-1.5">
                  <div className="w-1 h-4 rounded-full" style={{ background: c.color }} />
                  <span className="text-[11px] text-gray-400">{c.years} · <span style={{ color: c.color }}>{c.company}</span></span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight stat cards */}
          <div className="flex flex-col gap-4">
            <p className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider">Key Numbers</p>
            {[
              { label: 'EMEA Client Portfolio', value: '200+', sub: 'Circana — enterprise clients', color: '#06b6d4' },
              { label: 'Data Accuracy Maintained', value: '100%', sub: 'TCS — 15+ banking releases', color: '#a855f7' },
              { label: 'Recurring Error Reduction', value: '25%', sub: 'Circana — P&L deep dives', color: '#ec4899' },
              { label: 'Procurement Cost Cut', value: '15%', sub: 'Estee Lauder — vendor negotiations', color: '#8b5cf6' },
              { label: 'Conversion Uplift', value: '20%+', sub: 'Estee Lauder — sales funnel', color: '#6366f1' },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl p-4 border transition-all duration-300 hover:-translate-y-0.5 card-glow"
                style={{
                  background: `${stat.color}08`,
                  borderColor: `${stat.color}20`,
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="text-2xl font-black mb-0.5" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-[13px] font-semibold text-white leading-tight mb-0.5">{stat.label}</div>
                <div className="text-[11px] text-gray-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerInsights;
