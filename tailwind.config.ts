import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import lineClamp from "@tailwindcss/line-clamp";

const config: Config = {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [animatePlugin, lineClamp],
};

export default config;
