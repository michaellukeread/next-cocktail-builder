import { ProgressiveSearch, Layout, Featured } from "components"

const Home = () => (
  <Layout className="flex flex-col items-center">
    <ProgressiveSearch />
    <section className="pt-8 w-full grid auto-cols-fr grid-flow-col gap-8">
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
      <Featured
        name="Search by Letter"
        link={{ title: "Visit here", to: "/cocktails/byletter" }}
        className="bg-ingredients"
      />
    </section>
  </Layout>
)

export default Home
