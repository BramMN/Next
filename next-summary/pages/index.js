import { MongoClient } from "mongodb"
import Head from "next/head"
import { Fragment } from "react"
import MeetupList from "../components/meetups/MeetupList"

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>PP and BB Events</title>
        <meta
          name="description"
          content="Browse a huge list of things that PP and BB need to do!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGODB)

  const db = client.db()

  const meetupsCollection = db.collection("meetups")

  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  }
}

export default HomePage
