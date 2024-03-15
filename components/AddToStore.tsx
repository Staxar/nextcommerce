import { increment } from '@/app/GlobalRedux/Features/counter/counterSlice'
import { ShoppingBag } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { useToast } from './ui/use-toast'

function AddToStore() {
    const dispatch = useDispatch()
    const { toast } = useToast()

    const clickHandler = () => {
        dispatch(increment())
    }
    return (
        <small className="text-xs font-medium leading-none flex gap-2 items-center">
            Add to store:
            <ShoppingBag size={24} onClick={clickHandler} />
        </small>
    )
}

export default AddToStore
