import Image from "next/image"
import { useState } from "react"

export default function Carousel() {
    const [img, setImg] = useState(0);

    const changeImage = (change) => {
        if (change == "backward") {
            setImg(img - 1);

            if (img == 0) {
                setImg(5);
            }
            console.log(img);

        } else if (change == "forward") {
            setImg(img + 1);
            if (img == 5) {
                setImg(0)
            }

            console.log(img)
        }

    }
}

return (
    <>
        <div style={{
            backgroundImage: "url(/carousel-images/" + img + ".jpg",
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat",
            width: 500,
            height: 300
        }} >
            <Image onClick={() => changeImage("backward")}
                src={"/icons/leftArrow.png"}
                alt={"/icons/leftArrow.png"}
                width={100}
                height={100}
            />

            <Image onClick={() => changeImage("forward")}
                src={"/icons/rightArrow.png"}
                alt={"/icons/rightArrow.png"}
                width={100}
                height={100}
            />

        </div>

    </>

)
}