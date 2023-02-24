import Link from "next/link"
import Carousel from "@/components/carousel"
import styles from '@/styles/CarouselPage.module.css'

export default function CarouselPage() {
    return (
        <>
            <main className={styles.main}>
                <Link className={styles.homelink} href="/">Home</Link>
                <Carousel />
            </main>
        </>
    )
}