import React from 'react';
import { Shield, Target, Coffee, Globe, Zap, User } from 'lucide-react';
import { motion } from 'framer-motion';

import CyberPanel from './CyberPanel';

const About: React.FC = () => {
    const stats = [
        { label: 'Education', value: '3rd Year', icon: Shield },
        { label: 'Projects', value: '5+', icon: Target },
        { label: 'Coffee', value: 'Infinite', icon: Coffee },
        { label: 'Status', value: 'Freelancer', icon: Globe }
    ];

    const values = [
        {
            title: "Performance First",
            desc: "Optimizing every byte for the fastest possible load times.",
            icon: Zap,
            color: "text-accent-cyan"
        },
        {
            title: "Accessible Design",
            desc: "Inclusive interfaces that work for everyone, everywhere.",
            icon: User,
            color: "text-accent-purple"
        }
    ];

    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gray-400">// SYSTEM_MODULE</span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-neon-cyan"></div>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-black uppercase tracking-tighter neon-text-cyan mb-4">
                        PROFILE.SYS
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 font-mono">// Engineer identity and core parameters loaded</p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-accent-cyan font-mono text-sm tracking-widest uppercase flex items-center gap-2">
                                <span className="w-8 h-px bg-accent-cyan/50"></span>
                                About Me
                            </h2>
                            <h2 className="text-4xl md:text-5xl font-cyber font-black leading-tight tracking-tighter section-header-glow">
                                Architecting Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Digital Solutions.</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-100 text-lg leading-relaxed font-sans max-w-3xl border-l-2 border-neon-cyan pl-6">
                            <p className="font-mono text-sm text-neon-cyan uppercase tracking-widest mb-4 font-bold">&gt; IDENTITY_LOG:</p>
                            <p>
                                Passionate <span className="text-neon-cyan font-bold">CS Engineer</span> & <span className="text-neon-magenta font-bold">Frontend Architect</span> crafting high-performance digital experiences. Specializing in intuitive interfaces and clean code.
                            </p>

                            <p>
                                Bridging the gap between <span className="text-gray-300 font-bold">complex systems</span> and <span className="text-white font-bold">seamless user experiences</span>.
                            </p>
                        </div>

                        {/* Stats Grid - Data Modules */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4">
                            {stats.map((stat, index) => (
                                <CyberPanel
                                    key={index}
                                    status="active"
                                    corner="tl"
                                    className="group"
                                >
                                    <div className="p-4 sm:p-6 space-y-3">
                                        <stat.icon className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform duration-500" />
                                        <div className="text-lg sm:text-xl md:text-2xl font-cyber font-black text-white">{stat.value}</div>
                                        <div className="text-[9px] text-gray-400 uppercase tracking-tight font-mono">{stat.label}</div>
                                    </div>
                                </CyberPanel>
                            ))}
                        </div>
                    </motion.div>

                    {/* Side Panels - Core Values */}
                    <div className="w-full lg:w-80 space-y-4">
                        {values.map((v, i) => (
                            <CyberPanel
                                key={i}
                                status={i === 0 ? 'active' : 'standby'}
                                corner="all"
                                glowColor={v.color === 'text-accent-cyan' ? 'rgba(0, 240, 255, 0.3)' : 'rgba(160, 32, 240, 0.3)'}
                                className="group"
                            >
                                <div className="p-6 space-y-4">
                                    <div className={`p-3 rounded-sm bg-terminal-black w-fit ${v.color} group-hover:scale-110 transition-transform duration-500`}>
                                        <v.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-cyber font-black text-white uppercase tracking-wider">{v.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed font-sans">{v.desc}</p>
                                </div>
                            </CyberPanel>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
