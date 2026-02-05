import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Minimize2, Maximize2, X } from 'lucide-react';

interface LogEntry {
    id: string;
    timestamp: string;
    type: 'command' | 'success' | 'info' | 'warning' | 'deploy';
    content: string;
    icon?: string;
}

const LiveTerminal = () => {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const terminalRef = useRef<HTMLDivElement>(null);
    const logIdCounter = useRef(0);

    // Terminal log templates
    const logTemplates = [
        { type: 'command' as const, content: '$ git push origin main', icon: '→' },
        { type: 'success' as const, content: '✓ Build successful', icon: '✓' },
        { type: 'deploy' as const, content: '> Deploying to Vercel...', icon: '⚡' },
        { type: 'success' as const, content: '✓ Deployment complete', icon: '✓' },
        { type: 'command' as const, content: '$ npm run test', icon: '→' },
        { type: 'success' as const, content: '✓ 42 tests passed', icon: '✓' },
        { type: 'command' as const, content: '$ npm run build', icon: '→' },
        { type: 'info' as const, content: '> Building optimized production bundle...', icon: '◆' },
        { type: 'success' as const, content: '✓ Compiled successfully', icon: '✓' },
        { type: 'command' as const, content: '$ git commit -m "feat: add new feature"', icon: '→' },
        { type: 'success' as const, content: '✓ 1 file changed, 47 insertions(+)', icon: '✓' },
        { type: 'info' as const, content: '> Running ESLint...', icon: '◆' },
        { type: 'success' as const, content: '✓ No linting errors found', icon: '✓' },
        { type: 'deploy' as const, content: '> Checking deployment status...', icon: '⚡' },
        { type: 'success' as const, content: '✓ Production: https://sridhar.dev', icon: '✓' },
        { type: 'command' as const, content: '$ docker compose up -d', icon: '→' },
        { type: 'success' as const, content: '✓ Containers started successfully', icon: '✓' },
        { type: 'info' as const, content: '> MongoDB connection established', icon: '◆' },
        { type: 'command' as const, content: '$ npm install --save framer-motion', icon: '→' },
        { type: 'success' as const, content: '✓ Package installed successfully', icon: '✓' },
        { type: 'warning' as const, content: '⚠ Cache size: 847 MB', icon: '⚠' },
        { type: 'info' as const, content: '> API response time: 42ms', icon: '◆' },
        { type: 'success' as const, content: '✓ Database optimized', icon: '✓' },
        { type: 'command' as const, content: '$ git pull origin develop', icon: '→' },
        { type: 'success' as const, content: '✓ Already up to date', icon: '✓' },
    ];

    const getTimestamp = () => {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
    };

    const addLog = () => {
        const template = logTemplates[Math.floor(Math.random() * logTemplates.length)];
        const newLog: LogEntry = {
            id: `log-${logIdCounter.current++}`,
            timestamp: getTimestamp(),
            ...template
        };

        setLogs(prev => {
            const updated = [...prev, newLog];
            // Keep only last 8 logs
            return updated.slice(-8);
        });

        // Auto-scroll to bottom
        setTimeout(() => {
            if (terminalRef.current) {
                terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
            }
        }, 50);
    };

    useEffect(() => {
        // Initial logs
        addLog();
        setTimeout(addLog, 800);
        setTimeout(addLog, 1600);

        // Continue adding logs at random intervals
        const interval = setInterval(() => {
            addLog();
        }, Math.random() * 4000 + 3000); // 3-7 seconds

        return () => clearInterval(interval);
    }, []);

    const getLogColor = (type: LogEntry['type']) => {
        switch (type) {
            case 'command':
                return 'text-gray-300';
            case 'success':
                return 'text-neon-green';
            case 'info':
                return 'text-neon-cyan';
            case 'warning':
                return 'text-yellow-400';
            case 'deploy':
                return 'text-neon-blue';
            default:
                return 'text-gray-400';
        }
    };

    if (isClosed) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                height: isMinimized ? 'auto' : '320px'
            }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-[90] w-[380px] max-w-[calc(100vw-3rem)]"
        >
            {/* Terminal Window */}
            <div className="bg-terminal-black/95 backdrop-blur-md border-2 border-grid-glow rounded-sm shadow-[0_0_30px_rgba(0,240,255,0.2)] overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-3 py-2 bg-terminal-surface border-b border-grid-line">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-neon-cyan" />
                        <span className="text-[10px] font-mono font-bold text-neon-cyan uppercase tracking-[0.2em]">
                            SYSTEM_LOGS
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Window Controls */}
                        <button
                            onClick={() => setIsMinimized(!isMinimized)}
                            className="p-1 hover:bg-terminal-black/50 rounded-sm transition-colors group"
                            aria-label={isMinimized ? "Maximize" : "Minimize"}
                        >
                            {isMinimized ? (
                                <Maximize2 className="w-3.5 h-3.5 text-gray-500 group-hover:text-neon-cyan transition-colors" />
                            ) : (
                                <Minimize2 className="w-3.5 h-3.5 text-gray-500 group-hover:text-neon-cyan transition-colors" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsClosed(true)}
                            className="p-1 hover:bg-red-500/20 rounded-sm transition-colors group"
                            aria-label="Close"
                        >
                            <X className="w-3.5 h-3.5 text-gray-500 group-hover:text-red-500 transition-colors" />
                        </button>
                    </div>
                </div>

                {/* Terminal Body */}
                <AnimatePresence>
                    {!isMinimized && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                        >
                            <div
                                ref={terminalRef}
                                className="p-3 space-y-1.5 font-mono text-[11px] max-h-[260px] overflow-y-auto custom-scrollbar"
                            >
                                <AnimatePresence mode="popLayout">
                                    {logs.map((log) => (
                                        <motion.div
                                            key={log.id}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex items-start gap-2"
                                        >
                                            <span className="text-gray-600 text-[10px] font-medium min-w-[60px]">
                                                [{log.timestamp}]
                                            </span>
                                            <span className={`${getLogColor(log.type)} leading-relaxed`}>
                                                {log.content}
                                            </span>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>

                                {/* Blinking Cursor */}
                                <motion.div
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="inline-block w-2 h-4 bg-neon-cyan ml-1"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Terminal Footer - Status Bar */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-terminal-surface border-t border-grid-line text-[9px] font-mono text-gray-500">
                    <span>ACTIVE</span>
                    <div className="flex items-center gap-2">
                        <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-neon-green"
                        />
                        <span className="uppercase tracking-wider">ONLINE</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LiveTerminal;
