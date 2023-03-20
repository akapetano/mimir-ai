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
      colors: { gold: "#FFD700" },
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
