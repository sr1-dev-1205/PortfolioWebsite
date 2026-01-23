
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

interface NavbarProps {
    activeSection: string;
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'py-4' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`relative flex items-center justify-between h-16 px-6 rounded-sm transition-all duration-700 border-b ${isScrolled ? 'bg-terminal-dark/95 backdrop-blur-2xl border-grid-glow shadow-[0_10px_40px_rgba(0,0,0,0.8)]' : 'bg-transparent border-transparent'}`}>
                    {/* Logo - System Identifier */}
                    <div className="flex-shrink-0 cursor-pointer group flex items-center gap-3" onClick={() => scrollToSection('home')}>
                        <div className="relative w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-blue border border-neon-cyan/50 rounded-sm flex items-center justify-center font-cyber font-black text-terminal-black text-sm transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] group-hover:scale-110">
                            S
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <span className="text-[10px] font-cyber font-black tracking-[0.3em] uppercase text-neon-cyan">SRIDHAR</span>
                            <span className="text-[7px] text-gray-600 font-mono uppercase tracking-[0.2em]">FRONTEND_SYS</span>
                        </div>
                    </div>

                    {/* Desktop Navigation - HUD Style */}
                    <div className="hidden md:block">
                        <div className="flex items-center gap-1">
                            {['About', 'Skills', 'Experience', 'Portfolio', 'Contact'].map((item) => (
                                <Magnetic key={item} strength={0.1}>
                                    <button
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                        className={`relative px-5 py-2 text-[9px] font-mono font-bold uppercase tracking-[0.25em] transition-all duration-300 rounded-sm group ${
                                            activeSection === item.toLowerCase() 
                                                ? 'text-neon-cyan' 
                                                : 'text-gray-500 hover:text-gray-300'
                                        }`}
                                    >
                                        {item}
                                        {activeSection === item.toLowerCase() && (
                                            <motion.div
                                                layoutId="activeSection"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </button>
                                </Magnetic>
                            ))}
                        </div>
                    </div>

                    {/* Command Hint - Terminal Style */}
                    <div className="hidden lg:flex items-center gap-2 text-[8px] text-gray-600 font-mono tracking-[0.3em] bg-terminal-surface px-3 py-1.5 rounded-sm border border-grid-line uppercase">
                        <span className="px-1.5 py-0.5 bg-terminal-black rounded-sm text-neon-cyan">CTRL</span>
                        <span>+</span>
                        <span className="px-1.5 py-0.5 bg-terminal-black rounded-sm text-neon-cyan">K</span>
                    </div>

                    {/* Mobile menu button - Cyberpunk Style */}
                    <div className="md:hidden">
                        <Magnetic strength={0.2}>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-3 bg-terminal-surface border border-grid-line rounded-sm text-neon-cyan hover:border-neon-cyan transition-all"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </Magnetic>
                    </div>
                </div>
            </div>

            {/* Scroll Progress Bar - Neon Style */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.8)] origin-left z-[101]"
                style={{ scaleX }}
            />

            {/* Mobile Navigation - Terminal Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="md:hidden fixed inset-0 z-[-1] bg-terminal-black/98 backdrop-blur-2xl"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
                            {['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Contact'].map((item, index) => (
                                <motion.button
                                    key={item}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -50, opacity: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`text-2xl sm:text-3xl font-cyber font-black uppercase tracking-[0.3em] transition-all duration-300 relative group ${
                                        activeSection === item.toLowerCase() ? 'text-neon-cyan' : 'text-gray-600'
                                    }`}
                                >
                                    <span className="text-neon-cyan text-sm mr-3">&gt;</span>
                                    {item}
                                    {activeSection === item.toLowerCase() && (
                                        <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
