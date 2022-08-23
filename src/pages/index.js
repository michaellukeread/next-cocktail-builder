import { ProgressiveSearch, Featured, Popular } from "components"

const Home = () => (
  <>
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center flex-col justify-center bg-black bg-opacity-75 gap-8">
      <h1 className="text-9xl text-white font-abrilFatface">
        Cocktail Builder
      </h1>
      <div className="w-96">
        <ProgressiveSearch />
      </div>
      <div className="-z-10 absolute top-0 left-0 bg-cover w-full h-full bg-home" />
    </section>
    <section className="p-32 bg-neutral-900 pt-8 w-full grid grid-cols-12 gap-8">
      <Featured
        name="Popular Cocktails"
        link={{ title: "Visit here", to: "/cocktails/popular" }}
        className="bg-cocktail1 col-span-6"
      />
      <Featured
        name="Random Cocktail"
        link={{ title: "Visit here", to: "/cocktails/random" }}
        className="bg-cocktail2 col-span-6"
      />
      <Featured
        name="Search by Ingredient"
        link={{ title: "Visit here", to: "/cocktails/ingredients" }}
        className="bg-cocktail3 col-span-6"
      />
      <Featured
        name="Search by Letter"
        link={{ title: "Visit here", to: "/cocktails/byletter" }}
        className="bg-cocktail3 col-span-6"
      />
    </section>
    <section className="p-32 bg-neutral-900 pt-8 w-full">
      <Popular />
    </section>
  </>
)

export default Home
