import { ReactNode } from "react"
import Link from "next/link"

type Props = {
  to: string
  children: ReactNode
}

export const Basic = ({ to, children }: Props) => (
  <Link href={to}>
    <a className="rounded bg-secondary text-light p-4 text-2xl leading-5 font-abrilFatface duration-150 hover:ring-2 ring-light">
      {children}
    </a>
  </Link>
)
