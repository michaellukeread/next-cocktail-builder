import React, { FC } from "react"
import Link from "next/link"

import { classNames } from "utils"

type SquareProps = {
  title: string
  to: string
  image: string | null
  className?: string
}

const Square: FC<SquareProps> = ({ title, to, image, className }) => (
  <Link href={to}>
    <a
      className={classNames(
        className
          ? className
          : "h-full aspect-square rounded-xl border border-primary flex items-center justify-center bg-cover font-abrilFatface text-primary bg-black bg-opacity-50 hover:underline"
      )}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`,
      }}
    >
      <h4 className="text-5xl text-center px-4 text-primary">{title}</h4>
    </a>
  </Link>
)

export default Square
