import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#06060B",
        violetShadow: "#3B0F68",
        glow: "#B794F6",
        mist: "#E5D9FF"
      },
      fontFamily: {
        display: [
          "\"Space Grotesk\"",
          "\"Segoe UI Variable Display\"",
          "\"Aptos Display\"",
          "system-ui",
          "sans-serif"
        ],
        body: [
          "\"Manrope\"",
          "\"Segoe UI Variable Text\"",
          "\"Aptos\"",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(76, 29, 149, 0.28)",
        glass: "0 16px 60px rgba(15, 15, 20, 0.45)"
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
