'use client'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import axios from 'axios'
import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { SkeletonCard } from '@/components/SkeletonCard'
import { productData } from '@/components/RecentItems'

export default function Page({ params }: { params: { slug: string } }) {
    const [data, setData] = useState<productData | undefined>(undefined)

    useEffect(() => {
        async function fetchOneItem() {
            try {
                const response = await axios.get('/api/getOneItem', {
                    params: { slug: params.slug },
                })
                setData(response.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        if (params.slug) {
            fetchOneItem()
        }
    }, [params])

    return (
        <div className="flex flex-col">
            {data ? (
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
                        <p className="text-xl text-muted-foreground">
                            {data.data.name}
                        </p>
                        <p className="text-xl text-muted-foreground">
                            Available:{' '}
                            {data.data.availability
                                ? 'Available'
                                : 'Out of stock'}
                        </p>
                        <small className="text-sm font-medium leading-none">
                            Prize: {data.data.prize}
                        </small>
                    </CardContent>
                </Card>
            ) : (
                <SkeletonCard />
            )}

            <div className="flex gap-4 my-8">
                <p className="text-xl text-muted-foreground">Add to store</p>
                <ShoppingBag />
            </div>
        </div>
    )
}
