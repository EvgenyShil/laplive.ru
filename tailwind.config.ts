import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5fbff',
          100: '#e6f5ff',
          200: '#cdeaff',
          300: '#a3d8ff',
          400: '#76c1ff',
          500: '#4aa6ff',
          600: '#2e86f2',
          700: '#1f67c3',
          800: '#1c5499',
          900: '#1b497d'
        }
      }
    }
  },
  plugins: []
};

export default config;
