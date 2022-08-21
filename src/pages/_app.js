import { useState } from "react"
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { Navbar, Footer } from "components"

import "index.css"

const App = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}
export default App
