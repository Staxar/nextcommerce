import ItemCard from './ItemCard'

function RecentItems() {
    return (
        <div className="w-full grid grid-cols-2 gap-4 my-4">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
    )
}

export default RecentItems
