import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "opacity-in": {
          from: { opacity: "0" },
          to: { opacity: "1" }
        },
        "wipe": {
          from: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
          to: { clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)" }
        },
        "wipe-up": {
          from: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
          to: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "scale-slow": {
          "0%": { opacity: "0", transform: "scale(0.6)" },
          "50%": { opacity: "0", transform: "scale(0.6)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "scale-angle": {
          from: { opacity: "0", transform: "rotate(225deg) scaleX(0)" },
          to: { opacity: "1", transform: "rotate(225deg) scaleX(1)" },
        },
        "spin": {
          from: { transform: "rotate(0turn)" },
          to: { transform: "rotate(1turn)" },
        },
        "delay-opacity": {
          "0%": { opacity: "0" },
          "80%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "count": {
          "0%": { transform: "translateY(0)" },
          "15%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-24px)" },
          "45%": { transform: "translateY(-24px)" },
          "60%": { transform: "translateY(-48px)" },
          "75%": { transform: "translateY(-48px)" },
          "90%": { transform: "translateY(-72px)" },
          "100%": { transform: "translateY(-72px)" },
        },
        "blink": {
          "0%": { opacity: "0.1" },
          "30%": { opacity: "0.1" },
          "45%": { opacity: "1" },
          "55%": { opacity: "1" },
          "70%": { opacity: "0.1" },
          "100%": { opacity: "0.1" },
        },
        "scale-down": {
          "0%": { opacity: "0", transform: "scale(2)" },
          "50%": { opacity: "0", transform: "scale(2)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        'spin-reverse': {
          '100%': { '--border-angle': '1turn' },
        }
      },
      animation: {
        "blink": "blink 6s linear infinite",
        "scale-angle": "scale-angle 1.25s linear",
        "opacity-in": "opacity-in 1.5s linear",
        "wipe": "wipe 1.5s cubic-bezier(.8,0,.2,1)",
        "wipe-up": "wipe-up 1.5s cubic-bezier(.8,0,.2,1)",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scale-slow": "scale-slow 1.5s linear",
        "spin-slow": "spin 150s linear infinite",
        "delay-opacity": "delay-opacity 2.5s linear",
        "count": "count 12s linear infinite",
        "scale-down": "scale-down 1.5s linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config