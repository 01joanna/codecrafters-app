'use client'
import React, { useState, useEffect } from 'react';
import { useAuthContext } from "@/contexts/AuthContext";
import { EventsCreatedByUser, getSubscribedEvents } from "@/services/RestApi";
import { useRouter } from 'next/navigation';
import Card from '../../../components/Card/Card';
import EventsCreated from '../../../components/EventsCreated/EventsCreated';
import EventsSubscribed from '../../../components/EventsSubscribed/EventsSubscribed';

export default function Page() {
    const { getUserData, getAuthToken } = useAuthContext();
    const authToken = getAuthToken();
    const user = getUserData();
    const userId = user ? user.id : null; // Obtener el ID de usuario si está disponible
    const router = useRouter();

    return (
        <main className='flex flex-col gap-10 pl-10 w-full'>
            {authToken ? (
                <>
                <h1 className="pt-10">All your upcoming events</h1>
                <section className="py-3 pl-10 flex flex-col">
                    <h2 className="text-3xl pb-7">Events created by you:</h2>
                    <div className='w-[90%] flex flex-wrap gap-10'>
                            <EventsCreated userId={userId} authToken={authToken}/>
                    </div>
                </section>
                <section className="py-3 pl-10">
                <h2 className="text-3xl pb-7 md:mr-10 lg:mr-0 ">Events you confirmed your assistance to:</h2>
                <div className='w-[90%] flex flex-wrap gap-10'>
                        <EventsSubscribed user={user} authToken={authToken} /> {/* Pasar el objeto de usuario */} 
                    </div>
                </section>
                </> ) : (
                    <p className='h-40 text-black text-xl align-middle text-center lg:my-32 md:my-80' >You need to be logged in <br></br> to preview this page.</p>
                )
                }
        </main>
    );
}
