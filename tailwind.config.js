/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: '#F1EFE7',
        ink: {
          DEFAULT: '#1C2B36',
          deep: '#13212B',
          soft: '#2D3F4D',
        },
        marigold: {
          DEFAULT: '#E0932F',
          light: '#F5C785',
          dark: '#B8761E',
        },
        teal: {
          DEFAULT: '#2F6F5E',
          light: '#5A9A8A',
          dark: '#1F5246',
        },
        amber: {
          DEFAULT: '#B4791E',
          light: '#E8C98A',
        },
        paperDark: {
          DEFAULT: '#1A2530',
          card: '#243240',
          soft: '#2D3F4D',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.015em',
      },
    },
  },
  plugins: [],
};
