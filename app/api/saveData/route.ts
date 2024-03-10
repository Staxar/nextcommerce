import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export async function POST(req: Request, res: NextApiResponse) {
    const MONGODB_URI = process.env.MONGODB_URI
    const { data } = await req.json()
    console.log(data)
    if (MONGODB_URI) {
        const client = new MongoClient(MONGODB_URI)
        const database = client.db('nextcommerce')
        const collection = database.collection('nextcommerce')

        const res = await collection.insertOne({ data })

        return Response.json(res)
    } else {
        return console.log('Something went wrong!')
    }
}
