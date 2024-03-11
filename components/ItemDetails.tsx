import Image from 'next/image'
import { productData, productDetails } from './RecentItems'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { ShoppingBag } from 'lucide-react'

function ItemDetails({ data }: productData) {
    return (
        <Card className="text-center items-center">
            <CardHeader>
                <Image
                    src={'/images/60386643.png'}
                    alt="product image"
                    height={500}
                    width={250}
                />
            </CardHeader>
            <CardContent>
                <p className="text-xl text-muted-foreground">{data.name}</p>
                <p className="text-xl text-muted-foreground">
                    Available:{' '}
                    {data.availability ? 'Available' : 'Out of stock'}
                </p>
                <small className="text-sm font-medium leading-none">
                    Prize: {data.prize}
                </small>
            </CardContent>
            <CardFooter className="flex justify-end">
                <small className="text-xs font-medium leading-none flex gap-2 items-center">
                    Add to store: <ShoppingBag size={18} />
                </small>
            </CardFooter>
        </Card>
    )
}

export default ItemDetails
