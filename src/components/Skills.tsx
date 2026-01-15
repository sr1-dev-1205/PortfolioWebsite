
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        Technologies I work with to build modern, scalable web applications
                    </p>
                </motion.div>

                {/* Tech Stack Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
                    {[
                        { name: 'HTML', category: 'Frontend', color: '#E34F26', svg: 'M13 2L3 9l10 7 10-7-10-7z M13 16L3 23l10 7 10-7-10-7z' },
                        { name: 'CSS', category: 'Frontend', color: '#1572B6', svg: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z' },
                        { name: 'React', category: 'Frontend', color: '#61DAFB', svg: 'M12 2a10 10 0 110 20 10 10 0 010-20z M12 6a6 6 0 100 12 6 6 0 000-12z' },
                        { name: 'Node.js', category: 'Backend', color: '#339933', svg: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z' },
                        { name: 'JavaScript', category: 'Language', color: '#F7DF1E', svg: 'M3 3h18v18H3V3z M12 12h6v6h-6v-6z' },
                        { name: 'TypeScript', category: 'Language', color: '#3178C6', svg: 'M3 3h18v18H3V3z M8 8v8h8V8H8z' },
                        { name: 'Tailwind', category: 'Styling', color: '#06B6D4', svg: 'M12 2L2 7v5c0 7 10 10 10 10s10-3 10-10V7L12 2z' },
                        { name: 'Git', category: 'Version Control', color: '#F05032', svg: 'M12 2L3 7v10l9 5 9-5V7l-9-5z M12 12l-6 3V9l6-3 6 3v6l-6-3z' }
                    ].map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative glass-card p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            style={{
                                ['--hover-color' as any]: tech.color
                            }}
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--hover-color)] to-[var(--hover-color)] rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 -z-10"></div>

                            <div className="relative z-10 flex flex-col items-center space-y-4">
                                <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-black/30 border border-white/5 group-hover:border-[var(--hover-color)] transition-all duration-300 group-hover:scale-110 shadow-lg">
                                    <svg
                                        className="w-8 h-8 transition-colors duration-300"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        style={{ color: tech.color }}
                                    >
                                        <path d={tech.svg} />
                                    </svg>
                                </div>

                                <div className="text-center">
                                    <h3 className="font-bold text-white group-hover:text-[var(--hover-color)] transition-colors duration-300 tracking-wide">
                                        {tech.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                                        {tech.category}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center relative"
                >
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>
                    <h3 className="text-2xl font-bold mb-8 text-gray-300 inline-block bg-space-900 px-4">Also Familiar With</h3>

                    <div className="flex flex-wrap justify-center gap-3">
                        {['npm', 'VS Code', 'Netlify', 'Vercel', 'C Programming', 'Python', 'Vite', 'Java', 'AI Tools', 'Figma'].map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.5 + (index * 0.05) }}
                                className="px-5 py-2 glass-card rounded-full text-sm text-gray-400 hover:text-white hover:border-accent-cyan/50 hover:bg-accent-cyan/10 transition-colors duration-300 transform hover:scale-110 cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
