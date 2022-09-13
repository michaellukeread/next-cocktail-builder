/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/assets/**/*.js",
    "./src/pages/**/*.js",
    "./src/components/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        abrilFatface: ["Abril Fatface", "cursive"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        random: "url('./public/random.jpg')",
        ingredients: "url('./public/ingredients.jpg')",
        pouplar: "url('./public/popular.jpg')",
        home: "url('./public/home.jpg')",
        cocktail1: "url('./public/cocktail-1.jpg')",
        cocktail2: "url('./public/cocktail-2.jpg')",
        cocktail3: "url('./public/cocktail-3.jpg')",
      }),
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
      animation: {
        shake: "shake 0.5s linear infinite",
      },
    },
  },
  plugins: [],
}
