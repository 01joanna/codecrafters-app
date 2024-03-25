
"use client";

import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import restapi from "../../../services/RestApi";

export default function Searchbar() {

    const SearchParams = useSearchParams();
    const Pathname = usePathname();
    const {replace} = useRouter();

    const handleSearch = (searchTerm) => {
        const params = new URLSearchParams(SearchParams);
        if (searchTerm) {
            params.set('query', searchTerm);
        } else if (searchTerm.trim() !== "") {
            params.set('query', searchTerm);
            // router.push(`/events?query=${searchTerm}`);
            // router.push(`${Pathname}?${params.toString()}`);
        } else {
            params.delete('query');
        }
        replace(`${Pathname}?${params.toString()}`);
    }

    return (
        <form 
        // onSubmit={handleSearch}
        >
            <div className='flex lg:w-[500px] md:w-[300px] pr-5'>
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
                placeholder="Search for events..." 
                defaultValue={SearchParams.get('query')?.toString()}
                onChange={(e) => {
                    handleSearch(e.target.value)
                }}
                />
            </div>
        </form>
    )
    }