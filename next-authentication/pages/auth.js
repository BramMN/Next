import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import AuthForm from "../components/auth/auth-form"

function AuthPage() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push("/")
    }
  }, [router, session, status])

  if (loading) {
    return <p>Loading...</p>
  }

  return <AuthForm />
}

export default AuthPage
