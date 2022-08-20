import { Navbar, ProgressiveSearch, Layout, Featured, Footer } from "components"

const Home = () => {
  return (
    <>
      <Navbar />
      <Layout className="flex flex-col items-center gap-8">
        <ProgressiveSearch />
        <section className="grid grid-cols-6 border border-red-500 gap-4">
          <Featured
            name="Popular Cocktails"
            link={{ title: "Visit here", to: "/cocktails/popular" }}
            className="bg-pouplar"
          />
          <Featured
            name="Random Cocktail"
            link={{ title: "Visit here", to: "/cocktails/random" }}
            className="bg-random"
          />
          <Featured
            name="Search by Ingredient"
            link={{ title: "Visit here", to: "/cocktails/ingredients" }}
            className="bg-ingredients"
          />
        </section>
      </Layout>
      <Footer />
    </>
  )
}

export default Home
