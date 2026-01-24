
import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import CyberPanel from './CyberPanel';

interface TechSkill {
    name: string;
    category: string;
    color: string;
    logo: string;
    className?: string;
}

const Skills: React.FC = () => {
    const techStack: TechSkill[] = [
        { name: 'HTML5', category: 'HTML', color: '#E34F26', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS3', category: 'CSS', color: '#1572B6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'JavaScript', category: 'JavaScript', color: '#F7DF1E', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', category: 'TypeScript', color: '#3178C6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'React', category: 'React', color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Node.js', category: 'Node.js', color: '#339933', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
        { name: 'Tailwind', category: 'Tailwind', color: '#38B2AC', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Git', category: 'Version Control', color: '#F05032', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'Next.js', category: 'Next.js', color: '#000000', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', className: 'invert' },
        { name: 'Express.js', category: 'Express.js', color: '#000000', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', className: 'invert' },
        { name: 'MongoDB', category: 'MongoDB', color: '#47A248', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
        { name: 'Redis', category: 'Redis', color: '#DC382D', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' }
    ];

    return (
        <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                {/* Terminal Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-20"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-neon-cyan"></div>
                        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-gray-400">// EQUIPPED_MODULES</span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-neon-cyan"></div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cyber font-black uppercase tracking-tighter neon-text-cyan mb-4">
                        TECH_STACK.DAT
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-300 font-mono">// Loading installed technology modules...</p>
                </motion.div>

                {/* Primary Tech Stack - Equipped Modules */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-12 md:mb-16">
                    {techStack.map((tech, index) => (
                        <CyberPanel
                            key={tech.name}
                            label={`MOD_${index + 1}`}
                            status="active"
                            statusClassName="hidden sm:block"
                            corner="tl"
                            glowColor={`${tech.color}40`}
                            className="group"
                        >
                            <div className="p-3 sm:p-6 md:p-8 space-y-3 sm:space-y-4 flex flex-col items-center justify-center">
                                <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <img 
                                        src={tech.logo} 
                                        alt={tech.name}
                                        className={`w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_var(--glow-color)] transition-all duration-500 ${tech.className || ''}`}
                                        style={{ '--glow-color': tech.color } as React.CSSProperties}
                                    />
                                </div>
                                <div className="text-[8px] sm:text-[9px] text-gray-400 uppercase tracking-wider font-mono">{tech.category}</div>
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
                    <div className="p-5 sm:p-6 md:p-8">
                        <h3 className="text-base sm:text-lg font-cyber font-black text-white uppercase tracking-wider mb-4 sm:mb-6 flex items-center gap-3">
                            <span className="text-neon-yellow">▶</span>
                            AUXILIARY SYSTEMS
                        </h3>
                        <div className="flex flex-wrap gap-2 sm:gap-2.5">
                            {['npm', 'VS Code', 'Netlify', 'Vercel', 'C Programming', 'Python', 'Vite', 'Java', 'AI Tools', 'Figma', 'Problem Solving'].map((skill, index) => (
                                <Magnetic key={index} strength={0.1}>
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.03 }}
                                        viewport={{ once: true }}
                                        className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-terminal-surface border border-grid-line rounded-sm text-[10px] sm:text-xs text-gray-400 hover:text-neon-yellow hover:border-neon-yellow/50 transition-all font-mono uppercase tracking-wider cursor-default text-center"
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
