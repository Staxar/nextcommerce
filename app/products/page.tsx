'use client'
import RecentItems, { productData } from '@/components/RecentItems'
import { SkeletonCard } from '@/components/SkeletonCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useToast } from '@/components/ui/use-toast'

export default function Products() {
    const [data, setData] = useState<productData[] | null>(null)
    const { toast } = useToast()
    useEffect(() => {
        async function fetchAllData() {
            try {
                const response = await axios.get('/api/getData')
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
        fetchAllData()
    }, [])
    return (
        <div className="">
            {data ? <RecentItems data={data} /> : <SkeletonCard />}
        </div>
    )
}
