module.exports = {
  content: ["./src/**/*.{ts,js}", "./theme/**/*.{php,html}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      gridTemplateRows: {
        "navbar-open": "min-content 1fr",
        "navbar-closed": "min-content 0fr",
      },
      content: {
        empty: '""',
      },
    },
  },
  plugins: [
    require("tailwindcss-full-bleed"),
    require("@tailwindcss/typography"),
    require("@pyncz/tailwind-mask-image"),
  ],
};
