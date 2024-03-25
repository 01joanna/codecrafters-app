"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import restapi from '../../../services/RestApi';

const EventsList = ({ query }) => {

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

    // Verificar si events es un array y tiene elementos antes de filtrar
    const filteredEvents = Array.isArray(events) && events.length > 0
        ? events.filter((event) => {
            // Verificar si event.name existe antes de llamar a toLowerCase
            return (
                event.title && 
                event.title.toLowerCase().includes(query.toLowerCase()) ||
                event.description && 
                event.description.toLowerCase().includes(query.toLowerCase()) ||
                event.category && 
                event.category.toLowerCase().includes(query.toLowerCase()) ||
                event.location && 
                event.location.toLowerCase().includes(query.toLowerCase())
            );
        })
        : [];

    return (
        <div>
            <div>
                        <h1 className='text-bold text-[80px] text-black pl-12'>All events</h1>
                        <div className="flex flex-wrap justify-center gap-4 py-8">
                            {Array.isArray(events) && filteredEvents.length === 0 && (
                                <p className='text-black'>No events found</p>
                            
                            )}
                            {Array.isArray(events) && filteredEvents.length > 0 && (
                                filteredEvents.map(event => (
                                    <Card key={event.id} event={event}/>
                                ))
                            )};
                        </div> 
                    </div>
        </div>
    )
}

export default EventsList


// (
//     events.map(event => (
//         <Card key={event.id} event={event}/>
//     ))
// )