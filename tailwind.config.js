/* global require */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#133254",
          secondary: "#B5A280",
          accent: "#9CA18A",
          neutral: "#C9BFAF",
          "base-100": "#ffffff",
          "base-content": "#133254",
          "neutral-content": "#133254",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
