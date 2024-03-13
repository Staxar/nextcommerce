'use client'
import Carousel from '@/components/Carousel'
import RecentItems, { Product, productData } from '@/components/RecentItems'
import { SkeletonCard } from '@/components/SkeletonCard'
import { getLimitProducts } from '@/services/getData'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
    const [data, setData] = useState<productData[] | null>(null)
    // useEffect(() => {
    //     async function fetchLimitData() {
    //         const response = await axios.get('/api/getLimitData')
    //         if (response.status === 200) {
    //             setData(response.data)
    //         } else {
    //             console.log('Something goes wrong!')
    //         }
    //     }

    //     fetchLimitData()
    // }, [])
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
