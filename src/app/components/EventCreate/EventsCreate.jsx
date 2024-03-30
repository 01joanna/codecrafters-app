'use client';
import axios from 'axios';
import React, { useState } from 'react';
import { createEvent } from '../../../services/RestApi';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function EventCreate() {

    const { getAuthToken } = useAuthContext();
    const authToken = getAuthToken();
    const router = useRouter();

    const [eventForm, setEventForm] = useState({
        title: "",
        description: "",
        location: "",
        date: "",
        category_id: "",
        image: "",
        user_id: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventForm(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const eventForm = new FormData(event.target);
        const eventData = Object.fromEntries(eventForm.entries());
        console.log('eventData:', eventData);

        try {
            if (!authToken) {
                throw new Error('No hay un token de autenticación');
                return;
            }

            const response = await createEvent(eventData, authToken);
            console.log('Evento creado:', response);
            router.refresh();
            router.push("/")

        } catch (error) {
            console.error('Error al crear el evento:', error);
        }
    };

    return (
        authToken ? (
            <>
        <h2 className="text-[50px] font-light">Add a new event</h2>
        <form onSubmit={handleSubmit} className="border border-yellow px-12 py-8 items-center rounded-xl flex flex-col justify-center gap-20 md:mx-10">
            <fieldset>
                <div className="mb-5">
                    <label id="event-form-label" htmlFor="title">Title:</label><br/>
                    <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    placeholder="Event title" 
                    onChange={handleChange}
                    value={eventForm.title}
                    className="w-full" />
                </div>
                <hr/>
                <br/>
                <div id="event-form-fillables" className="flex lg:flex-row md:flex-col gap-12">
                    <div id="event-form-part1" className="flex flex-col gap-5">
                        <div id="event-form-date">
                            <label id="event-form-label" htmlFor="date">Date:</label><br/>
                            <input 
                            type="date" 
                            id="date" 
                            name="date"
                            value={eventForm.date}
                            onChange={handleChange}
                            />
                        </div>
                        {/* <div id="event-form-time">
                            <label id="event-form-label" htmlFor="time">Time:</label><br/>
                            <input 
                            type="time" 
                            id="time" 
                            name="time" 
                            value={eventForm.time}
                            onChange={handleChange}
                            />
                        </div> */}
                        <div id="event-form-location">
                            <label id="event-form-label" htmlFor="location">Location:</label><br/>
                            <input 
                            type="text" 
                            id="location" 
                            name="location" 
                            placeholder="Event location"
                            value={eventForm.location}
                            onChange={handleChange}
                            />
                        </div>
                        <div id="event-form-assistants">
                            <label id="event-form-label" htmlFor="assistants">Max. Assistants:</label><br/>
                            <input 
                            type="number" 
                            id="assistants" 
                            name="assistants" 
                            placeholder="Number of max. assistants"
                            value={eventForm.assistants}
                            onChange={handleChange}
                            min={1}
                            max={2000}
                            />
                        </div>
                    </div>
                    <div id="event-form-part2" className="flex flex-col gap-3">
                        <div id="event-form-description">
                            <label id="event-form-label" htmlFor="description">Description:</label><br/>
                            <textarea 
                            id="description" 
                            name="description" 
                            placeholder="Event description"
                            value={eventForm.description}
                            onChange={handleChange}
                            />
                        </div>
                        <div id="event-form-category" className="text-xs">
                            <fieldset>
                            <label id="event-form-label" htmlFor="category">Category</label><br/>
                            <input 
                            type="number" 
                            id="category_id" 
                            name="category_id" 
                            placeholder="Category ID"
                            value={eventForm.category_id}
                            onChange={handleChange}
                            min={1}
                            max={2}
                            />
                            <div>
                                    <input 
                                    type="text" 
                                    id="user_id" 
                                    name="user_id" 
                                    value={eventForm.user_id}
                                    onChange={handleChange}
                                    />
                                    <label htmlFor="in-person">In-person</label>
                                </div>
                            </fieldset>
                        </div>
                        <div id="event-form-image">
                            <label id="event-form-label" htmlFor="image">Image:</label><br/>
                            <input 
                            type="text" 
                            id="image" 
                            name="image" 
                            placeholder="Event image"
                            value={eventForm.image}
                            onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 text-sm pt-12 justify-center items-center">
                    <button type="submit" className="px-16 py-2 bg-lightmayonnaise font-light justify-center rounded-xl">Send</button>
                    <button type="submit" className="px-16 py-2 bg-lightmayonnaise font-light justify-center rounded-xl">Go Back</button>
                </div>
            </fieldset>
        </form>
        </>
        ) : 
        <p>Not logged in</p>
    );
}
