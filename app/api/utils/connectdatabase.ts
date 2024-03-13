import { MongoClient } from 'mongodb'

async function connectToDatabase() {
    const MONGODB_URI = process.env.MONGODB_URI
    if (!MONGODB_URI) {
        throw new Error('MongoDB URI not found.')
    }
    const client = new MongoClient(MONGODB_URI)
    await client.connect()
    const database = client.db('nextcommerce')
    const collection = database.collection('nextcommerce')
    return { client, collection }
}

export default connectToDatabase
