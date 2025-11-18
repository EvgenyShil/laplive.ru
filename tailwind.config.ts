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
          50: '#fff6ec',
          100: '#ffe6ce',
          200: '#ffc59b',
          300: '#ffa168',
          400: '#ff7f3f',
          500: '#ff6522',
          600: '#e14b14',
          700: '#b73813',
          800: '#8e2d15',
          900: '#732813'
        }
      }
    }
  },
  plugins: []
};

export default config;
