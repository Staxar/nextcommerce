'use client'
import { useEffect, useState } from 'react'
import { SkeletonCard } from '@/components/SkeletonCard'
import { productData } from '@/components/RecentItems'
import ItemDetails from '@/components/ItemDetails'
import axios from 'axios'
import { useToast } from '@/components/ui/use-toast'

export default function Page({ params }: { params: { slug: string } }) {
    const [data, setData] = useState<productData | null>(null)
    const { toast } = useToast()

    useEffect(() => {
        async function fetchOneItem() {
            try {
                const response = await axios.get('/api/getOneItem', {
                    params: { slug: params.slug },
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

        if (params.slug) {
            fetchOneItem()
        }
    }, [params, toast])

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
