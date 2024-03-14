import { NextResponse } from 'next/server'
import connectToDatabase from '../utils/connectdatabase'

export const dynamic = 'edge'

export async function GET() {
    const { client, collection } = await connectToDatabase()
    const MONGODB_URI = process.env.MONGODB_URI
    try {
        if (!MONGODB_URI) {
            throw new Error('MongoDB URI not found.')
        }
        if (!client && !collection) {
            throw new Error('MongoDB connection error.')
        }

        const data = await collection.find().toArray()

        return NextResponse.json(data)
    } catch (error) {
        console.error('Error:', error)
        return NextResponse.error()
    } finally {
        await client.close()
    }
}
