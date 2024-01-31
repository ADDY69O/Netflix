/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        Netflix_main: "url('../src/assets/Netflix_main.jpg')",
      },
    },
  },
  plugins: [],
}

