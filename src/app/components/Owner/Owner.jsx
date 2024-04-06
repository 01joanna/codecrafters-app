import Image from 'next/image'

export default function Owner({className, text, event}) {

    console.log(event, "estoy aqui")

    const defaultOwner = "pl-4 pr-10 py-2 rounded-2xl bg-lightmayonnaise text-black text-xs flex gap-4 items-center";
    return (
        <button className={`${className} ${defaultOwner}`}>
            <Image 
            src={event.user_image_url}
            alt='Owner of the events icon'
            width={50}
            height={50}
            className='w-10 h-10 rounded-full'
            />
            Created by {text}
        </button>
    )
}