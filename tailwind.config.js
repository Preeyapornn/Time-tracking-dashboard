/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "375px" },
        md: { max: "768px" },
        lg: "1440px",
      },
      colors: {
        // colors: {
        blue: "#5746ea",
        darkBlue: "#1d204b",
        veryDarkBlue: "#0d1323",
        orange: "#ff8b64",
        lightBlue: "#56c2e6",
        red: "#ff5e7d",
        green: "#4bcf83",
        purple: "#7434d1",
        yellow: "#f1c75b",
        // },
      },
    },
  },
  plugins: [],
};
