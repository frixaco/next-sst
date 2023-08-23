import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        screens: {
          "2xl": "1400px",
        },
      },
      fontFamily: {
        pjsans: ["var(--font-plus-jakarta-sans)"],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        input: "hsl(var(--input))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        ring: "hsl(var(--ring))",
      },
      backgroundImage: {},
      borderRadius: {
        md: `calc(var(--radius-md))`,
        lg: `calc(var(--radius-lg))`,
      },
      boxShadow: {},
      dropShadow: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
