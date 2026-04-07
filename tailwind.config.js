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
          950: '#04041A',
          900: '#06061E',
          800: '#0A0A2E',
          700: '#0F0F42',
          600: '#16166A',
        },
        blue: {
          brand: '#3636E8',
          bright: '#4B4BFF',
          dark: '#1A1A6E',
          muted: '#2A2A9E',
        },
        card: '#0D0D3A',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(rgba(70,70,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(70,70,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-sm': '40px 40px',
      },
    },
  },
  plugins: [],
};
