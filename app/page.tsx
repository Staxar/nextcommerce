'use client'
import Carousel from '@/components/Carousel'
import RecentItems, { productData } from '@/components/RecentItems'
import { SkeletonCard } from '@/components/SkeletonCard'
import { useToast } from '@/components/ui/use-toast'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
    const [data, setData] = useState<productData[] | null>(null)
    const { toast } = useToast()
    useEffect(() => {
        async function fetchLimitData() {
            try {
                const response = await axios.get('/api/getData', {
                    params: { limit: 5 },
                })
                if (response.status === 200) {
                    setData(response.data)
                } else {
                    toast({
                        variant: 'destructive',
                        description: 'Failed to fetch data!',
                    })
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchLimitData()
    }, [toast])
    return (
        <div className="flex flex-col place-items-center text-3xl text-center my-4 lg:w-full max-w-5xl">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Best ecommerce shop
            </h2>
            <Carousel />
            <p className="text-xl leading-7">Recent items</p>

            {data ? <RecentItems data={data} /> : <SkeletonCard />}
        </div>
    )
}
