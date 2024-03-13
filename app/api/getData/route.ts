import { connectDB } from '@/services/connectDB'
import { Collection, MongoClient, Document } from 'mongodb'

export interface Connection {
    collection: Collection<Document>
    client: MongoClient
}

export async function GET() {
    const connection: Connection | null = await connectDB()
    if (connection) {
        try {
            const data = await connection.collection.find().toArray()
            return Response.json(data)
        } catch (error) {
            return new Response(`error: ${error}`, {
                status: 400,
            })
        } finally {
            await connection.client.close()
        }
    } else {
        console.log('Connection to database failed!')
    }
}
