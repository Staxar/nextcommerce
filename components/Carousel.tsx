import Link from 'next/link'
import { CarouselSize } from './CarouselSize'

function Carousel() {
    return (
        <div className="flex flex-col gap-4 my-4 items-center justify-center lg:w-full">
            <div className="flex justify-between items-center gap-8">
                <p className="text-xl leading-7">Check our latest products</p>
                <Link href={'/products'}>
                    <p className="text-lg text-muted-foreground">More {'>'}</p>
                </Link>
            </div>

            <CarouselSize />
        </div>
    )
}

export default Carousel
