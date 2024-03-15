import { NextRequest, NextResponse } from 'next/server'
import connectToDatabase from '../utils/connectdatabase'

export async function POST(request: NextRequest) {
    const { data } = await request.json()
    const { client, collection } = await connectToDatabase()

    try {
        if (!client && !collection) {
            throw new Error('MongoDB connection error.')
        }

        if (!data) {
            throw new Error('No data found.')
        }
        const response = await collection.insertOne({ data })

        return NextResponse.json(response)
    } catch (error) {
        console.error('Error:', error)
        return NextResponse.error()
    } finally {
        await client.close()
    }
}
