/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Verdana", "sans-serif"],
      },
      gridTemplateColumns: {
        "70-30": "70% 28%",
      },
      colors: {
        'vzred': '#EE0000',
      },
    },
  },
  plugins: [],
}

