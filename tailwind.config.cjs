/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        myanimation: "myanimation 3s ease-in-out infinite",
      },

      keyframes: {
        myanimation: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
            color: "#ff4040",
          },
          "50%": { transform: "rotate(3deg)", color: "#aa00e5" },
        },
      },
    },
  },
  plugins: [],
};
