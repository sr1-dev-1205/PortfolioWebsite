
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';
import CyberPanel from './CyberPanel';

const Experience: React.FC = () => {
    const experiences = [
        {
            title: "Frontend Developer Intern",
            company: "Internship Experience",
            period: "Sep 2025 - Present",
            description: "Working on building responsive user interfaces using React and Tailwind CSS. Collaborated with team members to implement UI features, fix layout issues, and follow modern frontend development best practices.",
            icon: Briefcase,
            color: "#00F0FF",
            tech: ['React', 'Tailwind CSS', 'JavaScript']
        },
        {
            title: "Academic Project",
            company: "Hindusthan Institute of Technology",
            period: "5 Months",
            description: "Contributed to the development of the college website as part of a student team under faculty guidance. Focused on building responsive layouts, implementing navigation, and maintaining UI consistency.",
            icon: GraduationCap,
            color: "#7000FF",
            tech: ['React', 'TypeScript', 'Tailwind CSS']
        }
    ];

    return (
        <section id="experience" className="py-24 relative overflow-hidden">
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
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600">// CAREER_TIMELINE</span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-neon-cyan"></div>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-black uppercase tracking-tighter neon-text-cyan mb-4">
                        EXPERIENCE_LOG.DAT
                    </h2>
                    <p className="text-sm text-gray-500 font-mono">// System capability progression records</p>
                </motion.div>

                <div className="relative">
                    {/* Central Vertical Line - Neon */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-magenta to-transparent hidden md:block opacity-20 shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>

                    <div className="space-y-24">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row items-center justify-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content Card */}
                                <div className="w-full md:w-[45%]">
                                    <CyberPanel
                                        label={`PHASE_${index + 1}`}
                                        status="active"
                                        corner="all"
                                        glowColor={`${exp.color}40`}
                                        className="group"
                                    >
                                        <div className="p-8 space-y-6">
                                            <div className="flex items-center gap-4">
                                                <div 
                                                    className="p-4 bg-terminal-black rounded-sm border-2 group-hover:scale-110 transition-transform duration-500"
                                                    style={{ borderColor: exp.color }}
                                                >
                                                    <exp.icon className="w-5 h-5" style={{ color: exp.color }} />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-cyber font-black text-white uppercase tracking-tight">{exp.title}</h3>
                                                    <div className="text-neon-cyan font-mono text-[9px] uppercase tracking-[0.3em] mt-1">{exp.company}</div>
                                                </div>
                                            </div>
                                            
                                            <p className="text-gray-500 text-sm font-sans leading-relaxed">
                                                {exp.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {exp.tech.map((t) => (
                                                    <span 
                                                        key={t} 
                                                        className="px-3 py-1.5 bg-terminal-surface border border-grid-line rounded-sm text-[9px] text-gray-600 font-mono uppercase tracking-wider hover:text-white hover:border-neon-cyan/50 transition-all cursor-default"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                            
                                            <div className="flex items-center gap-2 pt-4 border-t border-grid-line">
                                                <Calendar className="w-4 h-4 text-neon-cyan" />
                                                <span className="text-[9px] text-gray-600 font-mono uppercase tracking-widest">{exp.period}</span>
                                            </div>
                                        </div>
                                    </CyberPanel>
                                </div>

                                {/* Central Node - Glowing */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20">
                                    <div 
                                        className="w-5 h-5 rounded-full bg-terminal-black border-2 shadow-[0_0_30px] transition-all"
                                        style={{ 
                                            borderColor: exp.color, 
                                            boxShadow: `0 0 30px ${exp.color}80, inset 0 0 10px ${exp.color}60` 
                                        }}
                                    ></div>
                                </div>

                                {/* Date/Side Label - Neon Style */}
                                <div className="w-full md:w-[45%] hidden md:block">
                                    <div className={`text-7xl font-cyber font-black uppercase tracking-tighter opacity-[0.03] ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                        {exp.period.split('-')[0].trim()}
                                    </div>
                                    <div className={`text-[10px] font-mono font-bold uppercase tracking-[0.4em] mt-2 flex items-center gap-2 ${index % 2 === 0 ? 'justify-start ml-2' : 'justify-end mr-2'}`}>
                                        <span style={{ color: exp.color }}>▶</span>
                                        <span className="text-gray-700">PHASE_{index + 1}_ACTIVE</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
