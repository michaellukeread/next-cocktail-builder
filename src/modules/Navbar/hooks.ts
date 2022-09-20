import { useCallback } from "react"

import { signOut, signIn } from "next-auth/react"
import { useSession } from "lib/next-auth-react-query"

export const useNavbar = () => {
  const [session] = useSession()

  const user = session?.user

  const logout = useCallback(() => signOut(), [])
  const login = useCallback(() => signIn(), [])

  const items = [{ label: "Logout", onClick: logout }]

  return { logout, login, user, items }
}