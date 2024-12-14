/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B21A8', // Purple
          dark: '#581C87',
          light: '#7C3AED',
        },
        secondary: {
          DEFAULT: '#111827', // Dark gray/black
          light: '#1F2937',
        }
      }
    },
  },
  plugins: [],
}
