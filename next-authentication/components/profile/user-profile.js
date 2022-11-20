import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import ProfileForm from "./profile-form"
import classes from "./user-profile.module.css"

function UserProfile() {
  // const { data: session, status } = useSession()
  // const loading = status === "loading"

  // const router = useRouter()

  // useEffect(() => {
  //   if (!session || status === "unauthenticated") {
  //     router.push("/auth")
  //   }
  // }, [router, session, status])

  // if (!session || loading) {
  //   return <p className={classes.profile}>Loading...</p>
  // }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  )
}

export default UserProfile
