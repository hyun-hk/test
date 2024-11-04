/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Replace with your desired primary color
        secondary: '#1F2937', // Replace with your desired secondary color
        accent: '#4B5563', // Replace with your desired accent color
      },
    },
  },
  plugins: [],
}