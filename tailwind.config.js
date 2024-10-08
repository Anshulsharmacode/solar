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

      /* primary color - Purple */
      "primary-50": "#F5F0FF",
      "primary-100": "#EADAFF",
      "primary-200": "#D4B5FF",
      "primary-300": "#BD8FFF",
      "primary-400": "#A56AFF",
      "primary-500": "#7D3BE8",
      "primary-600": "#6100FE",
      "primary-700": "#4E00CC",
      "primary-800": "#3B0099",
      "primary-900": "#280066",

      /* secondary color */
      "secondary-bg": "#310d20",
      "third-bg": "#171219",

      /* additional colors */
      "accent-100": "#E0F2F1", // Very light teal
      "accent-200": "#B2DFDB", // Light teal
      "accent-300": "#80CBC4", // Soft teal
      "accent-400": "#4DB6AC", // Medium teal
      "accent-500": "#26A69A", // Teal
      "accent-600": "#009688", // Dark teal
      "accent-700": "#00897B", // Deeper teal
      "accent-800": "#00796B", // Very dark teal
      "accent-900": "#004D40", // Darkest teal

      /* green */
      "green-50": "#E8F5E9",
      "green-100": "#C8E6C9",
      "green-200": "#A5D6A7",
      "green-300": "#81C784",
      "green-400": "#66BB6A",
      "green-500": "#4CAF50",
      "green-600": "#43A047",
      "green-700": "#388E3C",
      "green-800": "#2E7D32",
      "green-900": "#1B5E20",

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
