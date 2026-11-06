/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#16a34a",
          glow: "#4ade80",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#22c55e",
          foreground: "#ffffff",
        },
        background: "#ffffff",
        foreground: "#1f2937",
        card: "#ffffff",
        muted: "#f5f5f5",
        "muted-foreground": "#6b7280",
        border: "#e5e7eb",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.55rem",
        sm: "0.35rem",
      },
      boxShadow: {
        glow: "0 4px 20px rgba(22, 163, 74, 0.15)",
        "glow-lg": "0 12px 34px rgba(22, 163, 74, 0.28)",
        card: "0 14px 40px rgba(26, 58, 42, 0.07)",
        "card-hover": "0 24px 70px rgba(26, 58, 42, 0.13)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
      },
    },
  },
  plugins: [],
};
