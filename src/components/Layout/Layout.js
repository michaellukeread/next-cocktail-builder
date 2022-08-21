import { classNames } from "utils"

const Layout = ({ className, children }) => (
  <main
    className={classNames(
      className,
      "mt-8 container mx-auto min-h-[calc(100vh-9.5rem)]"
    )}
  >
    {children}
  </main>
)

export default Layout
