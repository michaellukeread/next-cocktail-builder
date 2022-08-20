const List = ({ isFetching, items }) => {
  if (isFetching)
    return (
      <div className="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <div className="w-96 h-4 bg-gray-500 rounded"></div>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex flex-col gap-4 ">
                <div className="w-48 h-4 bg-gray-500 rounded"></div>
                <div className="w-60 h-4 bg-gray-500 rounded"></div>
                <div className="w-52 h-4 bg-gray-500 rounded"></div>
                <div className="w-72 h-4 bg-gray-500 rounded"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )

  return (
    <div className="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Ingredients
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {items.map(({ ingredient, measurement }) => (
            <li key={ingredient} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {ingredient}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {measurement}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default List
