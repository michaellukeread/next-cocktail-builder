import React, { FC } from "react"
import { AppProps } from "next/app"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { Layout } from "components"
import { queryClient } from "lib/queryClient"

import "index.css"

const App: FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => (
  <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Hydrate>
    <ReactQueryDevtools initialIsOpen />
  </QueryClientProvider>
)

export default App
