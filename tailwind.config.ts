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
          yellow: "#F5C518",
          gold: "#E8B400",
          red: "#D94032",
          orange: "#E8652E",
          teal: "#103948",
          cream: "#FFFDF5",
          warm: "#FFF8E7",
          muted: "#999999",
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
