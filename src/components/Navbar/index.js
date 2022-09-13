import { signOut } from "next-auth/react"
import { useSession } from "lib/next-auth-react-query"
import { useCallback } from "react"

import PureNavbar from "./Navbar"

const Navbar = () => {
  const [session] = useSession()

  console.debug("session", session)

  const logout = useCallback(() => signOut(), [])

  return <PureNavbar {...session} logout={logout} />
}

export default Navbar
