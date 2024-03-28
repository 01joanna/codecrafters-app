'use client'
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

const EventsList = ({ events }) => {
    // const [filteredEvents, setFilteredEvents] = useState([]);
    // const [dataLoaded, setDataLoaded] = useState(false);

    // useEffect(() => {
    //     const filterEvents = async () => {
    //     if (events && events.length > 0) {
    //         setDataLoaded(true); 
    //         const filtered = events.filter(event => 
    //             event.title.toLowerCase().includes(query.toLowerCase()) ||
    //             event.description.toLowerCase().includes(query.toLowerCase()) ||
    //             event.category.toLowerCase().includes(query.toLowerCase()) ||
    //             event.location.toLowerCase().includes(query.toLowerCase())
    //         );
    //         dataLoaded(false) &&
    //         setFilteredEvents(filtered);
    //     } else {
    //         setFilteredEvents([]); // Si no hay eventos, establecer filteredEvents como un arreglo vacío
    //     }
    // }
    // } , [query, events]);
    // console.log('filteredEvents:', filteredEvents)
    return (
        <div>
            <h1 className='text-bold text-[80px] text-black pl-12'>All events</h1>
            <div className='flex justify-center pt-10'>
            <div className="flex w-[70%] flex-wrap items-center justify-center gap-12 py-8">
                    {Array.isArray(events) ? events.map(event => (
                        <Card key={event.id} event={event}/>
                    )) : (
                        <div>No events found</div>
                    )}
            </div>
            </div> 
        </div>
    )
}

export default EventsList;
