import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "drilling-machine": "url('/images/image 4.png')",
        "pharmacy-equipment": "url('/images/slider-2.jpg')",
        "bread-crumbs": "url('/images/breadcrumb-01.jpg')",
      },
      fontFamily: {
        sans: ["--var(open_sans)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black1: "#121212",
        gray: "#C4C4C4",
        bluelight: "#100E86",
        black2: "#292929",
        gray2: "#F0F0F0",
        gray3: "#F5F5F5",
        limered: "#FFE8E8",
        lightred: "#FF0000",
        darkgray: "#474747",
        gray4: "#E8E8FF",
        darkgray1: "#263238",
        gray5: "#EBEBEB",
        gray6: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
export default config;
