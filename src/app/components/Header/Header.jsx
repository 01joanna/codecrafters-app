'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Searchbar from "../Searchbar/Searchbar";
import { useAuthContext } from "@/contexts/AuthContext";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

export default function Header() {
    const { getAuthToken, getUserData } = useAuthContext();
    const token = getAuthToken();
    const user = getUserData();
    const userId = user?.id;
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []); 

    useEffect(() => {
        if (isClient) {
            console.log("El código se está ejecutando en el cliente");
        }
    }, [isClient]); 


    return (
        <header className="bg-white text-black flex justify-between h-[4rem] px-12">
            <div id="logo" className="flex items-center">
                <div className="text-xs lg:visible lg:flex md:hidden">
                    <ul>
                        <li><Link href="/events">Browse all events</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Searchbar />
                <nav>
                        <ul className="flex gap-6 text-xs md:hidden lg:flex">
                            <li><a href={`${userId}/your-events`}>Your events</a></li>
                            <li><a href="/events/create">Create an event</a></li>
                            {token ? (
                                <>
                                    <li><MdOutlineManageAccounts /> <a href={`${userId}/profile`}>My Account</a></li>
                                    <li><IoLogOutOutline /><a href="/auth/logout">Log Out</a></li>
                                </>
                            ) : (
                                <li><MdOutlineManageAccounts /><a href="/register">Sign up</a></li>
                            )}
                        </ul>
                </nav>
            </div>
        </header>
    );
}
