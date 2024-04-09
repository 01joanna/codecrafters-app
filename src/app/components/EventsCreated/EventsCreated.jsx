'use client'
import Card from "../Card/Card";
import { useAuthContext } from "@/contexts/AuthContext";
import { EventsCreatedByUser, deleteEvent } from "@/services/RestApi";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";


export default function EventsCreated({ authToken, userId}) {
    const { getUserData, getAuthToken } = useAuthContext();
    const user = getUserData();

    const [createdEvents, setCreatedEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const events = await EventsCreatedByUser(user, authToken);
                setCreatedEvents(events);
            } catch (error) {
                console.error(error);
            }
        };
        fetchEvents();
    }
    , [authToken, user]);

    const handleDeleteEvent = async (eventToDelete) => {
        try {
            await deleteEvent(eventToDelete.id, authToken);
          // Actualizar la lista de eventos creados después de eliminar el evento
            const updatedEvents = createdEvents.filter(event => event.id !== eventToDelete.id);
            setCreatedEvents(updatedEvents);
            alert('Event deleted successfully');
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };
    

    return (
        <>
        {createdEvents.length > 0 ? (
                <>
                {createdEvents.map(event => (
                    <Card key={event.id} event={event} imageUrl={event.image_url} onDelete={handleDeleteEvent}/>
                ))}
            </>
        ) : (
            <p>You have not created any event.</p>
        )}
        </>
    )
}

