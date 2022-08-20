import Link from "next/link"

import { classNames } from "utils"

const Featured = ({ name, link: { title, to }, className }) => (
  <article
    className={classNames(
      className,
      "relative col-span-2 rounded-lg bg-white p-4 h-80 aspect-square bg-cover overflow-hidden"
    )}
  >
    <div className="absolute bottom-0 left-0 p-4 flex flex-col w-full gap-4 justify-end h-2/3 bg-gradient-to-t  from-black">
      <h3 className="text-white text-3xl font-bold">{name}</h3>
      <Link href={to}>
        <a className="text-white bg-gradient-to-br max-w-max from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          {title}
        </a>
      </Link>
    </div>
  </article>
)

{
  /* <div className="absolute bottom-0 flex items-end left-0 h-1/3 w-full bg-gradient-to-t  from-blue-500">
<h5 class="p-4 text-white text-3xl font-bold">{strDrink}</h5>
</div> */
}

export default Featured
