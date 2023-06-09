/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        error: "#ee5253",
        warning: "#feca57",
        success: "#10ac84",
        gold: "#ffd32a",
        gray: {
          dark: "#485460",
          DEFAULT: "#808e9b",
          light: "#d2dae2",
        },
        black: "#1e272e",
        blue: {
          DEFAULT: "#00d8d6",
          light: "#34e7e4",
        },
        white: "#ecf0f1",
      },
      keyframes: {
        leftToRight: {
          from: { transform: "translate(0)" },
          to: { transform: "translate(100%)" },
        },
        spin: {
          from: { transform: "rotate(0)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        leftToRight: "leftToRight 2s linear infinite",
        spin: "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
