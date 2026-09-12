import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0b1430",
          700: "#2a3552",
          500: "#5c6782",
          200: "#e2e8f0",
          100: "#f1f5f9",
        },
        brand: {
          DEFAULT: "#0063e5",
          cobalt: "#0b3aa8",
          dark: "#08163f",
          glow: "rgba(0, 99, 229, 0.25)",
        },
        accent: {
          green: "#00c076",
          emerald: "#059669",
          mint: "#e6f9f2",
        },
        surface: {
          base: "#ffffff",
          offwhite: "#f6f9fd",
          raised: "#08163f",
          dark: "#0b1430",
        },
      },
      borderRadius: {
        xs: "16px",
        sm: "24px",
        pill: "9999px",
      },
      boxShadow: {
        'fastpix-1': "0px 2px 8px 0px rgba(11, 58, 168, 0.05)",
        'fastpix-2': "rgba(255, 255, 255, 0.9) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.35) 0px 0px 0px 1px inset, rgba(8, 22, 63, 0.06) 0px 0px 0px 1px, rgba(8, 22, 63, 0.05) 0px 8px 18px 0px, rgba(8, 22, 63, 0.12) 0px 18px 44px 0px",
        'fastpix-3': "0px 4px 16px 0px rgba(11, 58, 168, 0.06)",
        'fastpix-4': "0px 8px 24px 0px rgba(11, 58, 168, 0.22)",
        'lift': "0 20px 40px -15px rgba(8, 22, 63, 0.12), 0 0 0 1px rgba(8, 22, 63, 0.06)",
        'pop': "0 4px 20px -2px rgba(8, 22, 63, 0.06), 0 0 0 1px rgba(8, 22, 63, 0.05)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
