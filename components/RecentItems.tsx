import { ObjectId } from 'mongodb'
import ItemCard from './ItemCard'

export interface Product {
    _id: ObjectId
    name: string
    prize: number
    availability: boolean
}

export interface RecentItemsProps {
    data: Array<Product>
}
const RecentItems: React.FC<RecentItemsProps> = ({ data }) => {
    return (
        <div className="w-full grid grid-cols-2 gap-4 my-4">
            {data.map((product, index) => (
                <ItemCard
                    key={index}
                    _id={product._id}
                    availability={product.availability}
                    name={product.name}
                    prize={product.prize}
                />
            ))}
        </div>
    )
}

export default RecentItems
