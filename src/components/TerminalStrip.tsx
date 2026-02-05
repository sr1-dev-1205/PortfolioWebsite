import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

interface LogEntry {
    id: string;
    type: 'command' | 'success' | 'info' | 'warning' | 'deploy';
    content: string;
}

const TerminalStrip = () => {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const logIdCounter = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Terminal log templates - short versions for horizontal display
    const logTemplates = [
        { type: 'command' as const, content: '$ git push origin main' },
        { type: 'success' as const, content: '✓ Build successful' },
        { type: 'deploy' as const, content: '⚡ Deploying to production...' },
        { type: 'success' as const, content: '✓ Deployment complete' },
        { type: 'command' as const, content: '$ npm run test' },
        { type: 'success' as const, content: '✓ 42 tests passed' },
        { type: 'command' as const, content: '$ npm run build' },
        { type: 'info' as const, content: '◆ Building optimized bundle...' },
        { type: 'success' as const, content: '✓ Compiled successfully' },
        { type: 'command' as const, content: '$ git commit -m "feat: new feature"' },
        { type: 'success' as const, content: '✓ 1 file changed, 47 insertions(+)' },
        { type: 'info' as const, content: '◆ Running ESLint...' },
        { type: 'success' as const, content: '✓ No linting errors' },
        { type: 'deploy' as const, content: '⚡ Production: live' },
        { type: 'command' as const, content: '$ docker compose up -d' },
        { type: 'success' as const, content: '✓ Containers started' },
        { type: 'info' as const, content: '◆ MongoDB connected' },
        { type: 'command' as const, content: '$ npm install framer-motion' },
        { type: 'success' as const, content: '✓ Package installed' },
        { type: 'warning' as const, content: '⚠ Cache: 847 MB' },
        { type: 'info' as const, content: '◆ API latency: 42ms' },
        { type: 'success' as const, content: '✓ Database optimized' },
        { type: 'command' as const, content: '$ git pull origin develop' },
        { type: 'success' as const, content: '✓ Already up to date' },
    ];

    const addLog = () => {
        const template = logTemplates[Math.floor(Math.random() * logTemplates.length)];
        const newLog: LogEntry = {
            id: `log-${logIdCounter.current++}`,
            ...template
        };

        setLogs(prev => {
            const updated = [...prev, newLog];
            // Keep only last 20 logs for smooth infinite scroll
            return updated.slice(-20);
        });
    };

    useEffect(() => {
        // Initial logs
        addLog();
        setTimeout(addLog, 1000);
        setTimeout(addLog, 2000);
        setTimeout(addLog, 3000);

        // Continue adding logs at intervals
        const interval = setInterval(() => {
            addLog();
        }, Math.random() * 3000 + 2000); // 2-5 seconds

        return () => clearInterval(interval);
    }, []);

    const getLogColor = (type: LogEntry['type']) => {
        switch (type) {
            case 'command':
                return 'text-gray-400';
            case 'success':
                return 'text-neon-green';
            case 'info':
                return 'text-neon-cyan';
            case 'warning':
                return 'text-yellow-400';
            case 'deploy':
                return 'text-neon-blue';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div className="w-full bg-terminal-surface/50 backdrop-blur-sm border-y border-grid-line overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 py-3">
                    {/* Terminal Icon & Label */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neon-cyan" />
                        <span className="text-[8px] sm:text-[9px] font-mono font-bold text-neon-cyan uppercase tracking-[0.2em] hidden sm:inline">
                            LIVE_LOGS
                        </span>
                        <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-neon-green"
                        />
                    </div>

                    {/* Scrolling Logs Container */}
                    <div 
                        ref={containerRef}
                        className="flex-1 overflow-hidden relative"
                    >
                        <div className="flex items-center gap-6 animate-scroll-left">
                            {/* Duplicate logs for seamless infinite scroll */}
                            {[...logs, ...logs].map((log, index) => (
                                <motion.div
                                    key={`${log.id}-${index}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center gap-2 whitespace-nowrap flex-shrink-0"
                                >
                                    <span className="text-gray-600 text-[8px] sm:text-[9px] font-mono">
                                        [{new Date().toLocaleTimeString('en-US', { 
                                            hour12: false, 
                                            hour: '2-digit', 
                                            minute: '2-digit' 
                                        })}]
                                    </span>
                                    <span className={`${getLogColor(log.type)} font-mono text-[9px] sm:text-[10px]`}>
                                        {log.content}
                                    </span>
                                    <span className="text-grid-line">|</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Fade gradient on edges */}
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-terminal-surface/50 to-transparent pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-terminal-surface/50 to-transparent pointer-events-none" />
                    </div>

                    {/* Blinking Cursor */}
                    <motion.div
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-1.5 h-3.5 sm:h-4 bg-neon-cyan flex-shrink-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default TerminalStrip;
