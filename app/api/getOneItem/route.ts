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

        const data = await collection.findOne(searchParams)

        return NextResponse.json(data)
    } catch (error) {
        console.error('Error:', error)
        return NextResponse.error()
    } finally {
        await client.close()
    }
}
