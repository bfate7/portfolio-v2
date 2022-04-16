const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //dark theme
        "primary-dark-theme": colors.gray[900],
        secondary: colors.green[400],
        //light theme
        "primary-light-theme": colors.gray[100],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
