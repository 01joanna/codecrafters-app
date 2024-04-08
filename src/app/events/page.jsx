"use client"
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import EventsList from '@/app/components/EventsList/EventsList';
import Pagination from '@/app/components/Pagination/Pagination';
import { getAllEvents } from '../../services/RestApi';

const Page = ({ searchParams }) => {
    const query = searchParams?.query || '';

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([]);
    const [loadAttempts, setLoadAttempts] = useState(0);
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        console.log("Valor actual del parámetro de consulta:", query);
    }, [query]);


    const loadEvents = async () => {
        setLoading(true);
        try {
            const events = await getAllEvents();
            const eventsData = events.data;
            const paginationData = {
                currentPage: eventsData.current_page,
                totalPages: eventsData.last_page,
                totalItems: eventsData.total,
            };
            if (events.length === 0) {
                setLoadAttempts(prevAttempts => prevAttempts + 1);
            } else {
                setLoadAttempts(0);
            }
            setLoading(false);
            setEvents(eventsData);
            console.log('Eventos cargados:', eventsData)
            console.log('Datos de paginación:', paginationData)
            console.log('data:', events)
            setTotalPages(paginationData.totalPages);
            console.log(eventsData.data)
        } catch (error) {
            setLoading(false);
            console.error('Error al cargar los eventos:', error);
        }
    }

    const filterEvents = useCallback((eventsData, query) => {
        if (eventsData) {
        const filtered = eventsData.data.filter(event => 
            event.title?.toLowerCase().includes(query.toLowerCase()) ||
            event.description?.toLowerCase().includes(query.toLowerCase()) ||
            event.date?.toLowerCase().includes(query.toLowerCase()) ||
            event.category_id?.toLowerCase().includes(query.toLowerCase()) ||
            event.location?.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredEvents(filtered)
        console.log('Eventos filtrados:', filtered);
    } else {
        setFilteredEvents([]);
        console.log('No hay eventos para filtrar');
    }
    }, []);
    
    useEffect(() => {
        filterEvents(events, query);
    }, [query, events, filterEvents]);


    const handlePageUpdate = (pageNumber) => {
        setCurrentPage(pageNumber);
        loadEvents(pageNumber);
    };

    useEffect(() => {
        if (loadAttempts < 3) {
            loadEvents(currentPage);
        }
    }, [currentPage, loadAttempts]);
    
    // useEffect(() => {
    //     filterEvents(events, query);
    // }, [query, events, filterEvents]);





    return (
        <main className='bg-white'>
            {
                loading ? (
                <div>Loading...</div>
                ) : (
                    <>
                    <EventsList events={filteredEvents} query={query}/>
                    <div>
                        <Pagination currentPage={currentPage} totalPages={totalPages} updatePage={handlePageUpdate}/>
                    </div>
                    </>
                )}
        </main>
    )
}


export default Page;