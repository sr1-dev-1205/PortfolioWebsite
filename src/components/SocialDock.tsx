import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialDock: React.FC = () => {
    const socialLinks = [
        {
            icon: Github,
            logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
            href: 'https://github.com/sr1-dev-1205',
            label: 'GitHub',
            className: 'invert' // Invert colors for GitHub logo (black -> white)
        },
        {
            icon: Linkedin,
            logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg',
            href: 'https://www.linkedin.com/in/sridhar1208-dev',
            label: 'LinkedIn',
        },
        {
            icon: Mail,
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg', // Wikimedia Commons Gmail Logo
            href: 'mailto:sridhars200612@gmail.com',
            label: 'Email',
        }
    ];

    return (
        <ul className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
                <li key={index}>
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block w-14 h-14 bg-terminal-surface rounded-sm border border-grid-line shadow-lg overflow-hidden flex items-center justify-center transition-all duration-500 ease-in-out hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                        title={link.label}
                    >
                        {/* Default Icon (Gray) */}
                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                             <link.icon 
                                className="w-6 h-6 text-gray-400" 
                            />
                        </div>

                        {/* Hover Logo (Original Color) */}
                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                            <img 
                                src={link.logoUrl} 
                                alt={link.label}
                                className={`w-6 h-6 object-contain ${link.className || ''}`}
                            />
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialDock;
