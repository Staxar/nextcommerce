import { MongoClient } from 'mongodb'

export async function GET() {
    const MONGODB_URI = process.env.MONGODB_URI
    if (MONGODB_URI) {
        const client = new MongoClient(MONGODB_URI)
        await client.connect()
        const database = client.db('nextcommerce')
        const collection = database.collection('nextcommerce')

        const res = await collection.find().toArray()

        return Response.json({ res })
    } else {
        return Response.error()
    }
}
