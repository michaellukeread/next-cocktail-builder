import { INGREDIENT } from "config"

const findIngredients = (item) =>
  Object.keys(item)
    .filter((key) => item[key] && key.startsWith(INGREDIENT))
    .map((ingredient) => item[ingredient])

export default findIngredients
