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
        brand: {
          DEFAULT: "#0b3aa8",
          hover: "#1d4ed8",
          electric: "#3b82f6",
          dark: "#08163f",
          glow: "rgba(11, 58, 168, 0.4)",
        },
        surface: {
          base: "#000000",
          dark: "#0b1430",
          raised: "#08163f",
          card: "rgba(8, 22, 63, 0.75)",
          border: "rgba(8, 22, 63, 0.6)",
          strong: "#f6f9fd",
        },
        text: {
          primary: "#0b1430",
          secondary: "#ffffff",
          tertiary: "#2a3552",
          inverse: "#5c6782",
          muted: "#94a3b8",
        },
      },
      borderRadius: {
        xs: "16px",
        sm: "24px",
        pill: "9999px",
      },
      boxShadow: {
        'fastpix-1': "0px 2px 8px 0px rgba(11, 58, 168, 0.05)",
        'fastpix-2': "inset 0px 1px 1px 0px rgba(255, 255, 255, 0.25), 0px 8px 18px 0px rgba(8, 22, 63, 0.12)",
        'fastpix-glow': "0px 8px 24px 0px rgba(11, 58, 168, 0.35)",
        'fastpix-card': "0 18px 44px 0px rgba(8, 22, 63, 0.4)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
