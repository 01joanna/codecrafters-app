'use client'
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
        loadEvents(currentPage);
    }, [currentPage]);

    const loadEvents = async (pageNumber) => {
        setLoading(true);
        try {
            const response = await getAllEvents(pageNumber);
            const eventsData = response.data;
            const paginationData = {
                currentPage: eventsData.current_page,
                totalPages: eventsData.last_page,
                totalItems: eventsData.total,
            };
            setEvents(eventsData.data);
            setTotalPages(paginationData.totalPages);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error al cargar los eventos:', error);
        }
    };

    const filterEvents = useCallback((eventsData, query) => {
        if (eventsData && eventsData.length > 0) {
            const filtered = eventsData.filter(event =>
                (event.title && event.title.toLowerCase().includes(query.toLowerCase())) ||
                (event.description && event.description.toLowerCase().includes(query.toLowerCase())) ||
                (event.date && event.date.toLowerCase().includes(query.toLowerCase())) ||
                (event.location && event.location.toLowerCase().includes(query.toLowerCase()))
            );
            setFilteredEvents(filtered);
        } else {
            setFilteredEvents([]);
        }
    }, []);

    useEffect(() => {
        filterEvents(events, query);
    }, [query, events, filterEvents]);

    const handlePageUpdate = (pageNumber) => {
        setCurrentPage(pageNumber);
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
                )
            }
        </main>
    )
}

export default Page;
