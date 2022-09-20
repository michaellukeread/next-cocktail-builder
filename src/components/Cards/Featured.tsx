import React, { FC } from "react"
import Link from "next/link"

import { classNames } from "utils"

interface FeaturedProps {
  name: string
  to: string
  className?: string
}

const Featured: FC<FeaturedProps> = ({ name, to, className }) => (
  <Link href={to}>
    <a
      className={classNames(
        className,
        "relative flex justify-end flex-col rounded-lg border border-primary bg-white h-96 bg-cover overflow-hidden hover:opacity-50 duration-300"
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

export default Featured
