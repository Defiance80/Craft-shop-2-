import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sol: {
          black: "#0D0D0D",
          dark: "#1A1A1A",
          card: "#222222",
          copper: "#B87333",
          amber: "#D4A843",
          cream: "#FFF8F0",
          warm: "#F5E6D0",
          muted: "#999999",
          brick: "#8B4513",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
