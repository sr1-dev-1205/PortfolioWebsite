
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import CyberPanel from './CyberPanel';
import collegeImg from '../Assets/projects/Hitech.png';
import aarogyaImg from '../Assets/projects/AarogyaJal.png';
import portfolioImg from '../Assets/projects/Portfolio.png';

const Portfolio: React.FC = () => {
    const projects = [
        {
            title: 'College Website – Hindusthan Institute of Technology',
            description: 'Developed the complete frontend of the college website using React and Tailwind CSS. Focused on building responsive layouts, implementing navigation, and maintaining UI consistency.',
            tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
            live: 'https://hitechcse.netlify.app',
            image: collegeImg
        },
        {
            title: 'Aarogya Jal – Water Contamination Prevention System',
            description: 'Built a prototype solution for Smart India Hackathon focused on preventing water contamination through a smart monitoring and notification system.',
            tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
            live: 'https://pixel-pirates-beta.vercel.app',
            image: aarogyaImg
        },
        {
            title: 'Personal Portfolio Website',
            description: 'Designed and developed a responsive personal portfolio website to showcase my skills, projects, and learning journey in frontend development.',
            tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
            live: 'https://sridhar-dev-portfolio.vercel.app',
            image: portfolioImg
        }
    ];

    return (
        <section id="portfolio" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Terminal Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-neon-cyan"></div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400">// OPERATIONS_ARCHIVE</span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-neon-cyan"></div>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-black uppercase tracking-tighter neon-text-cyan mb-4">
                        PROJECTS.DB
                    </h2>
                    <p className="text-sm text-gray-300 font-mono">// Mission records and deployment archives</p>
                </motion.div>

                {/* Projects Grid - Operations Archive */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={project.title} className="group perspective-1000 h-[400px]">
                            <div className="relative w-full h-full duration-700 transform-style-3d group-hover:rotate-y-180">
                                
                                {/* FRONT FACE - Textual Information */}
                                <div className="absolute w-full h-full backface-hidden transition-all duration-700 group-hover:pointer-events-none">
                                    <CyberPanel
                                        label={`OP_${String(index + 1).padStart(2, '0')}`}
                                        status="active"
                                        corner="tl"
                                        glowColor="rgba(0, 240, 255, 0.3)"
                                        className="h-full flex flex-col justify-between"
                                    >
                                        <div className="p-8 space-y-6">
                                            <div>
                                                <h3 className="text-2xl font-cyber font-black text-white uppercase tracking-tight leading-tight mb-2">
                                                    {project.title}
                                                </h3>
                                                <div className="h-0.5 w-12 bg-neon-cyan/50 mb-4"></div>
                                                <p className="text-gray-300 text-sm font-sans leading-relaxed line-clamp-4">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Tech Stack */}
                                            <div className="space-y-2">
                                                <div className="text-[10px] text-neon-cyan font-mono uppercase tracking-widest">// TECH_STACK</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tech.map(t => (
                                                        <span 
                                                            key={t} 
                                                            className="px-2 py-1 bg-terminal-black border border-grid-line rounded-sm text-[9px] text-gray-400 font-mono uppercase tracking-wider"
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 border-t border-grid-line bg-terminal-black/30">
                                            <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest text-center flex items-center justify-center gap-2">
                                                <span>HOVER TO DECRYPT</span>
                                                <motion.span 
                                                    animate={{ opacity: [0, 1, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >_</motion.span>
                                            </div>
                                        </div>
                                    </CyberPanel>
                                </div>

                                {/* BACK FACE - Image & Interactions */}
                                <div className="absolute w-full h-full backface-hidden rotate-y-180 pointer-events-none group-hover:pointer-events-auto">
                                    <CyberPanel
                                        label="ACCESS_GRANTED"
                                        status="active"
                                        corner="br"
                                        glowColor="rgba(0, 240, 255, 0.3)"
                                        className="h-full overflow-hidden relative group/image"
                                    >
                                        {/* Full Image Background */}
                                        <div className="absolute inset-0">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover opacity-80 group-hover/image:opacity-60 transition-opacity duration-500"
                                            />
                                            <div className="absolute inset-0 bg-terminal-black/40"></div>
                                        </div>

                                        {/* Overlay Content */}
                                        <div className="relative h-full flex flex-col items-center justify-end pb-12 p-6">
                                            <a 
                                                href={project.live} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="px-8 py-3 bg-neon-cyan text-terminal-black font-cyber font-bold uppercase tracking-[0.2em] rounded-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all flex items-center gap-2 transform hover:scale-105 cursor-pointer z-50"
                                                style={{ transform: 'translateZ(30px)' }}
                                            >
                                                <span>View Live</span>
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </CyberPanel>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
