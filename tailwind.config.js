/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#f9fafb",
          dark: "#090c13",
        },
        foreground: {
          light: "#0b0a1d",
          dark: "#f9fafb",
        },
        card: {
          light: "#e5e7eb",
          dark: "#17181c",
        },
        primary: {
          DEFAULT: "#0b0a1d",
          light: "#e0e0e0",
        },
        accent: {
          DEFAULT: "#2f70f1",
          light: "#53a9ff",
        },
        muted: {
          light: "#6b7280",
          dark: "#9ca3af",
        },
        border: {
          light: "#c2c2c2a2",
          dark: "#26272ea1",
        },
      },
      borderRadius: {
        card: "1rem",
        pill: "9999px",
      },
      boxShadow: {
        card: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        "card-lg": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
