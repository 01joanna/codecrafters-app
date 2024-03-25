
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState , useEffect} from "react";
import restapi from "../../../services/RestApi";

export default function Searchbar() {

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
                // value={search}
                // onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        </form>
    )
    }