import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#060a14",
          900: "#0a1220",
          850: "#0d1830",
          800: "#111827",
          700: "#1a2236",
          600: "#26314a",
          500: "#3a4a6b",
        },
        haze: {
          400: "#94a3b8",
          300: "#b6c2d9",
          200: "#d9e1ee",
        },
        amber: {
          400: "#ffb347",
          500: "#f5942e",
          600: "#e8781f",
        },
        cyan: {
          400: "#5eb8ff",
          500: "#2e8fef",
          600: "#1c6fd6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "core-gradient":
          "radial-gradient(circle at 35% 30%, #ffd27a 0%, #f5942e 35%, #e8781f 60%, #c75f16 100%)",
        "grid-fade":
          "linear-gradient(180deg, rgba(94,184,255,0.08) 0%, rgba(94,184,255,0) 60%)",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(94,184,255,0.35)",
        "glow-amber": "0 0 50px -12px rgba(245,148,46,0.45)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 24px -12px rgba(0,0,0,0.6)",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-slower": "spin 70s linear infinite reverse",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.06)" },
        },
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
export default config;
