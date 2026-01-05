
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black/50 backdrop-blur-md border-t border-white/5 py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center space-y-6">
                    <div className="flex justify-center gap-6">
                        {[
                            {
                                Icon: Github,
                                href: 'https://github.com/sr1-dev-1205',
                                label: 'GitHub',
                                color: 'hover:text-white',
                                bg: 'hover:bg-white/10'
                            },
                            {
                                Icon: Linkedin,
                                href: 'https://www.linkedin.com/in/sridhar1208-dev',
                                label: 'LinkedIn',
                                color: 'hover:text-blue-400',
                                bg: 'hover:bg-blue-500/10'
                            },
                            {
                                Icon: Mail,
                                href: 'mailto:sridhars200612@gmail.com',
                                label: 'Email',
                                color: 'hover:text-emerald-400',
                                bg: 'hover:bg-emerald-500/10'
                            }
                        ].map(({ Icon, href, label, color, bg }, index) => (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 transform hover:scale-110 ${color} ${bg}`}
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                    <div className="space-y-2">
                        <p className="text-gray-400 text-sm">
                            © 2025 Sridhar. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-xs flex items-center justify-center gap-2">
                            <span>Built with React</span>
                            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                            <span>TypeScript</span>
                            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                            <span>Tailwind CSS</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Background Decorative */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent"></div>
        </footer>
    );
};

export default Footer;
