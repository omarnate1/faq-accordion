/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        "light-pink": "#f9f0ff",
        "grayish-purple": "#8c6991",
        "dark-purple": "#3e1d54", // You might want to add the exact dark purple color code
      },
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
      },
      fontWeight: {
        400: 400,
        600: 600,
        700: 700,
      },
    },
  },
  plugins: [],
};
