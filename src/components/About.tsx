import React from 'react';
import { Shield, Target, Coffee, Globe, Zap, User } from 'lucide-react';
import { motion } from 'framer-motion';
import RevealText from './RevealText';
import CyberPanel from './CyberPanel';

const About: React.FC = () => {
    const stats = [
        { label: 'Year', value: '3rd Year', icon: Shield },
        { label: 'Projects', value: '5+', icon: Target },
        { label: 'Coffee', value: 'Infinite', icon: Coffee },
        { label: 'Clients', value: 'Open Source', icon: Globe }
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
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600">// SYSTEM_MODULE</span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-neon-cyan"></div>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-black uppercase tracking-tighter neon-text-cyan mb-4">
                        PROFILE.SYS
                    </h2>
                    <p className="text-sm text-gray-500 font-mono">// Engineer identity and core parameters loaded</p>
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
                            <RevealText 
                                text="Building the future of the web with clean architecture." 
                                className="text-4xl md:text-6xl font-display font-extrabold leading-tight tracking-tighter section-header-glow" 
                            />
                        </div>

                        <div className="space-y-6 text-gray-500 text-base leading-relaxed font-sans max-w-3xl border-l-2 border-grid-line pl-6">
                            <p className="font-mono text-xs text-gray-700 uppercase tracking-widest mb-4">&gt; IDENTITY_LOG:</p>
                            <p>
                                I am a <span className="text-neon-cyan font-semibold">3rd year Computer Science Engineering student</span> at Hindusthan Institute of Technology with a deep passion for frontend development. I specialize in building highly interactive and performance-driven web applications.
                            </p>

                            <p>
                                Currently, I am expanding my horizons as a <span className="text-neon-magenta font-semibold">Frontend Developer Intern</span>, where I leverage React and Tailwind CSS to solve real-world problems. My goal is to bridge the gap between complex backend systems and intuitive user interfaces.
                            </p>
                        </div>

                        {/* Stats Grid - Data Modules */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                            {stats.map((stat, index) => (
                                <CyberPanel
                                    key={index}
                                    status="active"
                                    corner="tl"
                                    className="group"
                                >
                                    <div className="p-6 space-y-3">
                                        <stat.icon className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform duration-500" />
                                        <div className="text-3xl font-cyber font-black text-white">{stat.value}</div>
                                        <div className="text-[9px] text-gray-600 uppercase tracking-[0.25em] font-mono">{stat.label}</div>
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
                                    <p className="text-xs text-gray-500 leading-relaxed font-sans">{v.desc}</p>
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
