import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPink: {
          50: "#fff7fa",
          100: "#ffe8f0",
          200: "#ffd1e0",
          300: "#ffb0ca",
          400: "#ff86ad",
          500: "#f55f90",
          600: "#df3f74",
        },
        brandDark: {
          50: "#f3f4f6",
          100: "#d9dde5",
          200: "#b8bfcc",
          300: "#909aad",
          400: "#677186",
          500: "#434c5f",
          600: "#2c3341",
          700: "#1f2430",
          800: "#171b24",
          900: "#10131a",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
