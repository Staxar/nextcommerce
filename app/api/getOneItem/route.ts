import { MongoClient } from 'mongodb'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const MONGODB_URI = process.env.MONGODB_URI
    if (MONGODB_URI) {
        const client = new MongoClient(MONGODB_URI)
        await client.connect()
        const database = client.db('nextcommerce')
        const collection = database.collection('nextcommerce')

        const res = await collection.findOne(searchParams)

        return Response.json({ res })
    } else {
        return Response.error()
    }
}
