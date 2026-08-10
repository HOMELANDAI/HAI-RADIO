import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hai: {
          navy: '#020817',
          panel: '#071426',
          cyan: '#00d8ff',
          blue: '#1479ff',
          violet: '#8b5cf6',
          magenta: '#ff3fd1',
          gold: '#d4af37',
          orange: '#ff8a00'
        }
      },
      boxShadow: {
        glow: '0 0 24px rgba(0,216,255,0.35)',
        pulse: '0 0 28px rgba(255,63,209,0.55)'
      },
      animation: {
        pulseGlow: 'pulseGlow 1.8s ease-in-out infinite',
        scan: 'scan 3s linear infinite'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 12px rgba(0,216,255,0.35)' },
          '50%': { boxShadow: '0 0 34px rgba(255,63,209,0.65)' }
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
