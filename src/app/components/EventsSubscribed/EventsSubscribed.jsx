'use client'
import Card from "../Card/Card";
import { useAuthContext } from "@/contexts/AuthContext";
import { getSubscribedEvents } from "@/services/RestApi";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function EventsSubscribed({ authToken, userId }) {
    const { getUserData, getAuthToken } = useAuthContext();
    const user = getUserData();

    const [subscribedEvents, setSubscribedEvents] = useState([]);

    useEffect(() => {
        const fetchSubscribedEvents = async () => {
            try {
                const events = await getSubscribedEvents(user.id, authToken);
                setSubscribedEvents(events);
                console.log('Eventos suscritos:', events);
            } catch (error) {
                console.error(error);
            }
        };
        fetchSubscribedEvents();
    }, [authToken, user.id]);

    return (
        <div className="flex gap-8">
            {subscribedEvents.map(event => (
                <Card key={event.id} event={event} />
            ))}
        </div>
    )
}