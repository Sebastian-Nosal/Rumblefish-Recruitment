/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "fireorange": "#ff4000"
      },
      height: {
        '1/10': '10%',   
        '1/8': '12.5%', 
      },
      width: {
        '1/10': '10%',
        '9/10': '90%',
        '1/8': '12.5%',
      },
    },
  },
  plugins: [],
  darkMode: "class"
}