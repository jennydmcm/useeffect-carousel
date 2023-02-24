import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/UseEffectOne.module.css'

export default function useEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    })

    return (
        <>
            <main className={styles.main}>
                <Link className={styles.homelink} href="/">Home</Link>
                <div className={styles.title}>
                    useEffectOne
                </div>
                <div className={styles.number} >
                    {number}
                </div>
            </main>
        </>
    )
}