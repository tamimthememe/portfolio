/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'rubik': ["Rubik", "sans-serif"],
      'scp': ['"Source Code Pro"', "sans-serif"],
      'ds': ['"Dancing Script"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#1E211F",
        gray: {
          100: "#D9D9D9",
          200: "#9C9C9C",
          300: "#EAEAEA",
          400: "#9C9C9C",
          500: "#919191",
          600: "#CECECE",
          700: '#181818'
        },
        black: {
          100: "#1A1A1A",
          200: "#161515",
          300: "#101010",
        },
        purple: {
          100: "#AC6AFF",
          200: "#5752C2",
          300: "#210940",
        },
        blue: {
          100: "#002E42",
        },
      },
    },
  },
  plugins: [],
};
