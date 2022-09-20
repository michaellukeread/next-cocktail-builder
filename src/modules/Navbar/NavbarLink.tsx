import React, { FC, ReactNode } from "react"
import Link from "next/link"

import { classNames } from "utils"

interface NavbarLinkProps {
  to: string
  children: ReactNode
  active?: boolean
}

export const NavbarLink: FC<NavbarLinkProps> = ({
  to,
  children,
  active = false,
}: {
  to: string
  children: ReactNode
  active?: boolean
}) => (
  <Link href={to}>
    <a
      className={classNames(
        active && "border-b",
        "text-white h-full items-center flex hover:border-b"
      )}
    >
      {children}
    </a>
  </Link>
)
