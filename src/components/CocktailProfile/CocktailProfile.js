const Ingredient = ({ ingredient, measurement }) => (
  <li className="rounded-xl px-3 py-0.5 tracking-wide bg-blue-700 text-white">
    {ingredient} {measurement && <>| {measurement}</>}
  </li>
)

const CocktailProfile = ({
  strDrinkThumb,
  strDrink,
  ingredientsWithMeasurements,
  method,
}) => (
  <div className="relative rounded-lg border border-black overflow-hidden flex">
    <div
      className="-z-10 left-0 bottom-0 h-[480px] bg-contain aspect-square bg-no-repeat"
      style={{ backgroundImage: `url(${strDrinkThumb})` }}
    />
    <div className="p-8 flex flex-col gap-4">
      <h3 className="text-5xl tracking-tight font-semibold text-black">
        {strDrink}
      </h3>
      <ol className="inline-flex flex-wrap gap-2">
        {ingredientsWithMeasurements.map((item) => (
          <Ingredient key={item.ingredient} {...item} />
        ))}
      </ol>
      {method && (
        <div>
          <h4 className="text-xl font-semibold">Method</h4>
          <ol className="list-inside list-decimal">
            {method.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  </div>
)

export default CocktailProfile
