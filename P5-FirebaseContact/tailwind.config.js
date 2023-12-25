/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFEAAE",
        gray: "#5A5959",
        red: "#D01C28",
        purple: "#5F00D9",
        profile: "#F6820C",
      },
    },
  },
  plugins: [],
};
