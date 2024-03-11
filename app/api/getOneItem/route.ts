import { connectDB } from '@/services/connectDB'
import { Collection, MongoClient, Document } from 'mongodb'

interface Connection {
    collection: Collection<Document>
    client: MongoClient
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)

    const connection: Connection | null = await connectDB()
    if (connection) {
        try {
            const res = await connection.collection.findOne(searchParams)

            return Response.json(res)
        } finally {
            await connection.client.close()
        }
    } else {
        console.log('Connection to database failed!')
    }
}
