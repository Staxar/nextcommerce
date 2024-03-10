import { connectDB } from '@/services/connectDB'
import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export async function POST(req: Request) {
    const { data } = await req.json()
    const db = await connectDB()

    const res = await db?.collection.insertOne({ data })

    return Response.json(res)
}
