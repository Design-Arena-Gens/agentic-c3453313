import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mayin: {
          primary: "#6B46C1",
          secondary: "#9333EA",
          accent: "#C084FC",
          dark: "#1F2937",
          light: "#F9FAFB",
        },
      },
    },
  },
  plugins: [],
};
export default config;
