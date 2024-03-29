import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image
                    src={img}
                    ali={title}
                    layout="fill"
                    objectFit="contain"
                    className="roundex-2xl"
                />
            </div>

            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64">{title}</h3>

                <p className="">{description}</p>

                <button className="text-am text-white bg-gray-500 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
