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
        primary: colors.gray[900],
        "primary-lighten": colors.gray[600],
        "primary-lighten-2": colors.gray[400],
        secondary: colors.green[400],
        light: colors.gray[100],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
