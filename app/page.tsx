'use client'
import Carousel from '@/components/Carousel'
import RecentItems, { Product } from '@/components/RecentItems'
import { SkeletonCard } from '@/components/SkeletonCard'
import { useToast } from '@/components/ui/use-toast'
import { getLimitProducts } from '@/services/getData'
import { useEffect, useState } from 'react'

export default function Home() {
    const [data, setData] = useState<Product[] | null>(null)
    const { toast } = useToast()

    useEffect(() => {
        async function fetchLimitData() {
            try {
                await getLimitProducts(5).then((res) => {
                    setData(res)
                })
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchLimitData()
    }, [])
    return (
        <div className="flex flex-col place-items-center text-3xl text-center my-4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Best ecommerce shop
            </h2>
            <Carousel />
            <p className="text-xl leading-7">Recent items</p>
            {data ? <RecentItems data={data} /> : <SkeletonCard />}
        </div>
    )
}
