import { connectDB } from '@/services/connectDB'
import { Collection, MongoClient, Document } from 'mongodb'

interface Connection {
    collection: Collection<Document>
    client: MongoClient
}

export async function GET(req: Request) {
    const connection: Connection | null = await connectDB()
    if (connection) {
        try {
            const res = await connection.collection.find().limit(5).toArray()
            return Response.json(res)
        } finally {
            await connection.client.close()
        }
    } else {
        console.log('Connection to database failed!')
    }
}
