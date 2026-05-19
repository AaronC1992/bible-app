/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#fdf8f0',
          100: '#faefd8',
          200: '#f4dba8',
        },
        scripture: {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c7d4f2',
          300: '#9db5e5',
          400: '#6d8ecf',
          500: '#4a6fa5',
          600: '#3a5a8a',
          700: '#2d4870',
          800: '#1e3255',
          900: '#142240',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
