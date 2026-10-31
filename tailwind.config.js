/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orbit: {
          red: '#D91D24',
          'red-bright': '#E5232A',
          'red-dark': '#B31218',
          gold: '#F5A623',
          'gold-light': '#FFC72C',
          'gold-warm': '#E89518',
          chocolate: '#2B150C',
          espresso: '#1A0D07',
          page: '#FFFDF9',
          surface: '#FFFFFF',
          warm: '#FFF8EE',
          muted: '#6B5B52',
          border: '#EFE6DC',
          'border-dark': '#DFD3C5'
        }
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        heading: ['Outfit', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
