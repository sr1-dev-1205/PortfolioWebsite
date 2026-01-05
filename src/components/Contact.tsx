
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import Planet from './Planet';

interface ContactProps {
    formStatus: string;
    handleContactSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Contact: React.FC<ContactProps> = ({ formStatus, handleContactSubmit }) => {
    const [isFormFocused, setIsFormFocused] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Once loaded, keep it loaded
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-accent-purple/10 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column: Content + Form */}
                    <div>
                        <div className="mb-12 animate-fadeInUp text-center md:text-left">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                                Get In <span className="gradient-text">Touch</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)] mx-auto md:mx-0"></div>
                            <p className="text-gray-400 mt-6 text-lg">
                                Have a project in mind? Let's work together to create something amazing!
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="grid grid-cols-3 gap-4 mb-10">
                            {[
                                {
                                    Icon: Mail,
                                    title: 'Email',
                                    color: 'text-emerald-400',
                                    hoverColor: 'group-hover:text-emerald-300',
                                    border: 'hover:border-emerald-500/50',
                                    bg: 'hover:bg-emerald-500/10',
                                    href: 'mailto:sridhars200612@gmail.com'
                                },
                                {
                                    Icon: Github,
                                    title: 'GitHub',
                                    color: 'text-gray-300',
                                    hoverColor: 'group-hover:text-white',
                                    border: 'hover:border-white/50',
                                    bg: 'hover:bg-white/10',
                                    href: 'https://github.com/sr1-dev-1205'
                                },
                                {
                                    Icon: Linkedin,
                                    title: 'LinkedIn',
                                    color: 'text-blue-400',
                                    hoverColor: 'group-hover:text-blue-300',
                                    border: 'hover:border-blue-500/50',
                                    bg: 'hover:bg-blue-500/10',
                                    href: 'https://www.linkedin.com/in/sridhar1208-dev'
                                }
                            ].map((contact, index) => (
                                <a
                                    key={contact.title}
                                    href={contact.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Contact via ${contact.title}`}
                                    className="block"
                                >
                                    <div
                                        className={`glass-card p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group ${contact.border} ${contact.bg} animate-fadeInUp flex flex-col items-center justify-center h-full`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <contact.Icon className={`w-6 h-6 ${contact.color} ${contact.hoverColor} transition-colors mb-2`} />
                                        <span className="text-sm font-semibold text-gray-300 hidden sm:block">{contact.title}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Contact Form */}
                        <div className="glass-card p-8 rounded-2xl border-t border-white/10 relative overflow-hidden animate-fadeInUp delay-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 pointer-events-none"></div>

                            {formStatus === 'success' && (
                                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 animate-fadeInUp">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    ✅ Thanks for reaching out! I’ll get back to you soon.
                                </div>
                            )}

                            {formStatus === 'error' && (
                                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center gap-3 animate-fadeInUp">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                    ❌ Something went wrong. Please try again later.
                                </div>
                            )}

                            <form
                                action="https://formspree.io/f/mjgvpajl"
                                method="POST"
                                onSubmit={handleContactSubmit}
                                onFocus={() => setIsFormFocused(true)}
                                onBlur={() => setIsFormFocused(false)}
                                className="space-y-6 relative z-10"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <input type="hidden" name="_subject" value="New message from Portfolio Website" />
                                        <label className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-accent-cyan transition-colors">Name</label>
                                        <input
                                            name="name"
                                            type="text"
                                            className="w-full px-4 py-3 bg-space-900/50 border border-slate-700 rounded-xl focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-all duration-300 placeholder-gray-600 text-white"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-accent-cyan transition-colors">Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            className="w-full px-4 py-3 bg-space-900/50 border border-slate-700 rounded-xl focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-all duration-300 placeholder-gray-600 text-white"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-accent-cyan transition-colors">Subject</label>
                                    <input
                                        name="subject"
                                        type="text"
                                        className="w-full px-4 py-3 bg-space-900/50 border border-slate-700 rounded-xl focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-all duration-300 placeholder-gray-600 text-white"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-accent-cyan transition-colors">Message</label>
                                    <textarea
                                        name="message"
                                        rows={6}
                                        className="w-full px-4 py-3 bg-space-900/50 border border-slate-700 rounded-xl focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-all duration-300 resize-none placeholder-gray-600 text-white"
                                        placeholder="Your message..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === 'loading'}
                                    className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all duration-300 relative overflow-hidden group
                                ${formStatus === 'loading'
                                            ? 'bg-slate-700 cursor-not-allowed opacity-70'
                                            : 'bg-gradient-to-r from-accent-cyan via-blue-600 to-accent-purple hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-[1.02]'
                                        } `}
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    <span className="relative flex items-center justify-center gap-2">
                                        {formStatus === 'loading' ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Interactive Planet */}
                    <div className="flex justify-center items-center relative min-h-[300px] lg:min-h-[400px]">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent-purple/5 blur-[100px] rounded-full pointer-events-none"></div>
                        <div className={`transition-all duration-700 ${isFormFocused ? 'scale-90 opacity-80 blur-[1px]' : 'scale-100 opacity-100'} `}>
                            {isVisible && (
                                <Planet
                                    size={500}
                                    isPaused={isFormFocused}
                                    className="cursor-grab active:cursor-grabbing w-full max-w-[260px] aspect-square sm:max-w-[400px] lg:max-w-[500px] !h-auto"
                                />
                            )}
                        </div>

                        {/* Decorative Orbital Rings */}
                        <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow pointer-events-none scale-125 opacity-30"></div>
                    </div>

                </div>
            </div>

            {/* Scroll Observer for Planet Lazy Loading */}
            <div ref={sectionRef} className="absolute inset-0 pointer-events-none" />
        </section>
    );
};

export default Contact;

