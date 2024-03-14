import { increment } from '@/app/GlobalRedux/Features/counter/counterSlice'
import { ShoppingBag } from 'lucide-react'
import { useDispatch } from 'react-redux'

function AddToStore() {
    const dispatch = useDispatch()
    return (
        <small className="text-xs font-medium leading-none flex gap-2 items-center">
            Add to store:
            <ShoppingBag size={24} onClick={() => dispatch(increment())} />
        </small>
    )
}

export default AddToStore
