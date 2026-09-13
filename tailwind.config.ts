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
          900: "#051c14",
          700: "#1c382e",
          500: "#4b6b60",
          200: "#d7e6df",
          100: "#edf5f1",
        },
        brand: {
          DEFAULT: "#059669",
          primary: "#00B368",
          dark: "#022c22",
          light: "#ecfdf5",
          hover: "#047857",
          glow: "rgba(5, 150, 105, 0.35)",
        },
        accent: {
          green: "#00D084",
          emerald: "#059669",
          mint: "#d1fae5",
          lime: "#10b981",
        },
        surface: {
          base: "#ffffff",
          offwhite: "#f6faf8",
          raised: "#062e22",
          dark: "#041f17",
        },
      },
      borderRadius: {
        xs: "16px",
        sm: "24px",
        pill: "9999px",
      },
      boxShadow: {
        'xfin-1': "0px 2px 8px 0px rgba(5, 150, 105, 0.06)",
        'xfin-2': "rgba(255, 255, 255, 0.9) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.35) 0px 0px 0px 1px inset, rgba(5, 46, 34, 0.06) 0px 0px 0px 1px, rgba(5, 46, 34, 0.05) 0px 8px 18px 0px, rgba(5, 46, 34, 0.1) 0px 18px 44px 0px",
        'xfin-glow': "0px 8px 24px 0px rgba(5, 150, 105, 0.3)",
        'lift': "0 20px 40px -15px rgba(5, 46, 34, 0.12), 0 0 0 1px rgba(5, 46, 34, 0.06)",
        'pop': "0 4px 20px -2px rgba(5, 46, 34, 0.06), 0 0 0 1px rgba(5, 46, 34, 0.05)",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
