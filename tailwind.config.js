/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        red: {
          500: '#ef4444',
        },
        green: {
          500: '#22c55e',
        },
        blue: {
          500: '#3b82f6',
        },
        yellow: {
          500: '#eab308',
        },
        purple: {
          500: '#a855f7',
        },
        pink: {
          500: '#ec4899',
        },
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
