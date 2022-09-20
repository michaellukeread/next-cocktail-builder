import React, { FC } from "react"

import { ProgressiveSearch } from "components"

interface LandingProps {
  title: string
}

const Landing: FC<LandingProps> = ({ title }) => (
  <header className="relative min-h-[calc(100vh-4rem)] flex items-center flex-col justify-center gap-8">
    <h1 className="text-9xl text-white font-abrilFatface">{title}</h1>
    <div className="w-96">
      <ProgressiveSearch />
    </div>
    <div className="-z-10 absolute top-0 left-0 bg-cover w-full h-full bg-home" />
  </header>
)

export default Landing
