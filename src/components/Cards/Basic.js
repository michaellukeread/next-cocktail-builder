const Basic = ({ strInstructions }) => {
  const method = strInstructions.split(".").slice(0, -1)

  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Method
      </h5>
      <ul className="ml-4 list-decimal">
        {method?.map((instruction) => (
          <li className="font-normal text-gray-700 dark:text-gray-400">
            {instruction}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Basic
