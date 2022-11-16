import Link from "next/link"
import Logo from "./logo"

function MainNavigation() {
  return (
    <header>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
