const WithImage = ({ isFetching, strDrink, strDrinkThumb }) => {
  if (isFetching)
    return (
      <div class="relative w-80 bg-gray-500 animate-pulse rounded-lg border border-gray-200 shadow-md overflow-hidden  aspect-square"></div>
    )

  return (
    <div
      class="relative w-80 bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700 bg-cover aspect-square"
      style={{ backgroundImage: `url(${strDrinkThumb})` }}
    >
      <div className="absolute bottom-0 flex items-end left-0 h-1/3 w-full bg-gradient-to-t  from-blue-500">
        <h5 class="p-4 text-white text-3xl font-bold">{strDrink}</h5>
      </div>
    </div>
  )
}

export default WithImage
