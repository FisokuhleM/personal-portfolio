/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#0f0f10",
        surface: "#1a1a1b",
        primary: "#e4e4e7",
        secondary: "#a1a1aa",
        accent: "#d4d4d8",
      },
      maxWidth: {
        'content': '1200px',
      },
      letterSpacing: {
        'tighter-heading': '-0.04em',
      }
    },
  },
  plugins: [],
}
