import { connectDB } from '@/services/connectDB'
import { Connection } from '../getData/route'

export async function GET() {
    const connection: Connection | null = await connectDB()

    const res = await connection?.collection.find().limit(5).toArray()
    return Response.json(res)
    // try {
    //     const res = await connection.collection.find().limit(5).toArray()
    //     return Response.json(res)
    // } catch (error) {
    //     return Response.error()
    // } finally {
    //     await connection.client.close()
    // }
}
