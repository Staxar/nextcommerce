import Image from 'next/image'
import { Card, CardHeader, CardContent, CardFooter } from './ui/card'
import Link from 'next/link'
import { ObjectId } from 'mongodb'

interface ItemCardProps {
    _id: ObjectId
    name: string
    prize: number
    availability: boolean
}

function ItemCard({ _id, name, prize, availability }: ItemCardProps) {
    return (
        <Link href={`/products/${_id}`}>
            <Card className="w-full flex flex-col items-center justify-center h-48 lg:max-w-xs">
                <CardHeader>
                    <Image
                        src={'/images/60386643.png'}
                        alt="item-image"
                        width={50}
                        height={50}
                    />
                </CardHeader>
                <CardContent className="items-center justify-center text-center">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        {name}
                    </h4>
                </CardContent>
                <CardFooter>
                    <small className="text-md font-medium leading-none">
                        {prize}
                    </small>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default ItemCard
