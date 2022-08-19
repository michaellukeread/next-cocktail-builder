import { Navbar, ProgressiveSearch, Layout } from "components"

const Home = () => {
  return (
    <>
      <Navbar />
      <Layout className="flex items-center justify-center">
        <ProgressiveSearch />
      </Layout>
    </>
  )
}

export default Home
