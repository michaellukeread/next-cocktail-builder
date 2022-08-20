import { forwardRef } from "react"

import Link from "next/link"

const NextLink = forwardRef(({ href, children, ...rest }, ref) => (
  <Link href={href}>
    <a ref={ref} {...rest}>
      {children}
    </a>
  </Link>
))

export default NextLink
