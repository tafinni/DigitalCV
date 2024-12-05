/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pink0: '#F9CFE0',
        pink1: '#F6B7D0',
        green0: '#C1DFBF',
        green1: '#A4D09C',
        yellow0: '#F8F1C4',
        yellow1: '#F8E358',
        lightBlue: '#9FD8F6',
        titleBlue:'#1D2442',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Cherry: ['Cherry Bomb one', 'cursive'],
      },
      outlineWidth: {
        '8': '8px',
      },
    },
  },
  plugins: [],
}

