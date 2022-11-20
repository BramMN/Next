import { useSession } from "next-auth/react"
import Link from "next/link"

import classes from "./main-navigation.module.css"

function MainNavigation() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  console.log(session, status, loading)

  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        Next Auth
      </Link>
      <nav>
        <ul>
          {!session && !loading && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation