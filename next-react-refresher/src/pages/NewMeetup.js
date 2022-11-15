import { useHistory } from "react-router-dom"
import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetupsPage() {
  const history = useHistory()
  
  function addMeetupHandler(meetupData) {
    fetch(process.env.REACT_APP_FIREBASE + "meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      history.replace("/")
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetupsPage