/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B18',
          900: '#0A1020',
          800: '#0D1525',
          700: '#111D35',
          600: '#172344',
        },
        gold: {
          300: '#E8C97A',
          400: '#D4A843',
          500: '#B8902F',
        },
        slate: {
          350: '#8A97B0',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(rgba(212,168,67,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-sm': '40px 40px',
      },
    },
  },
  plugins: [],
};
