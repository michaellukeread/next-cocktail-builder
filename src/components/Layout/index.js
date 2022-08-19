import PureLayout from "./Layout"

const Layout = ({ className, children }) => (
  <PureLayout className={className}>{children}</PureLayout>
)

export default Layout
