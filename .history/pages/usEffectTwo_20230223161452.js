import Link from "next/link"
import { useEffect, useState } from "react"

export default function UseEffectTwo() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber
    })
    return (
        <>
            <Link href="/">Home</Link>
            <div>
                UseEffectTwo
            </div>
            <div>

            </div>
        </>
    )
}