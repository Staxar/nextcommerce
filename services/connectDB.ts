import { MongoClient } from 'mongodb'

export async function connectDB() {
    const MONGODB_URI = process.env.MONGODB_URI
    if (MONGODB_URI) {
        const client = new MongoClient(MONGODB_URI)
        await client.connect()
        const database = client.db('nextcommerce')
        const collection = database.collection('nextcommerce')
        return { collection, client }
    } else {
        console.log('Something went wrong!')
        return null
    }
}
