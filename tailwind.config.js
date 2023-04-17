/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.300"),
            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.gray.100"),
              fontWeight: "400",
            },
            h2: {
              marginTop: "60px",
              marginBottom: "32px",
            },
            h3: { marginTop: "24px" },
            span: {
              color: theme("colors.amber.500"),
            },
          },
        },
      }),
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
