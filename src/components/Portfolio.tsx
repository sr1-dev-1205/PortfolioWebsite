
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Magnetic from './Magnetic';
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
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600">// OPERATIONS_ARCHIVE</span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-neon-cyan"></div>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-black uppercase tracking-tighter neon-text-cyan mb-4">
                        PROJECTS.DB
                    </h2>
                    <p className="text-sm text-gray-500 font-mono">// Mission records and deployment archives</p>
                </motion.div>

                {/* Projects Grid - Operations Archive */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <CyberPanel
                            key={project.title}
                            label={`OPERATION_${String(index + 1).padStart(2, '0')}`}
                            status="active"
                            corner="all"
                            glowColor="rgba(0, 240, 255, 0.3)"
                            className="flex flex-col h-full group"
                        >
                            {/* Mission Preview Image */}
                            <div className="relative h-64 overflow-hidden m-3 rounded-sm border border-grid-line">
                                <img
                                    loading="lazy"
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-terminal-black via-transparent to-transparent opacity-80"></div>
                                
                                {/* Scanline Effect on Hover */}
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                                    style={{ 
                                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 240, 255, 0.1) 2px, rgba(0, 240, 255, 0.1) 4px)',
                                    }}
                                ></div>

                                {/* Access Button Overlay */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Magnetic strength={0.15}>
                                        <a 
                                            href={project.live} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="p-3 bg-terminal-black/80 backdrop-blur-sm border border-neon-cyan rounded-sm text-neon-cyan hover:bg-neon-cyan hover:text-terminal-black transition-all"
                                            aria-label="Access project"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </Magnetic>
                                </div>
                            </div>

                            {/* Mission Details */}
                            <div className="p-6 flex flex-col flex-grow space-y-4">
                                <h3 className="text-xl font-cyber font-black text-white uppercase tracking-tight leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-sm font-sans leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                
                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span 
                                            key={t} 
                                            className="px-3 py-1 bg-terminal-surface border border-grid-line rounded-sm text-[9px] text-gray-600 font-mono uppercase tracking-wider"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Access Archive Button */}
                                <Magnetic strength={0.1}>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-neon-cyan text-terminal-black font-cyber font-black text-[10px] uppercase tracking-[0.3em] rounded-sm hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all group/btn w-full border-2 border-neon-cyan"
                                    >
                                        [ ACCESS_ARCHIVE ]
                                        <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </a>
                                </Magnetic>
                            </div>
                        </CyberPanel>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
