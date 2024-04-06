'use client'
import { useRouter, usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import EventDetails from '@/app/components/EventDetails/EventDetails';
import EventsEdit from '@/app/components/EventsEdit/EventsEdit';
import { getEventById } from '../../../services/RestApi';
import { useAuthContext } from '@/contexts/AuthContext';

export default function EventPage() {
    const { getUserData } = useAuthContext();
    const userData = getUserData();
    const [event, setEvent] = useState(null);

    const router = useRouter();
    const pathname = usePathname();


    const id = pathname.split('/').pop();


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
                <>
                <EventDetails event={event} />
                </>
            ) : (
                <p>Loading...</p>
            )}
            {
                
            }
        </main>
    );
}
