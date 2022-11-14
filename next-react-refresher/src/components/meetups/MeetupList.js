import MeetupItem from "./MeetupItem"
import classes from "./MeetupList.module.css"

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map(meetup => (
        <MeetupItem
          key={meetup.id}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          image={meetup.image}
          id={meetup.id}
        />
      ))}
    </ul>
  )
}

export default MeetupList
