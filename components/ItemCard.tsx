import Image from 'next/image'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from './ui/card'

function ItemCard() {
    return (
        <Card className="w-full flex flex-col items-center justify-center h-48">
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
                    Item title
                </h4>
            </CardContent>
            <CardFooter>
                <small className="text-md font-medium leading-none">228$</small>
            </CardFooter>
        </Card>
    )
}

export default ItemCard
