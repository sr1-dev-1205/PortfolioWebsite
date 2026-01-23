
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, User, Code, Briefcase, FolderRoot, Mail, X } from 'lucide-react';

interface CommandPaletteProps {
    scrollToSection: (sectionId: string) => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ scrollToSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);

    const commands = [
        { id: 'home', icon: Home, label: 'Go to Home', section: 'home' },
        { id: 'about', icon: User, label: 'About Me', section: 'about' },
        { id: 'skills', icon: Code, label: 'My Skills', section: 'skills' },
        { id: 'experience', icon: Briefcase, label: 'Work Experience', section: 'experience' },
        { id: 'portfolio', icon: FolderRoot, label: 'Portfolio Projects', section: 'portfolio' },
        { id: 'contact', icon: Mail, label: 'Get in Touch', section: 'contact' },
    ];

    const filteredCommands = commands.filter(cmd => 
        cmd.label.toLowerCase().includes(search.toLowerCase())
    );

    // Reset selection when search changes or opens
    useEffect(() => {
        setSelectedIndex(0);
    }, [search, isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            
            if (isOpen) {
                if (e.key === 'Escape') {
                    setIsOpen(false);
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    if (filteredCommands[selectedIndex]) {
                        handleCommand(filteredCommands[selectedIndex].section);
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredCommands, selectedIndex]);

    const handleCommand = (section: string) => {
        scrollToSection(section);
        setIsOpen(false);
        setSearch('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-4 border-b border-white/10 flex items-center gap-3">
                            <Search className="w-5 h-5 text-gray-500" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Type a command or search..."
                                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-500"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <div className="flex items-center gap-2">
                                <span className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-gray-400">ESC</span>
                                <button onClick={() => setIsOpen(false)}>
                                    <X className="w-4 h-4 text-gray-500 hover:text-white" />
                                </button>
                            </div>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto p-2">
                            {filteredCommands.length > 0 ? (
                                filteredCommands.map((cmd, index) => (
                                    <button
                                        key={cmd.id}
                                        onClick={() => handleCommand(cmd.section)}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                        className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-colors group text-left ${
                                            index === selectedIndex ? 'bg-white/10' : 'hover:bg-white/5'
                                        }`}
                                    >
                                        <div className={`p-2 rounded-lg transition-colors ${
                                            index === selectedIndex ? 'bg-accent-cyan/10 text-accent-cyan' : 'bg-white/5 group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan'
                                        }`}>
                                            <cmd.icon className="w-4 h-4" />
                                        </div>
                                        <span className={`font-medium transition-colors ${
                                            index === selectedIndex ? 'text-white' : 'text-gray-300 group-hover:text-white'
                                        }`}>{cmd.label}</span>
                                        <span className={`ml-auto text-[10px] uppercase tracking-widest transition-colors ${
                                            index === selectedIndex ? 'text-accent-cyan/50' : 'text-gray-600 group-hover:text-accent-cyan/50'
                                        }`}>Jump to</span>
                                    </button>
                                ))
                            ) : (
                                <div className="p-8 text-center text-gray-500">
                                    No commands found for "{search}"
                                </div>
                            )}
                        </div>

                        <div className="p-3 bg-white/[0.02] border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500">
                            <div className="flex gap-4">
                                <span>↑↓ to navigate</span>
                                <span>↵ to select</span>
                            </div>
                            <span>Built for Professionals</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
