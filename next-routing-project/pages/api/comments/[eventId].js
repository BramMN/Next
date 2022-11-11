function handler(req, res) {
  const eventId = req.query.eventId

  if (req.method === "POST") {
    const { email, name, text } = req.body

    if (!email.includes("@") || !name || name.trim() === "" || !text || text.trim() === "") {
      res.status(422).json({ message: "Invalud input" })
      return
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    }
    console.log(newComment)

    res.status(201).json({ message: "Added comment.", comment: newComment })
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Bram", text: "Hello" },
      { id: "c2", name: "Bart", text: "Bonjour" },
    ]

    res.status(200).json({ comments: dummyList })
  }
}

export default handler
