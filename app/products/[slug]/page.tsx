import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div className="flex flex-col">
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
                    <p className="text-xl text-muted-foreground">Item title</p>
                    <p className="text-xl text-muted-foreground">
                        Availabile:{' '}
                    </p>
                    <small className="text-sm font-medium leading-none">
                        128$
                    </small>
                </CardContent>
            </Card>
            <div className="flex gap-4 my-8">
                <p className="text-xl text-muted-foreground">Add to store</p>
                <ShoppingBag />
            </div>
        </div>
    )
}
