'use client'
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';

const EventsList = ({ events }) => {

    const [filter, setFilter] = useState(null);

    const handleFilter = (category_id) => {
        setFilter(category_id);
    }   

    const filteredEvents = filter ? events.filter(event => event.category_id === filter) : events;

    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-bold text-[80px] text-black pl-12'>All events</h1>
            <div id="filter-btns" className='flex gap-6 border justify-center border-lightmayonnaise py-6 mx-44'>
                <p>Filter by:</p>
                <Button text={"Online"} className="px-20" onClick={() => handleFilter(1)} />
                <Button text={"In-person"} className="px-20" onClick={() => handleFilter(2)} />
                <Button text={"All"} className="px-20" onClick={() => handleFilter(null)} />
            </div>
            <div className="flex flex-wrap justify-center gap-4 py-8">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map(event => (
                        <Card key={event.id} event={event} imageUrl={event.image_url} />
                    ))
                ) : (
                    <div>No events found</div>
                )}
            </div>
        </div>
    );
}

export default EventsList;
