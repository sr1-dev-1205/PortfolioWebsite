
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

// Components
import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import DataStream from './components/DataStream';

// Lazy Load below-the-fold sections
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Experience = React.lazy(() => import('./components/Experience'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact'));

// Assets
import resumePdf from './Assets/SRIDHAR-RESUME.pdf';
import profileImg from './Assets/20250810_093517.jpg';

const AmbientOrb = ({ color = "bg-accent-cyan" }: { color?: string }) => (
  <motion.div
    className={`fixed w-[500px] h-[500px] ${color} rounded-full blur-[120px] pointer-events-none z-0 opacity-[0.03]`}
    animate={{
      y: [0, 50, 0],
      x: [0, -30, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle | loading | success | error

  useEffect(() => {
    // Optimized Scroll Listener for Back-to-Top
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        setShowScrollTop(window.scrollY > 500);
        timeoutId = undefined!;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Optimized Intersection Observer for Active Section
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Active when section crosses the center line
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'skills', 'experience', 'portfolio', 'contact'];
    
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-terminal-black text-white overflow-x-hidden relative font-sans selection:bg-neon-cyan selection:text-terminal-black">
      
      {/* CYBERPUNK SYSTEM LAYERS */}
      {/* Terminal Grid */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0"></div>
      
      {/* Scanlines */}
      <div className="fixed inset-0 terminal-scanlines pointer-events-none z-[1] opacity-30"></div>
      
      {/* Data Streams */}
      <DataStream count={15} speed={3} color="rgba(0, 240, 255, 0.2)" />
      
      {/* Ambient Lighting (reduced for cyberpunk) */}
      <div className="fixed top-[-20%] left-[-10%] opacity-30">
        <AmbientOrb color="bg-neon-cyan" />
      </div>
      <div className="fixed bottom-[-20%] right-[-10%] opacity-20">
        <AmbientOrb color="bg-neon-magenta" />
      </div>

      <CommandPalette scrollToSection={scrollToSection} />

      {/* Dynamic Star Background */}
      <StarBackground />

      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero
          scrollToSection={scrollToSection}
          resumePdf={resumePdf}
          profileImg={profileImg}
        />

        <React.Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-accent-cyan/50">Loading...</div>}>
          <About />
          <Skills />
          <Experience />
          <Portfolio />
          <Contact
            formStatus={formStatus}
            handleContactSubmit={handleContactSubmit}
          />
        </React.Suspense>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-accent-cyan/10 border border-accent-cyan/50 rounded-full flex items-center justify-center text-accent-cyan shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:bg-accent-cyan hover:text-black transition-colors duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </div>
  );
}

export default App;
