import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import CyberPanel from './CyberPanel';
import SocialDock from './SocialDock';
interface HeroProps {
    scrollToSection: (sectionId: string) => void;
    resumePdf: string;
    profileImg: string;
}
const roles = ["FULLSTACK DEVELOPER", "AI ENGINEER"];
const Hero: React.FC<HeroProps> = ({ scrollToSection, resumePdf, profileImg }) => {
    const [roleIndex, setRoleIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative md:overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
            {/* System Boot Messages */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute top-28 right-8 z-10 hidden lg:flex flex-col items-end"
            >
                <div className="font-mono text-xs font-bold text-neon-cyan space-y-1 opacity-70 text-right">
                    <div className="flex items-center gap-2 justify-end">
                        <span>[SYS] Portfolio_v3.0.1 ONLINE</span>
                        <span className="text-neon-green">●</span>
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                        <span>[STATUS] OPERATIONAL</span>
                        <span className="text-neon-green">●</span>
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                        <span>[UPTIME] 99.97%</span>
                        <span className="text-neon-cyan">●</span>
                    </div>
                </div>
            </motion.div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-12 items-center">
                    {/* Left: Identity Module */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center md:text-left space-y-6 md:space-y-8 relative z-20 order-last md:order-none"
                    >
                        {/* Main Identity */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cyber font-black leading-[0.85] tracking-tighter">
                            <motion.span 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 0.8, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="block text-gray-400 text-xs sm:text-sm md:text-base mb-4 md:mb-6 font-mono font-medium tracking-[0.3em] uppercase"
                            >
                                &gt; ENGINEER_ID: 0x7FE4
                            </motion.span>
                            <div 
                                className="text-neon-cyan mb-4"
                                style={{ textShadow: '0 0 15px rgba(0, 240, 255, 0.3)' }}
                            >
                                SRIDHAR
                            </div>
                        </h1>
                        {/* Role Classification */}
                        <div className="space-y-3">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="font-mono text-xs sm:text-sm md:text-base text-gray-300 uppercase tracking-[0.15em] h-8 relative overflow-hidden flex items-center justify-center md:justify-start"
                            >
                                <span className="text-neon-cyan mr-2">[</span>
                                <div className="w-[240px] sm:w-[280px] md:w-[350px] relative h-full flex items-center justify-center">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={roles[roleIndex]}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className="absolute whitespace-nowrap text-xs sm:text-sm md:text-base"
                                        >
                                            {roles[roleIndex]}
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                                <span className="text-neon-cyan ml-2">]</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="font-mono text-[8px] sm:text-[9px] md:text-[10px] text-gray-400 uppercase tracking-[0.25em]"
                            >
                                SPEC: REACT • TYPESCRIPT • MERN STACK
                            </motion.div>
                        </div>
                        {/* Status Badge */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="inline-flex items-center gap-3 px-3 py-1.5 sm:px-4 sm:py-2 bg-terminal-surface border border-grid-glow rounded-sm backdrop-blur-md"
                        >
                            <motion.div
                                className="w-2 h-2 rounded-full bg-neon-green"
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                    scale: [0.8, 1.2, 0.8],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-neon-green">
                                STATUS: AVAILABLE
                            </span>
                        </motion.div>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 font-sans border-l-2 border-grid-line pl-4">
                            "Crafting high-performance digital architectures with a focus on human-centric design and pixel-perfect execution."
                        </p>
                        {/* Action Triggers - Full width on mobile, row on desktop */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-6 md:pt-8">
                            <Magnetic strength={0.15}>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-neon-cyan text-terminal-black font-cyber font-black rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] flex items-center justify-center border-2 border-neon-cyan uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[9px] sm:text-[10px]"
                                >
                                    <span className="relative z-10">INITIATE_CONTACT</span>
                                </button>
                            </Magnetic>
                            <Magnetic strength={0.15}>
                                <a
                                    href={resumePdf}
                                    download
                                    className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-transparent border-2 border-grid-glow rounded-sm font-cyber font-black hover:border-neon-cyan hover:bg-terminal-surface transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[9px] sm:text-[10px] text-gray-400 hover:text-neon-cyan"
                                >
                                    <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                    <span>DOWNLOAD.CV</span>
                                </a>
                            </Magnetic>
                        </div>
                        {/* Social Links */}
                        <div className="flex gap-3 justify-center md:justify-start pt-4 md:pt-6">
                            <SocialDock />
                        </div>
                    </motion.div>
                    {/* Right: Profile HUD Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative flex justify-center z-10 order-first md:order-none"
                    >
                        <CyberPanel
                            label="IMG_SCANNER"
                            status="active"
                            corner="all"
                            glowColor="rgba(0, 240, 255, 0.5)"
                            className="w-full max-w-[280px] sm:max-w-[320px] md:w-[24rem]"
                        >
                            <div
                                className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] p-3 sm:p-4 mx-auto"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* Image Container with 3D Transform */}
                                <motion.div
                                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                                    className="relative w-full h-full"
                                >
                                    {/* Profile Image */}
                                    <div className="relative w-full h-full rounded-sm overflow-hidden border-2 border-grid-glow shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                                        <img
                                            loading="eager"
                                            // @ts-expect-error: fetchpriority is not yet in React types
                                            fetchpriority="high"
                                            decoding="async"
                                            src={profileImg}
                                            alt="Sridhar Profile - Engineer"
                                            width="350"
                                            height="350"
                                            className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 grayscale sepia-[0.2] brightness-75 group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100"
                                        />
                                        
                                        {/* Terminal Overlay Grid - will-change for GPU acceleration */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-terminal-black/80 z-10 transition-opacity duration-500 group-hover:opacity-50 will-change-[opacity]"></div>
                                        
                                        {/* Scanlines - optimized for paint performance */}
                                        <div 
                                            className="absolute inset-0 z-20 pointer-events-none opacity-30 group-hover:opacity-10 transition-opacity duration-500 will-change-[opacity]"
                                            style={{ 
                                                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 240, 255, 0.1) 2px, rgba(0, 240, 255, 0.1) 4px)',
                                            }}
                                        ></div>
                                        
                                        {/* Animated Corner Indicators */}
                                        <motion.div 
                                            animate={{ x: [0, 2, 0], y: [0, 2, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-neon-cyan z-30"
                                        ></motion.div>
                                        <motion.div 
                                            animate={{ x: [0, -2, 0], y: [0, 2, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                            className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-neon-cyan z-30"
                                        ></motion.div>
                                        <motion.div 
                                            animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                            className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-neon-cyan z-30"
                                        ></motion.div>
                                        <motion.div 
                                            animate={{ x: [0, -2, 0], y: [0, -2, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                                            className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-neon-cyan z-30"
                                        ></motion.div>
                                    </div>
                                    {/* Terminal Data Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4 z-40 space-y-1">
                                        <div className="font-mono text-[8px] text-neon-cyan flex items-center justify-between bg-terminal-black/80 px-2 py-1 rounded-sm border border-grid-line">
                                            <span>ID: 0x7FE4</span>
                                            <span className="text-neon-green">● VERIFIED</span>
                                        </div>
                                        <div className="font-mono text-[7px] text-gray-500 flex items-center justify-between bg-terminal-black/80 px-2 py-1 rounded-sm border border-grid-line">
                                            <span>STATUS: AVAILABLE</span>
                                            <span>LOC: IN</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </CyberPanel>
                    </motion.div>
                </div>
            </div>
            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:block"
                onClick={() => scrollToSection('about')}
            >
                <div className="w-6 h-10 border-2 border-accent-cyan rounded-full flex justify-center pt-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-2 bg-accent-cyan rounded-full"
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    );
};
export default Hero;