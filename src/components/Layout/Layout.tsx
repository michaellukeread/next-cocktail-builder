import React, { FC, ReactNode } from "react"

import { Navbar } from "modules"
import { Footer } from "components"
import { classNames } from "utils"

interface LayoutProps {
  className?: string
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ className, children }) => (
  <>
    <Navbar />
    <main
      className={classNames(
        className,
        "my-16 px-8 space-y-16 container mx-auto min-h-[calc(100vh-9.5rem)]"
      )}
    >
      {children}
    </main>
    <Footer />
  </>
)

export default Layout
