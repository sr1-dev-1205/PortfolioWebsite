
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

interface NavbarProps {
    activeSection: string;
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-space-900/80 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer group" onClick={() => scrollToSection('home')}>
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-accent-cyan blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative w-10 h-10 bg-space-800 border border-accent-cyan/50 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                                    <Code2 className="w-6 h-6 text-accent-cyan" />
                                </div>
                            </div>
                            <span className="text-xl font-bold tracking-wider text-white">
                                Sridhar <span className="text-accent-cyan">Dev</span>
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300 group ${activeSection === item.toLowerCase() ? 'text-accent-cyan' : 'text-gray-300 hover:text-white'
                                        }`}
                                >
                                    {item}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-cyan transform origin-left transition-transform duration-300 ${activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        }`}></span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-300 focus:outline-none"
                        >
                            {isMenuOpen ? <X className="h-6 w-6 text-accent-cyan" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden absolute w-full bg-space-900/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-all duration-300 ${activeSection === item.toLowerCase()
                                    ? 'bg-accent-cyan/10 text-accent-cyan border-l-4 border-accent-cyan'
                                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
