/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonBackgroundColor: "#fcac66",
        buttonHoverBackgroundColor: "#FF8922",
      },
      // border: {
      //   borderWidth: "border-2",
      //   orangeBorderColor: "orange",
      //   borderRadius3XL: "rounded-3xl",
      //   padding: "p-7",
      //   borderShadow: "shadow-xl",
      // },

      // border-2 border-orange-300 rounded-xl p-2
    },
  },
  plugins: [],
};
