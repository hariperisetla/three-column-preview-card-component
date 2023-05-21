/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bright-orange": "hsl(31, 77%, 52%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "very-dark-cyan": "hsl(179, 100%, 13%)",
        "transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "very-light-gray": "hsl(0, 0%, 95%)",
      },

      fontFamily: {
        "lexend-deca": ["Lexend Deca", "sans-serif"],
        "big-shoulders-display": ["Big Shoulders Display", "cursive"],
      },
    },
  },
  plugins: [],
};
