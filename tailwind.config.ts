import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Adjusted path for pages
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Adjusted path for components
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Adjusted path for app
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "hero-gradient-from": "rgba(85, 64, 174, 0.95)",
      "hero-gradient-to": "rgba(65, 47, 144, 0.93)",
      "blog-gradient-from": "#8f9098",
      "blog-gradient-to": "#222222",
      },
      backgroundImage: {
        'hero-bg': "url('/images/logo.svg')",
        'hero-bg2': "url('./assets/bg6.jpg')",
        'hero-bg3': "url('./assets/bg10.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;