import { findIngredients } from "utils"

const Ingredients = ({ ...props }) => {
  const ingredients = findIngredients(props)

  return (
    <ol className="inline-flex flex-wrap gap-2">
      {ingredients.map((ingredient, i) => (
        <li
          key={i}
          className="rounded-xl px-3 py-0.5 tracking-wide border border-white text-white"
        >
          {ingredient}
        </li>
      ))}
    </ol>
  )
}

export default Ingredients
