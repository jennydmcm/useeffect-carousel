export default function Carousel() {
    return (
        <>
            <div style={{
                backgroundImage: "url(/carousel-images/0.jpg",
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat",
                width: 500,
                height: 300
            }} >
                <Image
                    src={"/icons/leftArrow.png"}
                    alt={"/icons/leftArrow.png"}
                    width={100}
                    height={100}
                />

            </div>

        </>

    )
}