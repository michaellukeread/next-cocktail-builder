const measurementsAndIngredients = (ingredients, measurements) =>
  ingredients.map((ingredient, i) => ({
    ingredient,
    measurement: measurements[i],
  }))

export default measurementsAndIngredients
