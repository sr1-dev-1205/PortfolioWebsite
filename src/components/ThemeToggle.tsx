import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import Magnetic from './Magnetic';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Magnetic strength={0.2}>
      <motion.button
        onClick={toggleTheme}
        className="relative group p-3 bg-terminal-surface border-2 border-grid-line rounded-sm 
                   hover:border-neon-cyan transition-all duration-300 overflow-hidden
                   shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]
                   light-mode:bg-gray-100 light-mode:border-gray-300 light-mode:hover:border-accent-blue"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {/* Animated Background Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        {/* Icon Container */}
        <div className="relative w-6 h-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ y: -20, opacity: 0, rotate: -180 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute"
              >
                <Moon className="w-5 h-5 text-neon-cyan group-hover:text-neon-yellow transition-colors" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ y: 20, opacity: 0, rotate: 180 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -20, opacity: 0, rotate: -180 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute"
              >
                <Sun className="w-5 h-5 text-accent-blue group-hover:text-neon-yellow transition-colors" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Corner Indicators - Cyberpunk Style */}
        <motion.div
          className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon-cyan opacity-0 group-hover:opacity-100"
          initial={{ x: -2, y: 2 }}
          whileHover={{ x: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon-cyan opacity-0 group-hover:opacity-100"
          initial={{ x: 2, y: -2 }}
          whileHover={{ x: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* Status Indicator */}
        <motion.div
          className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${
            isDark ? 'bg-neon-cyan' : 'bg-neon-yellow'
          }`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.button>
    </Magnetic>
  );
};

export default ThemeToggle;
