const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  safelist: [
    {
      pattern: /bg-(red|green|blue|yellow|pink|orange|purple)-(100)/,
    },
    {
      pattern: /text-(red|green|blue|orange|purple)-(800)/,
    },
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        brown: colors.brown,
      },
    },
  },
  variants: {
    extend: {
      animation: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
  plugins: [],
};
