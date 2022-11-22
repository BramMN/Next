import Link from "next/link"
import classes from "./MainNavigation.module.css"

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>PP & BB Events</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Events</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
