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
        "primary-lighten-1": colors.gray[800],
        "primary-lighten-2": colors.gray[600],
        "primary-lighten-3": colors.gray[400],
        "primary-lighten-4": colors.gray[200],
        secondary: colors.green[400],
        "secondary-lighten-1": colors.green[300],
        light: colors.gray[100],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
