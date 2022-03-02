const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  safelist: [
    {
      pattern: /bg-(red|green|blue|yellow|pink|orange|purple|gray)-(100)/,
    },
    {
      pattern: /bg-(red|green|blue|yellow|pink|orange|purple|gray)-(700)/,
      variants: ["dark"],
    },
    {
      pattern: /text-(red|green|blue|yellow|pink|orange|purple|gray)-(800)/,
    },
    {
      pattern: /text-(red|green|blue|yellow|pink|orange|purple|gray)-(100)/,
      variants: ["dark"],
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
