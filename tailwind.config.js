/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gov-primary': '#1B5E20', // Deep Green
        'gov-secondary': '#0D47A1', // Royal Blue
        'gov-accent': '#FF9800', // Saffron
        'gov-text': '#263238', // Dark Charcoal
        'gov-bg': '#F2F0EF', // Creamy Yellow

        // Mapped legacy names for compatibility
        'gov-navy': '#0D47A1', // Royal Blue
        'gov-saffron': '#FF9800', // Saffron
        'gov-green': '#1B5E20', // Deep Green
        'gov-light': '#F2F0EF', // Creamy Yellow
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
