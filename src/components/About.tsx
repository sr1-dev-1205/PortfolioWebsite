import React from 'react';
import { Brush, Layout, Smartphone, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass-card p-8 rounded-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-accent-cyan/20"></div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                                I am a <span className="text-accent-cyan font-medium">3rd year Computer Science Engineering student</span> with a strong interest in frontend
                                development and modern web technologies. I enjoy building responsive, user-friendly
                                interfaces that focus on clean design and smooth user experience.
                            </p>

                            <p className="text-gray-300 text-lg leading-relaxed font-light">
                                Currently, I am gaining practical experience as a <span className="text-accent-purple font-medium">Frontend Developer Intern</span>, where I work
                                with React and Tailwind CSS. Alongside my internship, I actively build academic and personal projects to strengthen my skills.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="glass-card p-6 rounded-xl hover:border-accent-cyan/50 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="text-4xl font-bold text-accent-cyan mb-2">5+</div>
                                <div className="text-gray-400 text-sm tracking-widest uppercase">Projects Built</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="glass-card p-6 rounded-xl hover:border-accent-blue/50 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="text-2xl font-bold text-accent-blue mb-2">Sep 2025</div>
                                <div className="text-gray-400 text-sm tracking-widest uppercase">Internship Started</div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            {
                                Icon: Brush,
                                title: 'Clean UI',
                                desc: 'Readable & Structured',
                                color: 'text-accent-cyan',
                                bg: 'bg-accent-cyan/10',
                                border: 'border-accent-cyan/20'
                            },
                            {
                                Icon: Layout,
                                title: 'Frontend Focus',
                                desc: 'React • TS • Tailwind',
                                color: 'text-accent-blue',
                                bg: 'bg-accent-blue/10',
                                border: 'border-accent-blue/20'
                            },
                            {
                                Icon: Smartphone,
                                title: 'Responsive',
                                desc: 'Mobile-first Design',
                                color: 'text-accent-purple',
                                bg: 'bg-accent-purple/10',
                                border: 'border-accent-purple/20'
                            },
                            {
                                Icon: TrendingUp,
                                title: 'Growth',
                                desc: 'Continuous Learning',
                                color: 'text-accent-pink',
                                bg: 'bg-accent-pink/10',
                                border: 'border-accent-pink/20'
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                className={`p-6 rounded-xl border glass-card hover:bg-space-800 transition-all duration-300 transform hover:scale-105 group ${item.border} flex flex-col items-center text-center md:items-start md:text-left`}
                            >
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                                    <item.Icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
