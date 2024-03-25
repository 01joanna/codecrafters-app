"use client"
import React, { useState, useEffect } from 'react';
import restapi from '../../../services/RestApi';
import Card from '../../components/Card/Card';


export default function Page() {

    const [events, setEvents] = useState([]);
    // const [searchResults, setSearchResults] = useState([]);
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


    // const handleSearch = (searchTerm) => {
    //     // Aquí deberías realizar la lógica para buscar los resultados
    //     // Puedes hacer una llamada a tu API aquí para obtener los resultados
    //     // Por simplicidad, vamos a simular algunos resultados de búsqueda
    //     const results = events.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));
    //     setSearchResults(results);
    // };

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
                    <div>
                    {/* // logica con todos los eventos normales */}
                        <h1 className='text-bold text-[80px] text-black pl-12'>All events</h1>
                        <div className="flex flex-wrap justify-center gap-4 py-8">
                        {events.length > 0 ? (
                            events.map(event => (
                                <Card key={event.id} event={event}/>
                            ))
                        ) : (
                            <p>No hay eventos disponibles.</p>
                        )}
                        </div> 
                    </div>
                // )
            }        
        </main>
    )
}
