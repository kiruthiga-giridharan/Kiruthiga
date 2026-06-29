import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'techstack', label: 'Tech Stack' },
  { id: 'insights', label: 'Insights' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const positions = NAV_LINKS.map(link => {
        const el = document.getElementById(link.id);
        return { id: link.id, top: el ? el.offsetTop - 120 : 0 };
      });

      const scrollY = window.scrollY;
      for (let i = positions.length - 1; i >= 0; i--) {
        if (scrollY >= positions[i].top) {
          setActiveSection(positions[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'pt-2 pb-2' : 'pt-4 pb-4'}`}>
      <div className={`mx-4 sm:mx-8 rounded-2xl transition-all duration-500 ${scrolled
        ? 'bg-[rgba(5,5,16,0.88)] backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black/50'
        : ''
      }`}>
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-14">

          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-white font-black text-sm">KG</span>
            </div>
            <span className="hidden sm:block text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
              Kiruthiga
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeSection === link.id && (
                  <span className="absolute inset-0 rounded-lg bg-cyan-400/10" />
                )}
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-[13px] font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-cyan-500/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Get in Touch
            </button>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <div className="px-5 pt-2 flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="mt-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold text-center"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
