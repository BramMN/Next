import { MongoClient } from "mongodb"

export async function connectToDatabase() {
  const clinet = await MongoClient.connect(process.env.MONGODB)

  return client
}
