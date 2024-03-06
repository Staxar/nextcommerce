import { CarouselSize } from "@/components/CarouselSize";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="flex flex-col place-items-center text-3xl text-center">
        <h3 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl">
          E-commerce with NextJS
        </h3>  
      <CarouselSize />
      </div>
      <Footer />



    </main>
  );
}
