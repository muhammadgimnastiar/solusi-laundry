/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['inter']
      },

      colors: {
        "primary": "#EDFE45",
        "primary-orange": "#FA8F21",
        "secondary-orange": "#FFCF9D",
        "bg": "#FFFFEF"
      }

    },
  },
  plugins: [],
}

