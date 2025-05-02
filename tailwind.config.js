/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue200: "hsl(193, 38%, 86%)",
        blue600: " hsl(217, 19%, 38%)",
        blue900: "hsl(217, 19%, 24%)",
        blue950: "hsl(218, 23%, 16%)",
        green300: " hsl(150, 100%, 66%)",
      },
      fontFamily: { sans: ["Manrope", "sans-serif"] },
      fontSize: { quote: "28px" },
    },
  },
  plugins: [],
};
