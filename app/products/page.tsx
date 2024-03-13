'use client'
import RecentItems, { productData } from '@/components/RecentItems'
import { SkeletonCard } from '@/components/SkeletonCard'
import { useState } from 'react'

export default function Products() {
    const [data, setData] = useState<productData[] | null>(null)

    // useEffect(() => {
    //     async function fetchAllData() {
    //         try {
    //             await getAllProducts().then((res) => {
    //                 setData(res)
    //             })
    //         } catch (error) {
    //             console.error('Error fetching data:', error)
    //         }
    //     }
    //     fetchAllData()
    // }, [])
    return (
        <div className="">
            {data ? <RecentItems data={data} /> : <SkeletonCard />}
        </div>
    )
}
