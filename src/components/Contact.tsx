import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin } from 'lucide-react';
import Planet from './Planet';
import Magnetic from './Magnetic';
import CyberPanel from './CyberPanel';
import SocialDock from './SocialDock';
interface ContactProps {
    formStatus: string;
    handleContactSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}
const Contact: React.FC<ContactProps> = ({ formStatus, handleContactSubmit }) => {
    const [isFormFocused, setIsFormFocused] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};
        const form = e.currentTarget;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
        if (!name.trim()) newErrors.name = 'IDENTITY_REQUIRED';
        if (!email.trim()) {
            newErrors.email = 'CONTACT_VECTOR_MISSING';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'INVALID_PROTOCOL_FORMAT';
        }
        if (!message.trim()) newErrors.message = 'DATA_PACKET_EMPTY';
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            handleContactSubmit(e);
        }
    };
    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
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
                        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gray-500">// COMMUNICATION_PORT</span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-neon-cyan"></div>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-black uppercase tracking-tighter neon-text-cyan mb-4">
                        CONTACT.EXE
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 font-mono">// Establish secure communication channel</p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Moon Visualization */}
                    <div className="order-last lg:order-first h-full flex items-center justify-center lg:justify-start">
                         <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] aspect-square">
                            <Planet
                                isPaused={isFormFocused}
                                className="w-full h-full grayscale opacity-50 hover:grayscale-0 hover:opacity-80 transition-all duration-1000"
                            />
                        </div>
                    </div>
                    {/* Right Column - Interaction Interface Stack */}
                    <div className="space-y-6 md:space-y-8">
                        {/* 1. Contact Form */}
                        <CyberPanel
                            label="INPUT_TERMINAL"
                            status="active"
                            corner="all"
                            glowColor="rgba(0, 240, 255, 0.2)"
                        >
                            <form
                                action="https://formspree.io/f/mjgvpajl"
                                method="POST"
                                onSubmit={validateForm}
                                onFocus={() => setIsFormFocused(true)}
                                onBlur={() => setIsFormFocused(false)}
                                className="p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6"
                                noValidate
                            >
                                <div className="space-y-5 sm:space-y-6">
                                    {/* Name & Email Row - Stack on mobile, side-by-side on desktop */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-[0.3em] font-mono flex items-center gap-2">
                                                <span className="text-neon-cyan">&gt;</span> INPUT_NAME
                                            </label>
                                            <input
                                                name="name"
                                                type="text"
                                                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-terminal-black border rounded-sm focus:bg-terminal-surface outline-none transition-all placeholder:text-gray-600 text-white font-mono text-xs sm:text-sm ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-grid-line focus:border-neon-cyan'}`}
                                                placeholder="john.doe"
                                            />
                                            {errors.name && (
                                                <div className="text-[8px] sm:text-[9px] text-red-500 font-mono tracking-widest flex items-center gap-1 animate-pulse">
                                                    <span>!</span> [ERR]: {errors.name}
                                                </div>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-[0.3em] font-mono flex items-center gap-2">
                                                <span className="text-neon-cyan">&gt;</span> INPUT_EMAIL
                                            </label>
                                            <input
                                                name="email"
                                                type="email"
                                                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-terminal-black border rounded-sm focus:bg-terminal-surface outline-none transition-all placeholder:text-gray-600 text-white font-mono text-xs sm:text-sm ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-grid-line focus:border-neon-cyan'}`}
                                                placeholder="john@domain.com"
                                            />
                                            {errors.email && (
                                                <div className="text-[8px] sm:text-[9px] text-red-500 font-mono tracking-widest flex items-center gap-1 animate-pulse">
                                                    <span>!</span> [ERR]: {errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* Subject */}
                                    <div className="space-y-2">
                                        <label className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-[0.3em] font-mono flex items-center gap-2">
                                            <span className="text-neon-cyan">&gt;</span> INPUT_SUBJECT
                                        </label>
                                        <input
                                            name="subject"
                                            type="text"
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-terminal-black border border-grid-line rounded-sm focus:border-neon-cyan focus:bg-terminal-surface outline-none transition-all placeholder:text-gray-600 text-white font-mono text-xs sm:text-sm"
                                            placeholder="Project inquiry"
                                        />
                                    </div>
                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-[0.3em] font-mono flex items-center gap-2">
                                            <span className="text-neon-cyan">&gt;</span> INPUT_MESSAGE
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-terminal-black border rounded-sm focus:bg-terminal-surface outline-none transition-all resize-none placeholder:text-gray-600 text-white font-mono text-xs sm:text-sm leading-relaxed ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-grid-line focus:border-neon-cyan'}`}
                                            placeholder="Describe your project requirements..."
                                        ></textarea>
                                        {errors.message && (
                                            <div className="text-[8px] sm:text-[9px] text-red-500 font-mono tracking-widest flex items-center gap-1 animate-pulse">
                                                <span>!</span> [ERR]: {errors.message}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Submit Button - Full width, properly aligned */}
                                <Magnetic strength={0.1}>
                                    <button
                                        type="submit"
                                        disabled={formStatus === 'loading'}
                                        className="w-full py-4 sm:py-5 bg-neon-cyan text-terminal-black font-cyber font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[9px] sm:text-[10px] rounded-sm hover:shadow-[0_0_30px_rgba(0,240,255,0.8)] transition-all disabled:opacity-50 flex items-center justify-center gap-2 sm:gap-3 group border-2 border-neon-cyan"
                                    >
                                        {formStatus === 'loading' ? '[ PROCESSING... ]' : (
                                            <>
                                                [ TRANSMIT_SIGNAL ]
                                                <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                            </>
                                        )}
                                    </button>
                                </Magnetic>
                                {/* Success Message */}
                                {formStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-3 sm:p-4 bg-terminal-black border border-neon-green rounded-sm"
                                    >
                                        <p className="text-neon-green text-center text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase flex items-center justify-center gap-2">
                                            <span className="animate-pulse">●</span>
                                            [OK] TRANSMISSION_COMPLETE
                                        </p>
                                    </motion.div>
                                )}
                                {/* Error Message */}
                                {formStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-3 sm:p-4 bg-red-900/20 border border-red-500 rounded-sm relative overflow-hidden group"
                                    >
                                        {/* Glitch Overlay */}
                                        <div className="absolute inset-0 opacity-10 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover mix-blend-overlay pointer-events-none"></div>
                                        
                                        <div className="flex flex-col items-center justify-center gap-2 relative z-10">
                                            <p className="text-red-500 text-center text-[10px] sm:text-xs font-cyber font-bold tracking-[0.2em] uppercase flex items-center gap-2 animate-pulse">
                                                <span className="text-red-500">⚠</span>
                                                [ERR] TRANSMISSION_FAILED
                                            </p>
                                            <p className="text-red-400/80 text-[8px] sm:text-[9px] font-mono tracking-widest uppercase">
                                                // CHECK CONNECTION // RETRY_SEQUENCE
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </form>
                        </CyberPanel>
                        {/* 2. Contact Info & Social Links */}
                        <div className="space-y-6 md:space-y-8">
                             <CyberPanel
                                label="CONTACT_INFO"
                                status="active"
                                corner="all"
                                glowColor="rgba(0, 240, 255, 0.3)"
                            >
                                <div className="p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
                                    {/* Email */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group">
                                        <div className="p-2.5 sm:p-3 bg-terminal-black rounded-sm border border-neon-cyan flex-shrink-0">
                                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-neon-cyan" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.3em] font-mono mb-1">Email Protocol</div>
                                            <a href="mailto:sridhars200612@gmail.com" className="text-white hover:text-neon-cyan transition-colors text-xs sm:text-sm font-mono break-all">sridhars200612@gmail.com</a>
                                        </div>
                                    </div>
                                    
                                    {/* Location */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group">
                                        <div className="p-2.5 sm:p-3 bg-terminal-black rounded-sm border border-neon-magenta flex-shrink-0">
                                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-neon-magenta" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.3em] font-mono mb-1">Geographic Location</div>
                                            <div className="text-white text-xs sm:text-sm font-mono">India, Worldwide</div>
                                        </div>
                                    </div>
                                </div>
                            </CyberPanel>
                            {/* Social Dock */}
                            <SocialDock />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;