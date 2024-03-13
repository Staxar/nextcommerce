import { MongoClient } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export async function GET(request: NextRequest) {
    const MONGODB_URI = process.env.MONGODB_URI
    const { searchParams } = new URL(request.url)
    const limitData = Number(searchParams) || 5
    if (MONGODB_URI && limitData) {
        const client = new MongoClient(MONGODB_URI)
        await client.connect()
        const database = client.db('nextcommerce')
        const collection = database.collection('nextcommerce')

        const data = await collection.find().limit(limitData).toArray()

        return NextResponse.json(data)
    } else {
        return NextResponse.error()
    }
}
