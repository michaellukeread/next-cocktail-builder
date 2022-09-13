import Link from "next/link"

import { Tags, Ingredients } from "components"

const Overview = ({ idDrink, strDrink, strDrinkThumb, strTags, ...props }) => (
  <Link href={`/cocktails/${idDrink}`}>
    <a className="flex justify-between rounded bg-black overflow-hidden hover:translate-x-2 duration-300">
      <div className="flex flex-col px-8 py-6 gap-6">
        <h4 className="text-6xl text-white font-abrilFatface">{strDrink}</h4>
        <Tags strTags={strTags} />
        <Ingredients {...props} />
      </div>

      <div
        className="w-2/3 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.4), rgba(0,0,0,1)), url(${strDrinkThumb})`,
        }}
      />
    </a>
  </Link>
)

export default Overview
