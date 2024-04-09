import React, { useState, useEffect } from 'react';
import { subscribeToEvent, unsubscribeFromEvent, getSubscribedEvents } from "@/services/RestApi";
import { useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from 'next/navigation';
import Button from '../Button/Button';
import Ticket from '../Ticket/Ticket';

export default function SubscribeButton({ event, onSubscribe }) {
    const { getAuthToken, getUserData } = useAuthContext();
    const authToken = getAuthToken();
    const userData = getUserData();
    const router = useRouter();
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
        const fetchSubscribedEvents = async () => {
            try {
                const subscribedEvents = await getSubscribedEvents(userData, authToken);
                setIsSubscribed(subscribedEvents.some(subscribedEvent => subscribedEvent.id === event.id));
                router.refresh();
            } catch (error) {
                console.error('Error fetching subscribed events:', error);
            }
        };
        if (userData && authToken) {
            fetchSubscribedEvents();
            setIsRegistered(true);
        } else {
            setIsRegistered(false);
        }
    }, [userData, authToken, event.id])

    const handleSubscribe = async () => {
        if (!isRegistered) {
            alert('You must be registered to subscribe to this event.'); 
        }
        try {
            await subscribeToEvent(event.id, userData, authToken);
            setIsSubscribed(true);
            alert('You have successfully subscribed to this event!')
            router.refresh();
        } catch (error) {
            console.error('Error subscribing to event:', error);
        }
    };

    const handleUnsubscribe = async () => {
        try {
            await unsubscribeFromEvent(event.id, userData, authToken);
            setIsSubscribed(false);
            alert('You have successfully unsubscribed from this event!');
        } catch (error) {
            console.error('Error unsubscribing from event:', error);
        }
    };

    return (
        <div>
            {isSubscribed ? (
                <div className="flex flex-col gap-4">
                <button className='px-10 py-2 rounded-xl bg-lightmayonnaise text-black text-sm hover:bg-yellow' onClick={handleUnsubscribe}>Unsubscribe from this event</button>
                {/* <button className="px-3 py-2 rounded-xl bg-lightmayonnaise text-black text-sm hover:bg-yellow" onClick={handleShowTicket}>Ticket</button> */}
                </div>
            ) : (
                <>
                <button className="px-10 py-2 rounded-xl bg-lightmayonnaise text-black text-sm hover:bg-yellow" onClick={handleSubscribe}>Subscribe to this event</button>

                </>
            )}
            {/* {showModal && <Ticket event={event} onClose={handleCloseModal} />} */}
        </div>
    );
}