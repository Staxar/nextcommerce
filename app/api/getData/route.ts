import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server'

export async function GET() {
    const MONGODB_URI = process.env.MONGODB_URI
    if (MONGODB_URI) {
        const client = new MongoClient(MONGODB_URI)
        await client.connect()
        const database = client.db('nextcommerce')
        const collection = database.collection('nextcommerce')

        const data = await collection.find().toArray()

        return NextResponse.json(data)
    } else {
        return NextResponse.error()
    }
}
