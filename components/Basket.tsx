'use client'
import { useSelector } from 'react-redux'
import { Badge } from './ui/badge'
import { ShoppingBasket } from 'lucide-react'
import { RootState } from '@/app/GlobalRedux/store'

const Basket = () => {
    const count = useSelector((state: RootState) => state.counter.value)

    return (
        <div className="flex items-center">
            <BasketIcon count={count} />
        </div>
    )
}

const BasketIcon = ({ count }: { count: number }) => (
    <Badge variant={'default'} className="flex gap-1 p-2">
        <ShoppingBasket size={24} />
        <ItemCount count={count} />
    </Badge>
)

const ItemCount = ({ count }: { count: number }) => (
    <small className="text-sm font-medium leading-none rounded-full border p-0.5 border-white">
        {count}
    </small>
)

export default Basket
