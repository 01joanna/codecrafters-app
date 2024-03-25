
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
<<<<<<< HEAD

export default function Searchbar() {

    const [search, setSearch] = useState("");

    const router = useRouter()

    const handleSearch = (e) => {
        e.preventDefault(); 
        router.push(`/?query=${search}`); 
        setSearch('')
    }
    const handleChange = (e) => {
        setSearch(e.target.value);
        router.push(`/?query=${e.target.value}`);
    };

=======

export default function Searchbar({ onSearch }) {

    const [search, setSearch] = useState("");
    const router = useRouter()

    const handleSearch = (e) => {
        e.preventDefault(); 
        router.push(`/?query=${search}`); 
        setSearch('')
    }
    const handleChange = (e) => {
        setSearch(e.target.value);
        router.push(`/?query=${e.target.value}`);
    };

>>>>>>> 62e59da (events in events page renderized)
    return (
        <form onSubmit={handleSearch}>
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
                value={search}
                onChange={handleChange}
                />
            </div>
        </form>
    )
}