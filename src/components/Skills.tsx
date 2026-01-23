
import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import CyberPanel from './CyberPanel';

const Skills: React.FC = () => {
    const techStack = [
        { name: 'HTML5', category: 'Frontend', color: '#E34F26' },
        { name: 'CSS3', category: 'Frontend', color: '#1572B6' },
        { name: 'JavaScript', category: 'Language', color: '#F7DF1E' },
        { name: 'TypeScript', category: 'Language', color: '#3178C6' },
        { name: 'React', category: 'Frontend', color: '#61DAFB' },
        { name: 'Node.js', category: 'Backend', color: '#339933' },
        { name: 'Tailwind', category: 'Styling', color: '#38B2AC' },
        { name: 'Git', category: 'Version Control', color: '#F05032' }
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                {/* Terminal Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-neon-cyan"></div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600">// EQUIPPED_MODULES</span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-neon-cyan"></div>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-black uppercase tracking-tighter neon-text-cyan mb-4">
                        TECH_STACK.DAT
                    </h2>
                    <p className="text-sm text-gray-500 font-mono">// Loading installed technology modules...</p>
                </motion.div>

                {/* Primary Tech Stack - Equipped Modules */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {techStack.map((tech, index) => (
                        <CyberPanel
                            key={tech.name}
                            label={`MOD_${index + 1}`}
                            status="active"
                            corner="tl"
                            glowColor={`${tech.color}40`}
                            className="group"
                        >
                            <div className="p-8 space-y-4">
                                <div 
                                    className="text-3xl font-cyber font-black text-white tracking-tighter group-hover:scale-105 transition-all duration-500"
                                    style={{ textShadow: `0 0 20px ${tech.color}40` }}
                                >
                                    {tech.name}
                                </div>
                                <div className="text-[9px] text-gray-600 uppercase tracking-[0.3em] font-mono">{tech.category}</div>
                            </div>
                        </CyberPanel>
                    ))}
                </div>

                {/* Additional Skills - Secondary Modules */}
                <CyberPanel
                    label="SECONDARY_MODULES"
                    status="standby"
                    corner="all"
                    glowColor="rgba(255, 234, 0, 0.2)"
                    className="mt-12"
                >
                    <div className="p-8">
                        <h3 className="text-lg font-cyber font-black text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                            <span className="text-neon-yellow">▶</span>
                            AUXILIARY SYSTEMS
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {['npm', 'VS Code', 'Netlify', 'Vercel', 'C Programming', 'Python', 'Vite', 'Java', 'AI Tools', 'Figma', 'Problem Solving'].map((skill, index) => (
                                <Magnetic key={index} strength={0.1}>
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.03 }}
                                        viewport={{ once: true }}
                                        className="px-5 py-2.5 bg-terminal-surface border border-grid-line rounded-sm text-xs text-gray-500 hover:text-neon-yellow hover:border-neon-yellow/50 transition-all font-mono uppercase tracking-wider cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                </Magnetic>
                            ))}
                        </div>
                    </div>
                </CyberPanel>
            </div>
        </section>
    );
};

export default Skills;
