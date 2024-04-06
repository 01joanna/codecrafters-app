'use client'
import { useState } from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import Owner from '../Owner/Owner';
import Assistants from '../Assistants/Assistants';
import EventsEdit from '../EventsEdit/EventsEdit';
import { useAuthContext } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import SubscribeButton from '../SubscribeButton/SubscribeButton';
import Ticket from '../Ticket/Ticket';
import { getRegisteredUsersForEvent } from '@/services/RestApi';

export default function EventDetails({ event }) {
    const { getUserData } = useAuthContext();
    const userData = getUserData();

    const [isSubscribed, setIsSubscribed] = useState(false);
    const [showTicket, setShowTicket] = useState(false);
    const { getAuthToken } = useAuthContext();
    const authToken = getAuthToken();
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const eventId = event.id;   

    useEffect(() => {
        const fetchRegisteredUsers = async () => {
            try {
                const users = await getRegisteredUsersForEvent(eventId, authToken);
                setRegisteredUsers(users.data);
                console.log('Registered users:', registeredUsers);
                
            } catch (error) {
                console.error("Error fetching registered users:", error);
            }
        };
        fetchRegisteredUsers();
    }, [eventId]);

    console.log('Registered users:', registeredUsers);
    const isOwner = userData == event.user_id;
    

    return (
        <div className='flex flex-col gap-5 items-center justify-center'>
                    <section>
                        <img
                            src={event.image_url}
                            alt={event.title}
                            width={1000}
                            height={650}
                            className='h-[400px] object-cover mx-auto rounded-3xl'
                        />
                    </section>
                    <aside className='flex flex-col gap-7 mx-10 w-[60%] justify-center items-ceter'>
                        <div id='main-information' className='flex flex-col gap-5'>
                            <div id='main-title-options' className='flex lg:flex-row md:flex-col gap-7'>
                                <div id='main-title' className='flex flex-col -gap-3 lg:w-[50%] md:w-[100%]'>
                                    <h3 className='text-md font-bold text-gray-400'>Wednesday, 13 March</h3>
                                    <h1 className='md:text-[40px] lg:text-[60px] leading-none font-bold md:justify-center'>{event.title}</h1>
                                </div>
                                <div id='main-button-register' className='self-center'>
                                {!isOwner && <SubscribeButton event={event} />}
                                </div>
                            </div>
                            <div id='event-users' className='flex lg:flex-row md:flex-col-reverse gap-4 lg:items-center md:items-start w-auto'>
                                <div id='event-user-owner'>
                                    <Owner text={event.user.name} event={event} />
                                </div>
                                <div id='users-registered'>
                                    <Assistants event={event} count={event.attendees_count} />
                                </div>
                            </div>
                        </div>
                        <div id='event-details' className='w-[350px] flex flex-col lg:items-start md:items-center'>
                            <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                                <div>
                                    <h3 id='event-details-h3'>Category</h3>
                                    <p id='event-details-text'>{event.category_id == "1" ? (
                                        "Online"
                                    ) : (
                                        "Presential")
                                    }</p> {/* Usa la categoría del evento */}
                                </div>
                                <div>
                                    <h3 id='event-details-h3'>Location</h3>
                                    <p id='event-details-text'>{event.location}</p> {/* Usa la ubicación del evento */}
                                </div>
                                <div>
                                    <h3 id='event-details-h3'>Date and time</h3>
                                    <p id='event-details-text'>{event.date}</p> {/* Usa la fecha y hora del evento */}
                                </div>
                                <div>
                                    <h3 id='event-details-h3'>Max. assistants</h3>
                                    <p id='event-details-text'>{event.max_assistants}</p> {/* Usa el número máximo de asistentes permitidos en el evento */}
                                </div>
                            </div>
                        </div>
                        <div id='event-description' className='flex flex-col gap-5 lg:items-start md:items-center'>
                            <h2 className='text-3xl font-bold'>About this event</h2>
                            <p className='text-justify w-[70%]'>{event.description}</p> {/* Usa la descripción del evento */}
                        </div>
                    </aside>

                    {userData && event && userData == event.user_id && <EventsEdit event={event} eventId={event.id} />}
                    {isSubscribed && <Ticket event={event} />}
                </div>
    )
}