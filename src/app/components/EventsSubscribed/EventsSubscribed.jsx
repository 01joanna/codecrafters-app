import Card from "../Card/Card";
import { useAuthContext } from "@/contexts/AuthContext";
import { getSubscribedEvents } from "@/services/RestApi";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function EventsSubscribed({ user, authToken }) {
    const [subscribedEvents, setSubscribedEvents] = useState([]);
    const userId = user;

    useEffect(() => {
        const fetchSubscribedEvents = async () => {
            try {
                const events = await getSubscribedEvents(userId, authToken);
                setSubscribedEvents(events);
            } catch (error) {
                console.error(error);
            }
        };
        fetchSubscribedEvents();
    }, [authToken, userId]);

    return (
        <>
        {subscribedEvents.length > 0 ? (
            <>
                {subscribedEvents.map(event => (
                    <Card key={event.id} event={event} imageUrl={event.image_url} />
                ))}
            </>
        ) : (
            <p>You are not subscribed to any event</p>
        )}
        </>
    )
}