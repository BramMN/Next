import { MongoClient } from "mongodb"

async function handler(req, res) {
  const eventId = req.query.eventId

  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO + "/events?retryWrites=true&w=majority")

  if (req.method === "POST") {
    const { email, name, text } = req.body

    if (!email.includes("@") || !name || name.trim() === "" || !text || text.trim() === "") {
      res.status(422).json({ message: "Invalud input" })
      return
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    }

    const db = client.db()

    const result = await db.collection("comments").insertOne(newComment)

    console.log(result)

    newComment.id = result.insertedId

    res.status(201).json({ message: "Added comment.", comment: newComment })
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Bram", text: "Hello" },
      { id: "c2", name: "Bart", text: "Bonjour" },
    ]

    res.status(200).json({ comments: dummyList })
  }

  client.close()
}

export default handler
