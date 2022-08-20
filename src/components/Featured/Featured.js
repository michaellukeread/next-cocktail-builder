import Link from "next/link"

import { classNames } from "utils"

const Featured = ({ name, link: { title, to }, className }) => (
  <article
    className={classNames(
      className,
      "relative col-span-2 rounded-lg bg-white p-4 h-96 w-96 bg-cover"
    )}
  >
    <div className="absolute bottom-0 left-0 p-4 flex flex-col gap-4">
      <h3 className="text-white text-3xl font-bold">{name}</h3>
      <Link href={to}>
        <a className="text-white bg-gradient-to-br max-w-max from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          {title}
        </a>
      </Link>
    </div>
  </article>
)

export default Featured
