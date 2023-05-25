/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      display:["group-hover"]
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'sp': '875px',
      'lg': '1024px',
      'xl': '1334px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}