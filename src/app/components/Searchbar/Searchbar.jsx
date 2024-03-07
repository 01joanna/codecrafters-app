import Image from 'next/image';


export default function Searchbar() {
    return (
        <div className='flex w-[500px] pr-5'>
            <Image
            src="/img/search-icon.svg"
            alt="Search icon"
            width={35}
            height={35}
            className='px-2'
        />
        <input 
        type="text" 
        className='bg-customdark w-full h-8 rounded-lg text-customgray text-[12px] 
        px-3'
        placeholder="Search for events..." />
        </div>
    )
}