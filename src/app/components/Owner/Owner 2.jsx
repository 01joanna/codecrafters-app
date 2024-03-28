import Image from 'next/image'

const placeholderIcon = 'https://placehold.co/50x50';

export default function Owner({className, text}) {

    const defaultOwner = "pl-4 pr-10 py-2 rounded-2xl bg-lightmayonnaise text-black text-xs flex gap-4 items-center";
    return (
        <button className={`${className} ${defaultOwner}`}>
            <Image 
            src={"/img/large-image.png"}
            alt='Owner of the events icon'
            width={50}
            height={50}
            className='w-10 h-10 rounded-full'
            />
            Created by {text}
        </button>
    )
}