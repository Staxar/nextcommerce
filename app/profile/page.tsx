'use client'
import { AddProduct } from '@/components/AddProduct'
import { ItemTable } from '@/components/ItemTable'
import { productData } from '@/components/RecentItems'
import { useState } from 'react'

export default function Profile() {
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
        <div className="w-full p-2 m-auto lg: max-w-5xl">
            <div className="flex flex-col gap-2 w-full lg: max-w-1/2">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Add new product
                </h3>
                <AddProduct />
            </div>
            <ItemTable />
        </div>
    )
}
