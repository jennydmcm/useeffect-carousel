import Link from "next/link"
import { useEffect, useState } from "react"


export default function useEffectThree() {
    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }, [])

    return (
        <>
            <Link href="/">Home</Link>
            <div>
                <button>Click me</button>
            </div>
            <div>
                useEffectThree
            </div>
            <div>

            </div>
        </>
    )

}