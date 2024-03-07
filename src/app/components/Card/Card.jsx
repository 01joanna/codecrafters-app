import Image from "next/image";

export default function Card() {
    return (
        <div className="bg-white">
            <Image 
            src="/img/rectangle.png"
            alt="Event picture"
            width={150}
            height={150}
            />
            <div className="w-[150px]">
                <h1 className="text-xl">Lorem ipsum dolor sit!</h1>
                <p className="text-[11px]">Lorem ipsum dolor sit amet consectetur. Mauris at massa tincidunt diam velit duis et. Sed consequat in facilisis pulvinar donec nibh.</p>
            </div>
        </div>
    )
}