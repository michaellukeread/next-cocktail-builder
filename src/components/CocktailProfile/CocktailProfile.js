import { Button } from "components"
import { SparklesIcon } from "@heroicons/react/solid"

import Ingredient from "./Ingredient"

const CocktailProfile = ({
  strDrinkThumb,
  strDrink,
  ingredientsWithMeasurements,
  method,
  onClick,
}) => (
  <div className="h-full w-full relative overflow-hidden flex">
    <div
      className="-z-10 left-0 bottom-0 h-full bg-contain bg-gray-500 aspect-square bg-no-repeat"
      style={{ backgroundImage: `url(${strDrinkThumb})` }}
    />
    <div className="p-8 flex w-full flex-col gap-4 bg-neutral-900">
      <h3 className="font-abrilFatface text-7xl tracking-wide text-white">
        {strDrink}
      </h3>
      <ol className="inline-flex flex-wrap gap-2">
        {ingredientsWithMeasurements.map((item) => (
          <Ingredient key={item.ingredient} {...item} />
        ))}
      </ol>
      {method && (
        <div className="border-t border-white text-white mt-4 flex flex-col gap-4">
          <h4 className="font-abrilFatface pt-4 text-3xl">Method</h4>
          <ol className="list-inside list-decimal font-lato">
            {method.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ol>
        </div>
      )}
      {onClick && (
        <Button onClick={onClick} className="inline-flex items-center gap-4">
          Randomise Cocktail
          <SparklesIcon className="w-5 h-5" />
        </Button>
      )}
    </div>
  </div>
)

export default CocktailProfile
