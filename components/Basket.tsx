import React from 'react'
import { Badge } from './ui/badge'
import { ShoppingBasket } from 'lucide-react'

function Basket() {
    return (
        <div className="flex items-center">
            <Badge variant={'default'} className="flex gap-1 p-2">
                <ShoppingBasket size={24} />
                <small className="text-sm font-medium leading-none rounded-full border p-0.5 border-white">
                    1
                </small>
            </Badge>
        </div>
    )
}

export default Basket
