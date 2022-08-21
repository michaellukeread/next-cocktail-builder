const Ingredient = ({ ingredient, measurement }) => (
  <li className="rounded-xl px-3 py-0.5 tracking-wide border border-white text-white">
    {measurement} {ingredient}
  </li>
)

export default Ingredient
