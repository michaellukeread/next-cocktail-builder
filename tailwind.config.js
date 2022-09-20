/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#C0A152",
      secondary: "#8C7948",
      tertiary: "#6E6242",
      light: "#F3F2EE",
      dark: "#181815",
      darkest: "#121210",
    },
    extend: {
      fontFamily: {
        abrilFatface: ["Abril Fatface", "cursive"],
        lato: ["Lato", "sans-serif"],
      },
      keyframes: {
        shake: {
          "0%": "{ transform: translate(1px, 1px) rotate(0deg) }",
          "10%": "{ transform: translate(-1px, -2px) rotate(-1deg) }",
          "20%": "{ transform: translate(-3px, 0px) rotate(1deg) }",
          "30%": "{ transform: translate(3px, 2px) rotate(0deg) }",
          "40%": "{ transform: translate(1px, -1px) rotate(1deg) }",
          "50%": "{ transform: translate(-1px, 2px) rotate(-1deg) }",
          "60%": "{ transform: translate(-3px, 1px) rotate(0deg) }",
          "70%": "{ transform: translate(3px, 1px) rotate(-1deg) }",
          "80%": "{ transform: translate(-1px, -1px) rotate(1deg) }",
          "90%": "{ transform: translate(1px, 2px) rotate(0deg) }",
          "100%": "{ transform: translate(1px, -2px) rotate(-1deg) }",
        },
      },
      gridTemplateColumns: {
        autofit: "repeat(auto-fit, minmax(300px, 1fr))",
      },
      backgroundImage: {
        home: "url('./assets/home.jpg')",
        random: "url('./assets/random.jpg')",
        ingredients: "url('./assets/ingredients.jpg')",
        pouplar: "url('./assets/popular.jpg')",
        cocktail1: "url('./assets/cocktail-1.jpg')",
        cocktail2: "url('./assets/cocktail-2.jpg')",
        cocktail3: "url('./assets/cocktail-3.jpg')",
      },
      animation: {
        shake: "shake 0.5s linear infinite",
      },
    },
  },
  plugins: [],
}
