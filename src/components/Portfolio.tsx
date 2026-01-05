
import React from 'react';
import collegeImg from '../Assets/projects/Hitech.png';
import aarogyaImg from '../Assets/projects/AarogyaJal.png';
import portfolioImg from '../Assets/projects/Portfolio.png';

const Portfolio: React.FC = () => {
    const projects = [
        {
            title: 'College Website – Hindusthan Institute of Technology',
            description: 'Developed the complete frontend of the college website...',
            tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
            color: 'cyan',
            hex: '#00F0FF',
            live: 'https://hitechcse.netlify.app',
            image: collegeImg
        },
        {
            title: 'Aarogya Jal – Water Contamination Prevention System',
            description: 'Built a prototype solution for Smart India Hackathon...',
            tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
            color: 'blue',
            hex: '#2D5AF5',
            live: 'https://pixel-pirates-beta.vercel.app',
            image: aarogyaImg
        },
        {
            title: 'Personal Portfolio Website',
            description: 'Designed and developed a responsive personal portfolio...',
            tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
            color: 'purple',
            hex: '#7000FF',
            live: 'https://sridhar-dev-portfolio.vercel.app',
            image: portfolioImg
        }
    ];

    return (
        <section id="portfolio" className="min-h-screen flex items-center justify-center py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-20 animate-fadeInUp">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                        My <span className="gradient-text">Portfolio</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="group relative glass-card rounded-2xl overflow-hidden animate-fadeInUp flex flex-col h-full"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className={`absolute inset-0 bg-space-900/50 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0 z-10`}></div>
                                <img
                                    loading="lazy"
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />

                                {/* Overlay Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-space-900 to-transparent opacity-80`}></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow relative z-20">
                                <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-${project.color}-500 to-transparent opacity-50`}></div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-cyan transition-colors duration-300 leading-tight">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-6 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(tech => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-cyan/50 text-center rounded-xl font-semibold transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] text-white"
                                    >
                                        View Project
                                    </a>
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
