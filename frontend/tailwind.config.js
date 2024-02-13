/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      colors: {
        "light-pink": "#fff0f3",
        "dark-gray": "#222222",
        "pink-tone": "#E8A998",
        "light-gray": "#3d4152",
        "mid-pink": "#fff0ed",
        // Add more custom colors as needed
      },
    },
  },
  plugins: [require("daisyui")],
};
