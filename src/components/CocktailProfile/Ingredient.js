const Ingredient = ({ ingredient, measurement }) => (
  <li className="rounded-xl px-3 py-0.5 tracking-wide bg-blue-700 text-white">
    {ingredient} {measurement && <>| {measurement}</>}
  </li>
)

export default Ingredient
