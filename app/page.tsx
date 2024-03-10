import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RecentItems from '@/components/RecentItems'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Header />
            <div className="flex flex-col place-items-center text-3xl text-center my-4">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Best ecommerce shop
                </h2>
                <Carousel />
                <p className="text-xl leading-7">Recent items</p>
                <RecentItems />
            </div>

            <Footer />
        </main>
    )
}
