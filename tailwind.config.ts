import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'custom-orange': '0 10px 10px 0 #FBA65140',
        'custom-orange-l3': '0 0 15px 0 rgba(251, 166, 81, 0.5)',
        'custom-orange-l2': '0 0 7px 0 rgba(176, 116, 57, 0.2)',

      },
      height: {
        'full-screen-minus-header': 'calc(100vh - 60px)',
      }
    },
  },
  plugins: [],
} satisfies Config;
