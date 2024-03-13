import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server'

const MONGODB_URI = process.env.MONGODB_URI || ''

export async function GET() {
    const client = new MongoClient(MONGODB_URI)
    await client.connect()
    const database = client.db('nextcommerce')
    const collection = database.collection('nextcommerce')

    const data = await collection.find().toArray()

    return NextResponse.json(data)
}
