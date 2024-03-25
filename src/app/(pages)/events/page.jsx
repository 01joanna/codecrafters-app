"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import restapi from '../../../services/RestApi';
import EventsList from '@/app/components/EventsList/EventsList';


const Page = ({ searchParams }) => {

    const router = useRouter();
    const query = searchParams?.query || '';

    const [events, setEvents] = useState([]);

    //Llamada a la API para que muestre todos los eventos 
    useEffect(() => {
    const service = restapi();
    service
        .getAllEvents()
        .then((response) => {
        console.log("response", response.data);
          setEvents(response.data); // Almacena los eventos en el estado local
        })
        .catch((error) => {
        console.log("No puede recibir los datos de la api", error);
        });
    }, []);

    useEffect(() => {
        console.log("Valor actual del parámetro de consulta:", query);
    }, [query]);
    


    return (
        <main className='bg-white'>
            {
                // searchResults.length > 0 ? (
                //     // logica para que se muestren los eventos de la busqueds
                //     <div>
                //         <h1 className='text-bold text-[80px] text-black pl-12'>You searched:</h1>
                //         <ul>
                //             {searchResults.map(event => (
                //                 <li key={event.id}>{event.name}</li>
                //             ))}
                //         </ul>
                //     </div>
                // ): (
                    <EventsList  query={query}/>
                // )
            }        
        </main>
    )
}


export default Page
