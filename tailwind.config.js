/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {


      colors: {
        "yellow": "#EDFE45",
        "primary-orange": "#FA8F21",
        "secondary-orange": "#FFCF9D",
        "bg": "#FFFFEF"
      },
      fontFamily: {
        "poppins": '"Poppins"',
        "inter": '"Inter"'
      }

    },
  },
  plugins: [],
});

