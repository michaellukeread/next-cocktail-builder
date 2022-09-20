import React, { FC } from "react"
import Link from "next/link"

interface OverviewProps {
  id: string
  title: string
  image: string
}

const Overview: FC<OverviewProps> = ({ id, title, image }) => (
  <Link href={`/cocktails/${id}`}>
    <a className="flex justify-between rounded bg-darkest overflow-hidden hover:translate-x-2 duration-300">
      <div className="flex flex-col px-8 py-6 gap-6">
        <h4 className="text-6xl text-white font-abrilFatface">{title}</h4>
      </div>

      <div
        className="w-2/3 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.4), rgba(0,0,0,1)), url(${image})`,
        }}
      />
    </a>
  </Link>
)

export default Overview
