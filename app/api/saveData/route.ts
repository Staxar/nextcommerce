import { connectDB } from '@/services/connectDB'

export async function POST(req: Request) {
    const { data } = await req.json()

    const db = await connectDB()

    const res = await db?.collection.insertOne({ data })
    console.log(res)
    return Response.json(res)
}
