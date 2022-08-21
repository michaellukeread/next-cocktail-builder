import Link from "next/link"

import { classNames } from "utils"

const Featured = ({ name, link: { title, to }, className }) => (
  <Link href={to}>
    <a
      className={classNames(
        className,
        "relative flex justify-end flex-col rounded bg-white h-96 bg-cover overflow-hidden hover:opacity-50 duration-300"
      )}
    >
      {" "}
      <div className="absolute bottom-0 left-0 p-8 flex flex-col w-full gap-4 justify-end h-2/3 bg-gradient-to-t  from-black">
        <h3 className="text-white text-5xl font-abrilFatface tracking-wide">
          {name}
        </h3>
      </div>
    </a>
  </Link>
)

{
  /* <div className="absolute bottom-0 flex items-end left-0 h-1/3 w-full bg-gradient-to-t  from-blue-500">
<h5 class="p-4 text-white text-3xl font-bold">{strDrink}</h5>
</div> */
}

export default Featured
