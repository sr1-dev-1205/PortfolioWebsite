
import React from 'react';
import SocialDock from './SocialDock';

const Footer: React.FC = () => {
    return (
        <footer className="bg-terminal-black py-20 relative overflow-hidden border-t border-grid-line">
            {/* Subtle Terminal Grid */}
            <div className="absolute inset-0 opacity-20">
                <div 
                    className="w-full h-full"
                    style={{ 
                        backgroundSize: '60px 60px',
                        backgroundImage: 'linear-gradient(to right, rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.03) 1px, transparent 1px)'
                    }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 pb-8 md:pb-12">
                    {/* Brand Identity */}
                    <div className="space-y-3 sm:space-y-4 text-center md:text-left">
                        <div className="text-xl sm:text-2xl font-cyber font-black tracking-tighter text-white uppercase">
                            SRIDHAR<span className="neon-text-cyan">.</span>DEV
                        </div>
                        <p className="text-gray-400 text-[9px] sm:text-[10px] font-mono max-w-xs uppercase tracking-[0.3em]">
                            //_PORTFOLIO_v3.0.1
                        </p>
                    </div>

                    {/* Social Links - Terminal Style */}
                    <div>
                        <SocialDock />
                    </div>
                </div>

                {/* System Status Bar */}
                <div className="pt-6 sm:pt-8 border-t border-grid-line flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-[8px] sm:text-[9px] text-gray-400 font-mono uppercase tracking-[0.3em]">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <span className="flex items-center gap-2">
                            <span className="text-neon-green">●</span>
                            [SYS] ONLINE
                        </span>
                        <span>© 2026 SRIDHAR</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <span>MADE_IN: INDIA</span>
                        <span>REACH: WORLDWIDE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
