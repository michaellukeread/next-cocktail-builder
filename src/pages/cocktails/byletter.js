import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

import { ProgressiveSearch, Layout, CocktailProfile, Spinner } from "components"
import { ALPHABET, API_SERVER } from "config"
import { classNames } from "utils"

const QUERY_KEY = "byletter"

const fetcher = async (letter) => {
  const response = await fetch(
    `${API_SERVER}${process.env.NEXT_PUBLIC_API_KEY}/search.php?f=${letter}`
  )
  const data = await response.json()

  return data.drinks
}

const Letter = ({ query }) => {
  const { isLoading, isFetching, error, data } = useQuery(
    [QUERY_KEY, query.letter],
    () => fetcher(query.letter),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  )

  if (isLoading)
    return (
      <Layout className="flex items-center justify-center">
        <Spinner />
      </Layout>
    )
  if (error) return <div>error...</div>

  return (
    <Layout className="flex items-center flex-col gap-8">
      <ProgressiveSearch />
      <ol className="inline-flex gap-1">
        {ALPHABET.map((letter) => (
          <Link href={`?letter=${letter}`}>
            <a
              className={classNames(
                query.letter === letter && "underline",
                "hover:underline"
              )}
            >
              {letter}
            </a>
          </Link>
        ))}
      </ol>
      {data && (
        <section className="w-full flex flex-col gap-4">
          {data.map((item) => (
            <CocktailProfile isFetching={isFetching} {...item} />
          ))}
        </section>
      )}
    </Layout>
  )
}

Letter.getInitialProps = async ({ query }) => ({ query })

export default Letter
