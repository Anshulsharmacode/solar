/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      /* gray */
      "gray-25": "#fcfcfd",
      "gray-50": "#f9fafb",
      "gray-100": "#f2f4f7",
      "gray-200": "#eaecf0",
      "gray-300": "#d0d5dd",
      "gray-400": "#98a2b3",
      "gray-500": "#667085",
      "gray-600": "#475467",
      "gray-700": "#344054",
      "gray-800": "#1d2939",
      "gray-900": "#101828",

      /* primary color - Orange */
      "primary-50": "#FFF7F0",
      "primary-100": "#FFEBDA",
      "primary-200": "#FFD4B5",
      "primary-300": "#FFBD8F",
      "primary-400": "#FFA56A",
      "primary-500": "#E87D3B",
      "primary-600": "#FE6100",
      "primary-700": "#CC4E00",
      "primary-800": "#993B00",
      "primary-900": "#662800",

      /* secondary color */
      "secondary-bg": "#310d20",
      "third-bg": "#171219",

      /* additional colors */
      "accent-100": "#E0F2F1",
      "accent-200": "#B2DFDB",
      "accent-300": "#80CBC4",
      "accent-400": "#4DB6AC",
      "accent-500": "#26A69A",
      "accent-600": "#009688",
      "accent-700": "#00897B",
      "accent-800": "#00796B",
      "accent-900": "#004D40",

      /* other colors */
      black: "#1b1b1b",
      white: "#fff",
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
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
      boxShadow: {
        /* shadow */
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        "3xl": "var(--shadow-3xl)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        dashboard: "var(--radius-dashboard)",
      },
      letterSpacing: {
        "heading-base": "-0.72px",
        "heading-md": "-1.2px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        beat: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
