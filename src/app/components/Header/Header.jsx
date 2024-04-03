'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Searchbar from "../Searchbar/Searchbar";
import { useAuthContext } from "@/contexts/AuthContext";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

export default function Header() {
    const { getAuthToken, getUserData } = useAuthContext();
    const router = useRouter();
    const token = getAuthToken();
    const user = getUserData();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []); 

    useEffect(() => {
        if (isClient) {
            console.log("El código se está ejecutando en el cliente");
        }
    }, [isClient]); 

    const handleNavigation = (route) => {
        router.push(route);
    };

    return (
        <header className="bg-white text-black flex justify-between h-[4rem] px-12">
            <div id="logo" className="flex items-center">
                <div className="text-xs lg:visible lg:flex md:hidden">
                    <ul>
                        <li>
                            <button onClick={() => handleNavigation('/events')}>
                                Browse all events
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Searchbar />
                <nav>
                    <ul className="flex gap-6 text-xs md:hidden lg:flex">
                        <li>
                            <button onClick={() => handleNavigation(`/auth/${user}/your-events`)}>
                                Your events
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleNavigation('/auth/events/create')}>
                                Create an event
                            </button>
                        </li>
                        {token ? (
                            <>
                                <li>
                                    <button onClick={() => handleNavigation(`auth/${user}/profile`)}>
                                        <MdOutlineManageAccounts /> My Account
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleNavigation('/auth/logout')}>
                                        <IoLogOutOutline /> Log Out
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li>
                                <button onClick={() => handleNavigation('/register')}>
                                    <MdOutlineManageAccounts /> Sign up
                                </button>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
