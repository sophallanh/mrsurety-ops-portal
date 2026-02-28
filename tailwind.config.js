/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f5f7fa',
          100: '#ebeef5',
          200: '#d6dce9',
          300: '#c2c9dd',
          400: '#a3acd1',
          500: '#848fc5',
          600: '#5870b4',
          700: '#1a237e',
          800: '#151d5e',
          900: '#0f173d',
        },
        safety: {
          50: '#fff5f0',
          100: '#ffe6d9',
          200: '#ffcdb3',
          300: '#ffb48d',
          400: '#ff9b66',
          500: '#ff8240',
          600: '#ff5722',
          700: '#cc4620',
          800: '#99351b',
          900: '#662410',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
    },
  },
  plugins: [],
};