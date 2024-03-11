import { ObjectId } from 'mongodb'
import ItemCard from './ItemCard'

export interface Product {
    _id: ObjectId
    name: string
    prize: number
    availability: boolean
}

export interface productData {
    _id: ObjectId
    data: {
        name: string
        prize: number
        availability: boolean
    }
}

export interface RecentItemsProps {
    data: Array<productData>
}
const RecentItems: React.FC<RecentItemsProps> = ({ data }) => {
    return (
        <div className="w-full grid grid-cols-3 gap-4 my-4 p-4">
            {data.map((product, index) => (
                <ItemCard
                    key={index}
                    _id={product._id}
                    availability={product.data.availability}
                    name={product.data.name}
                    prize={product.data.prize}
                />
            ))}
        </div>
    )
}

export default RecentItems
