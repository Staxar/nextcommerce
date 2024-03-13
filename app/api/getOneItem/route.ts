import { connectDB } from '@/services/connectDB'
import { Connection } from '../getData/route'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)

    const connection: Connection | null = await connectDB()
    if (connection) {
        try {
            const res = await connection.collection.findOne(searchParams)

            return Response.json(res)
        } catch (error) {
            return Response.error()
        } finally {
            await connection.client.close()
        }
    } else {
        console.log('Connection to database failed!')
        return Response.error()
    }
}
