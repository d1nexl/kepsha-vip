import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep, warm near-black base
        ink: {
          DEFAULT: "#0A0A0B",
          950: "#0A0A0B",
          900: "#0E0F10",
          850: "#141517",
          800: "#1A1B1E",
          700: "#26282C",
          600: "#33363B",
        },
        // Warm off-white text
        bone: {
          DEFAULT: "#F4F3EE",
          muted: "#A3A39B",
          dim: "#6E6E68",
        },
        // Signal lime accent
        signal: {
          DEFAULT: "#CDFF3E",
          400: "#D8FF63",
          500: "#CDFF3E",
          600: "#B4E82A",
          glow: "rgba(205,255,62,0.35)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      keyframes: {
        "dash-move": {
          to: { strokeDashoffset: "-1000" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.6)" },
        },
      },
      animation: {
        "dash-move": "dash-move 20s linear infinite",
        marquee: "marquee 40s linear infinite",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
