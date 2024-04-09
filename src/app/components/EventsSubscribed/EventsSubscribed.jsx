import Card from "../Card/Card";
import { useAuthContext } from "@/contexts/AuthContext";
import { getSubscribedEvents, getRegisteredUsersForEvent } from "@/services/RestApi";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function EventsSubscribed({ user, authToken }) {
    const [subscribedEvents, setSubscribedEvents] = useState([]);
    const userId = user;
    const router = useRouter();

    useEffect(() => {
        const fetchSubscribedEvents = async () => {
            try {
                const events = await getSubscribedEvents(userId, authToken);
                setSubscribedEvents(events);

                // Por cada evento, también obtén los usuarios registrados
                for (const event of events) {
                    const registeredUsers = await getRegisteredUsersForEvent(event.id, authToken);
                    console.log('Registered users for event', event.id, ':', registeredUsers);
                    if (registeredUsers && registeredUsers.message) {
                        console.log(registeredUsers.message);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchSubscribedEvents();
    }, [authToken, userId, router]);

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
