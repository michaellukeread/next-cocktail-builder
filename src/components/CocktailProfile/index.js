import { useCocktailProfile } from "./useCocktailProfile"

import Loading from "./Loading"
import PureCocktailProfile from "./CocktailProfile"

const CocktailProfile = ({
  isFetching,
  strDrink,
  strDrinkThumb,
  strInstructions,
  onClick,
  ...rest
}) => {
  if (isFetching) return <Loading />

  const { method, ingredientsWithMeasurements } = useCocktailProfile(
    strInstructions,
    rest
  )

  return (
    <PureCocktailProfile
      strDrink={strDrink}
      strDrinkThumb={strDrinkThumb}
      method={method}
      ingredientsWithMeasurements={ingredientsWithMeasurements}
      onClick={onClick}
    />
  )
}

export default CocktailProfile
