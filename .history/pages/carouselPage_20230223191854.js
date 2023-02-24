import Link from "next/link"
import Carousel from "@/components/carousel"
import styles from '@/styles/CarouselPage.module.css'

export default function CarouselPage() {
    return (
        <>
            <main >
                <Link href="/">Home</Link>
                <Carousel />
            </main>
        </>
    )
}