import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import Planet from './Planet';
import Magnetic from './Magnetic';
import CyberPanel from './CyberPanel';

interface ContactProps {
    formStatus: string;
    handleContactSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Contact: React.FC<ContactProps> = ({ formStatus, handleContactSubmit }) => {
    const [isFormFocused, setIsFormFocused] = useState(false);

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
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
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600">// COMMUNICATION_PORT</span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-neon-cyan"></div>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-black uppercase tracking-tighter neon-text-cyan mb-4">
                        CONTACT.EXE
                    </h2>
                    <p className="text-sm text-gray-500 font-mono">// Establish secure communication channel</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-8">
                        {/* Contact Methods */}
                        <CyberPanel
                            label="CONTACT_INFO"
                            status="active"
                            corner="all"
                            glowColor="rgba(0, 240, 255, 0.3)"
                        >
                            <div className="p-8 space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 bg-terminal-black rounded-sm border border-neon-cyan">
                                        <Mail className="w-5 h-5 text-neon-cyan" />
                                    </div>
                                    <div>
                                        <div className="text-[9px] text-gray-600 uppercase tracking-[0.3em] font-mono">Email Protocol</div>
                                        <a href="mailto:sridhars200612@gmail.com" className="text-white hover:text-neon-cyan transition-colors text-sm font-mono">sridhars200612@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 bg-terminal-black rounded-sm border border-neon-magenta">
                                        <MapPin className="w-5 h-5 text-neon-magenta" />
                                    </div>
                                    <div>
                                        <div className="text-[9px] text-gray-600 uppercase tracking-[0.3em] font-mono">Geographic Location</div>
                                        <div className="text-white text-sm font-mono">India, Worldwide</div>
                                    </div>
                                </div>
                            </div>
                        </CyberPanel>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[
                                { Icon: Github, href: 'https://github.com/sr1-dev-1205', label: 'GITHUB' },
                                { Icon: Linkedin, href: 'https://www.linkedin.com/in/sridhar1208-dev', label: 'LINKEDIN' }
                            ].map((social, i) => (
                                <Magnetic key={i}>
                                    <a 
                                        href={social.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex-1 p-5 bg-terminal-surface border border-grid-line rounded-sm hover:border-neon-cyan transition-all group"
                                        title={social.label}
                                    >
                                        <social.Icon className="w-6 h-6 text-gray-500 group-hover:text-neon-cyan transition-colors mx-auto" />
                                        <div className="text-[8px] text-gray-700 uppercase tracking-widest font-mono text-center mt-2">{social.label}</div>
                                    </a>
                                </Magnetic>
                            ))}
                        </div>

                        {/* Decorative Element */}
                        <div className="relative pt-8 hidden lg:block">
                            <Planet
                                isPaused={isFormFocused}
                                className="w-full max-w-[300px] aspect-square grayscale opacity-30 hover:grayscale-0 hover:opacity-60 transition-all duration-1000"
                            />
                        </div>
                    </div>

                    {/* Right Column: Terminal Input Interface */}
                    <CyberPanel
                        label="INPUT_TERMINAL"
                        status="standby"
                        corner="all"
                        glowColor="rgba(0, 240, 255, 0.2)"
                    >
                        <form
                            action="https://formspree.io/f/mjgvpajl"
                            method="POST"
                            onSubmit={handleContactSubmit}
                            onFocus={() => setIsFormFocused(true)}
                            onBlur={() => setIsFormFocused(false)}
                            className="p-8 space-y-6"
                        >
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] text-gray-600 uppercase tracking-[0.3em] font-mono flex items-center gap-2">
                                            <span className="text-neon-cyan">&gt;</span> INPUT_NAME
                                        </label>
                                        <input
                                            name="name"
                                            type="text"
                                            className="w-full px-4 py-3 bg-terminal-black border border-grid-line rounded-sm focus:border-neon-cyan focus:bg-terminal-surface outline-none transition-all placeholder:text-gray-700 text-white font-mono text-sm"
                                            placeholder="john.doe"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] text-gray-600 uppercase tracking-[0.3em] font-mono flex items-center gap-2">
                                            <span className="text-neon-cyan">&gt;</span> INPUT_EMAIL
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            className="w-full px-4 py-3 bg-terminal-black border border-grid-line rounded-sm focus:border-neon-cyan focus:bg-terminal-surface outline-none transition-all placeholder:text-gray-700 text-white font-mono text-sm"
                                            placeholder="john@domain.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] text-gray-600 uppercase tracking-[0.3em] font-mono flex items-center gap-2">
                                        <span className="text-neon-cyan">&gt;</span> INPUT_SUBJECT
                                    </label>
                                    <input
                                        name="subject"
                                        type="text"
                                        className="w-full px-4 py-3 bg-terminal-black border border-grid-line rounded-sm focus:border-neon-cyan focus:bg-terminal-surface outline-none transition-all placeholder:text-gray-700 text-white font-mono text-sm"
                                        placeholder="Project inquiry"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] text-gray-600 uppercase tracking-[0.3em] font-mono flex items-center gap-2">
                                        <span className="text-neon-cyan">&gt;</span> INPUT_MESSAGE
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        className="w-full px-4 py-3 bg-terminal-black border border-grid-line rounded-sm focus:border-neon-cyan focus:bg-terminal-surface outline-none transition-all resize-none placeholder:text-gray-700 text-white font-mono text-sm leading-relaxed"
                                        placeholder="Describe your project requirements..."
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <Magnetic strength={0.1}>
                                <button
                                    type="submit"
                                    disabled={formStatus === 'loading'}
                                    className="w-full py-5 bg-neon-cyan text-terminal-black font-cyber font-black uppercase tracking-[0.3em] text-[10px] rounded-sm hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all disabled:opacity-50 flex items-center justify-center gap-3 group border-2 border-neon-cyan"
                                >
                                    {formStatus === 'loading' ? '[ TRANSMITTING... ]' : (
                                        <>
                                            [ TRANSMIT_SIGNAL ]
                                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </>
                                    )}
                                </button>
                            </Magnetic>

                            {formStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-terminal-black border border-neon-green rounded-sm"
                                >
                                    <p className="text-neon-green text-center text-[10px] font-mono tracking-[0.3em] uppercase flex items-center justify-center gap-2">
                                        <span className="animate-pulse">●</span>
                                        [OK] TRANSMISSION_COMPLETE
                                    </p>
                                </motion.div>
                            )}
                        </form>
                    </CyberPanel>
                </div>
            </div>
        </section>
    );
};

export default Contact;
