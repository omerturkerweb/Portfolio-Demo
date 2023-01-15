/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#2f1c6a",
        "primary-text": "#333333",
      },
      backgroundColor: {
        "primary-light": "#cdfcf6bc",
        "social-hover": "#ffc80363",
        "profile-hover": "#ffc8031b",
        "type-hover": "#f5cf454d",
        "button-background": "#facf0f",
        "skill-background": "#e7e7e7",
        "dark-bg-1": "#333333",
        "dark-bg-2": "#222222",
      },
      backgroundImage: {
        "section-grey-to-white":
          "linear-gradient(to top, rgba(0, 0, 0, 0.05), white)",
      },
      boxShadow: {
        "prmiary-light-content-shadow": "0 35px 60px -15px rgba(0,0,0, 0.1)",
      },
      fontFamily: {
        "primary-font": " 'Source Sans Pro', sans-serif ",
      },
      padding: {
        21: "6rem",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
