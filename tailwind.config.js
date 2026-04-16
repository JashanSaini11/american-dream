/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: "var(--font-display)",
        body: "var(--font-body)",
      },
      colors: {
        accent: "#00E5A0",
        dark: "#080810",
        white: "#ffffff",
      },
      spacing: {
        sidebar: "36px",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
    screens: {
      'xl-custom': '1268px',
    }
  },
  plugins: [],
};
