import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import TechStack from './components/TechStack';
import CareerInsights from './components/CareerInsights';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#050510] text-white font-inter">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <TechStack />
      <CareerInsights />
      <Contact />
    </div>
  );
}

export default App;
