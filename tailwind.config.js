/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#bae6fd',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        nav: {
          400: '#a5b4fc',
          500: '#818cf8',
          600: '#6366f1',
          700: '#4f46e5',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out 2s infinite',
        'float-fast': 'float 4s ease-in-out 1s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient': 'gradientShift 4s ease infinite',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'slide-in-left': 'slideInLeft 0.7s ease forwards',
        'slide-in-right': 'slideInRight 0.7s ease forwards',
        'scale-in': 'scaleIn 0.5s ease forwards',
        'spin-slow': 'spin 12s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'dash': 'dash 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-25px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.7)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.9' },
        },
        dash: {
          '0%': { strokeDashoffset: '300' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
