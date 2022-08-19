import { classNames } from "utils"

const Layout = ({ className, children }) => (
  <main
    className={classNames(
      className,
      "container mx-auto min-h-[calc(100vh-8rem)] bg-blue-50"
    )}
  >
    {children}
  </main>
)

export default Layout
