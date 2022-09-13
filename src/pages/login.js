import { signIn, signOut } from "next-auth/react"
import { useSession } from "lib/next-auth-react-query"

export default function Component() {
  const [session, loading] = useSession()
  console.debug("session", session)

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
