'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { SkeletonCard } from '@/components/SkeletonCard'
import { productData } from '@/components/RecentItems'
import ItemDetails from '@/components/ItemDetails'

export default function Page({ params }: { params: { slug: string } }) {
    const [data, setData] = useState<productData | null>(null)

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
                <ItemDetails data={data.data} _id={data._id} />
            ) : (
                <SkeletonCard />
            )}
        </div>
    )
}
