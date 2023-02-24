import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/UseEffectTwo.module.css'


export default function UseEffectTwo() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, [])
    return (
        <>
            <main className={styles.main}>
                <Link className={styles.homelink} href="/">Home</Link>
                <div>
                    UseEffectTwo
                </div>
                <div>
                    {number}
                </div>
            </main>
        </>
    )
}