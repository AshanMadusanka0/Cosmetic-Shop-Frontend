/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f3f3f3",
        secondary: "#e5e5dd",
        accent: "#f5a62f",
      },
    },
  },
  plugins: [],
}
