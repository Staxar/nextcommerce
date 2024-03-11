import { AddProduct } from '@/components/AddProduct'
import { ItemTable } from '@/components/ItemTable'

export default function Profile() {
    return (
        <div className="w-full p-2 m-auto">
            <div className="flex flex-col gap-2">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Add new product
                </h3>
                <AddProduct />
            </div>
            <ItemTable />
        </div>
    )
}
