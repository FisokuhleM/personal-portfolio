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
        background: "#F8F9FA", // Off-white
        charcoal: "#333333", // Dark charcoal
        accent: {
          DEFAULT: "#1A1A1A", // Muted black
          blue: "#4A90E2", // Subtle blue
        }
      },
      maxWidth: {
        'content': '1100px',
      }
    },
  },
  plugins: [],
}
