/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xs: "250px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {},
  },
  plugins: [require("tailwindcss")],
  corePlugins: {
    preflight: true,
  },
  important: "#root",
};
