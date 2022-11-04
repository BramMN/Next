import { useRouter } from "next/router"

function ClientProjectsPage() {
  const router = useRouter()

  console.log(router.query)

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "bram", clientprojectid: "projecta" }
    })
  }
  
  return (
    <div>
      <h1>The Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  )
}

export default ClientProjectsPage
