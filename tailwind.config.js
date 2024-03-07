/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      colors: {
        "red": "#FF0000",
        "yellow": "#FFCA1E",
        "blue": "#0138EE",
        "customdark":"#413F3F",
        "customgray":"#B0AB99",
        "darkturquoise":"#21AA97",
        "lightturquoise":"#48D6BE",
        "mayonnaise":"#C7B500",
        "lightmayonnaise":"#EEE8B0"
      },
    },
  },
  plugins: [],
};
