'use client'
import { useRouter, usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import EventDetails from '@/app/components/EventDetails/EventDetails';
import { getEventById } from '../../../services/RestApi';

export default function EventPage() {
    const router = useRouter();
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    console.log('ID del evento:', id);
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                if (id) {
                    const eventData = await getEventById(id);
                    setEvent(eventData.data);
                }
            } catch (error) {
                console.error('Error fetching event details:', error);
            }
        };

        fetchEventDetails();

    }, [id]);

    console.log('Evento:', event);

    return (
        <main className='bg-white text-black flex flex-col gap-10 pb-20'>
            {event ? (
                <EventDetails event={event} />
            ) : (
                <p>Loading...</p>
            )}
        </main>
    );
}
