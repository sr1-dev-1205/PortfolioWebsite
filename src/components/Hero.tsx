import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
    scrollToSection: (sectionId: string) => void;
    resumePdf: string;
    profileImg: string;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection, resumePdf, profileImg }) => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative md:overflow-hidden pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center md:text-left space-y-8 animate-fadeInUp relative z-20">
                        <div className="inline-block relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <span className="relative px-4 py-2 bg-black rounded-full border border-accent-cyan/30 text-accent-cyan text-sm font-medium tracking-wider flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
                                Welcome to my portfolio
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="block text-gray-300 text-2xl sm:text-3xl mb-4 font-light tracking-wide">Hi, I'm</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-accent-cyan to-accent-blue animate-gradient bg-300% drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                                Sridhar
                            </span>
                        </h1>

                        <div className="space-y-4">
                            <p className="text-xl sm:text-2xl text-gray-300 font-light flex items-center justify-center md:justify-start gap-3">
                                <span className="text-accent-cyan">&lt;</span>
                                Frontend Developer
                                <span className="text-accent-cyan">/&gt;</span>
                                <span className="text-sm text-gray-500">|</span>
                                <span className="text-accent-purple">MERN Stack Learner</span>
                            </p>

                            <div className="text-accent-cyan/80 text-sm tracking-[0.2em] uppercase font-semibold">
                                Learning • Building • Growing
                            </div>
                        </div>

                        <p className="text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed text-lg backdrop-blur-sm bg-black/20 p-4 rounded-xl border-l-2 border-accent-cyan/50">
                            Frontend-focused developer building clean, responsive, and user-friendly web interfaces
                            using modern technologies. Currently expanding my skills toward the MERN stack.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start pt-6">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="group relative px-8 py-4 bg-transparent border border-accent-cyan/50 text-accent-cyan font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:border-accent-cyan"
                            >
                                <div className="absolute inset-0 w-0 bg-accent-cyan transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                                <span className="relative flex items-center gap-2">Contact Me</span>
                            </button>

                            <a
                                href={resumePdf}
                                download
                                className="group px-8 py-4 bg-white/5 border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md hover:border-white/30"
                            >
                                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                                <span>Download Resume</span>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 justify-center md:justify-start pt-6">
                            {[
                                { Icon: Github, color: 'text-white hover:text-accent-cyan', href: 'https://github.com/sr1-dev-1205' },
                                { Icon: Linkedin, color: 'text-white hover:text-accent-blue', href: 'https://www.linkedin.com/in/sridhar1208-dev' },
                                { Icon: Mail, color: 'text-white hover:text-accent-purple', href: 'mailto:sridhars200612@gmail.com' }
                            ].map(({ Icon, color, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`relative p-3 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 hover:scale-110 hover:border-white/30 group ${color}`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <Icon className="w-6 h-6 relative z-10" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Image/Visual Content */}
                    <div className="relative flex justify-center perspective-1000 animate-fadeInUp delay-200 z-10">
                        {/* Orbiting Elements - Subtler decorative background instead of full planet */}
                        <div className="absolute w-full md:w-[120%] h-full md:h-[120%] border border-accent-cyan/10 rounded-full animate-spin-slow pointer-events-none"></div>
                        <div className="absolute w-[90%] h-[90%] border border-accent-purple/10 rounded-full animate-spin pointer-events-none" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>

                        <div className="relative group w-full max-w-[18rem] sm:max-w-none sm:w-96 aspect-square mx-auto overflow-visible">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow"></div>

                            {/* Profile Image Container */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 group-hover:border-accent-cyan/50 transition-all duration-500 transform group-hover:scale-105 shadow-2xl bg-space-900">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-900/40 z-10"></div>
                                <img
                                    loading="lazy"
                                    src={profileImg}
                                    alt="Sridhar Profile"
                                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-0 -right-0 glass-card px-6 py-3 rounded-full animate-float-medium z-20 border border-accent-cyan/20">
                                <div className="flex items-center gap-3">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    <span className="text-sm font-semibold text-white tracking-wide">Open to Work</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onClick={() => scrollToSection('about')}>
                <div className="w-6 h-10 border-2 border-accent-cyan rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-accent-cyan rounded-full animate-fade-down"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
