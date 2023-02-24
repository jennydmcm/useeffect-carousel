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
            <Link className={StyleSheet.} href="/">Home</Link>
            <div>
                useEffectOne
            </div>
            <div>
                {number}
            </div>
        </>
    )
}