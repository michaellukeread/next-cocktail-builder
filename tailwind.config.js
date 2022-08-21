/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abrilFatface: ["Abril Fatface", "cursive"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        random: "url('./assets/random.jpg')",
        ingredients: "url('./assets/ingredients.jpg')",
        pouplar: "url('./assets/popular.jpg')",
        home: "url('./assets/home.jpg')",
        cocktail1: "url('./assets/cocktail-1.jpg')",
        cocktail2: "url('./assets/cocktail-2.jpg')",
        cocktail3: "url('./assets/cocktail-3.jpg')",
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
      animation: {
        shake: "shake 0.5s linear infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
