
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="min-h-screen flex items-center justify-center py-24 relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                        Experience <span className="gradient-text">Timeline</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
                    <p className="text-gray-400 mt-6">
                        Internship and academic project experience
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-purple hidden md:block opacity-30"></div>

                    <div className="space-y-12">
                        {/* Internship Experience */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="md:flex items-center">
                                {/* Left Side Content */}
                                <div className="md:w-1/2 md:pr-12 md:text-right">
                                    <div className="glass-card p-6 rounded-2xl border-l-4 md:border-l-0 md:border-r-4 border-accent-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300 group">
                                        <div className="flex items-center justify-end gap-2 text-accent-cyan mb-2 md:justify-end justify-start">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm font-semibold tracking-wider">Sep 2025 - Present</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1 md:text-right text-left group-hover:text-accent-cyan transition-colors">
                                            Frontend Developer Intern
                                        </h3>
                                        <p className="text-blue-400 mb-4 md:text-right text-left font-medium">
                                            Internship Experience
                                        </p>
                                        <p className="text-gray-400 text-sm md:text-right text-left leading-relaxed">
                                            Worked on building responsive user interfaces using React and Tailwind CSS.
                                            Collaborated with team members to implement UI features, fix layout issues,
                                            and follow modern frontend development best practices.
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-4 md:justify-end justify-start">
                                            {['React', 'Tailwind CSS', 'JavaScript'].map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full text-xs text-accent-cyan">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                                    <div className="w-6 h-6 bg-space-900 rounded-full border-2 border-accent-cyan z-10 shadow-[0_0_10px_rgba(0,240,255,0.8)] relative">
                                        <div className="absolute inset-0 rounded-full bg-accent-cyan animate-ping opacity-25"></div>
                                    </div>
                                </div>

                                {/* Right Side Spacer */}
                                <div className="md:w-1/2 md:pl-12"></div>
                            </div>
                        </motion.div>

                        {/* College Project Experience */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative"
                        >
                            <div className="md:flex items-center">
                                {/* Left Side Spacer */}
                                <div className="md:w-1/2 md:pr-12"></div>

                                {/* Center Node */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                                    <div className="w-6 h-6 bg-space-900 rounded-full border-2 border-accent-purple z-10 shadow-[0_0_10px_rgba(112,0,255,0.8)] relative">
                                        <div className="absolute inset-0 rounded-full bg-accent-purple animate-ping opacity-25"></div>
                                    </div>
                                </div>

                                {/* Right Side Content */}
                                <div className="md:w-1/2 md:pl-12">
                                    <div className="glass-card p-6 rounded-2xl border-l-4 border-accent-purple hover:shadow-[0_0_20px_rgba(112,0,255,0.15)] transition-all duration-300 group">
                                        <div className="flex items-center gap-2 text-accent-purple mb-2">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm font-semibold tracking-wider">5 Months</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent-purple transition-colors">
                                            Academic Project
                                        </h3>
                                        <p className="text-blue-400 mb-4 font-medium">
                                            Hindusthan Institute of Technology
                                        </p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Contributed to the development of the college website as part of a
                                            student team under faculty guidance. Focused on building responsive
                                            layouts, implementing navigation, and maintaining UI consistency.
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {['React', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-accent-purple/10 border border-accent-purple/20 rounded-full text-xs text-accent-purple">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
