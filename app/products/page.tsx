'use client'
import RecentItems, {
    Product,
    RecentItemsProps,
} from '@/components/RecentItems'
import { SkeletonCard } from '@/components/SkeletonCard'
import { useToast } from '@/components/ui/use-toast'
import { getAllProducts } from '@/services/getData'
import { useEffect, useState } from 'react'

export default function Products() {
    const [data, setData] = useState<Product[] | null>(null)
    const { toast } = useToast()

    useEffect(() => {
        async function fetchAllData() {
            try {
                await getAllProducts().then((res) => {
                    setData(res)
                })
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
