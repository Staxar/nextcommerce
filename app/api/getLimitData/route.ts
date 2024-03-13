import { MongoClient } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'
import connectToDatabase from '../utils/connectdatabase'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    const { client, collection } = await connectToDatabase()
    const MONGODB_URI = process.env.MONGODB_URI
    try {
        if (!MONGODB_URI) {
            throw new Error('MongoDB URI not found.')
        }
        if (!client && !collection) {
            throw new Error('MongoDB connection error.')
        }

        const { searchParams } = new URL(request.url)
        const limitData = Number(searchParams.get('limit')) || 5

        const data = await collection.find().limit(limitData).toArray()

        return NextResponse.json(data)
    } catch (error) {
        console.error('Error:', error)
        return NextResponse.error()
    } finally {
        client.close()
    }
}
