"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import EventsList from '../../components/EventsList/EventsList';


const Page = ({ searchParams }) => {

    const router = useRouter();
    const query = searchParams?.query || '';

    useEffect(() => {
        console.log("Valor actual del parámetro de consulta:", query);
    }, [query]);
    


    return (
        <main className='bg-white'>
                    <EventsList  query={query}/> 
        </main>
    )
}

export default Page
