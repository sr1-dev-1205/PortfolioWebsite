/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        cyber: ['Orbitron', 'Rajdhani', 'sans-serif'],
      },
      colors: {
        // CYBERPUNK TERMINAL PALETTE
        terminal: {
          black: '#0A0E14',      // Terminal background
          dark: '#0D1117',       // Panel background
          surface: '#13171D',    // Card surface
          elevated: '#1A1F26',   // Elevated elements
        },
        neon: {
          cyan: '#00F0FF',       // Primary accent - data streams
          magenta: '#FF00AA',    // Secondary accent - alerts
          yellow: '#FFEA00',     // Warning/highlight
          green: '#39FF14',      // Success/active
          blue: '#0080FF',       // Info
          purple: '#A020F0',     // Special state
        },
        grid: {
          line: 'rgba(0, 240, 255, 0.08)',
          glow: 'rgba(0, 240, 255, 0.15)',
        },
        // Legacy (maintained for compatibility)
        space: {
          900: '#0B0B1E',
          800: '#14142B',
          700: '#1F1F3A',
        },
        accent: {
          cyan: '#00F0FF',
          purple: '#7000FF',
          pink: '#FF00FF',
          blue: '#2D5AF5',
        }
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'meteor': 'meteor 5s linear infinite',
        'gradient-slow': 'gradient 8s linear infinite',
        // CYBERPUNK SYSTEM ANIMATIONS
        'scan-line': 'scan-line 4s linear infinite',
        'glitch': 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'data-stream': 'data-stream 2s linear infinite',
        'panel-slide-in': 'panel-slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'hud-flicker': 'hud-flicker 0.15s ease-in-out',
        'terminal-blink': 'terminal-blink 1s step-end infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: 0 },
        },
        // CYBERPUNK KEYFRAMES
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' },
        },
        'data-stream': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '10%': { opacity: 0.8 },
          '90%': { opacity: 0.8 },
          '100%': { transform: 'translateY(100%)', opacity: 0 },
        },
        'panel-slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'hud-flicker': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        'terminal-blink': {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
