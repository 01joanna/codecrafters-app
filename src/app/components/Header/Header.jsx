'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Searchbar from "../Searchbar/Searchbar";
import { useAuthContext } from "@/contexts/AuthContext";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { logoutApi } from "../../../services/RestApi"; 

export default function Header() {
    const { getAuthToken, logout } = useAuthContext();
    const router = useRouter();
    const token = getAuthToken();
    // const user = getUserData();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = async () => {
        const authToken = getAuthToken(); // Obtener el token de autenticación

        try {
            // Realizar el logout utilizando la función logoutApi
            await logoutApi(authToken);
            // Eliminar el token de autenticación del contexto
            logout();
            // Redirigir al usuario a la página principal
            router.push("/login");
            // Mostrar mensaje en la consola
            console.log("Usuario cerró sesión exitosamente.");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            // Manejar el error si es necesario
        }
    };


    const handleNavigation = (route) => {
        router.push(route);
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
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
                    <div
                        onClick={toggleMenu}
                        className="md:visible lg:hidden">
                        <GiHamburgerMenu />
                        {isMenuOpen && (
                            <div className=" absolute w-[170px] top-[3.5rem] right-1 border border-gray-200 z-10">
                                <ul className="flex flex-col gap-1 text-[11px] items-center justify-center ">
                                    <li>
                                        <button
                                            className='bg-yellow text-black rounded-lg px-2 py-1 w-[170px]'
                                            onClick={() => handleNavigation('/events')}>
                                            Browse all events
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className='bg-yellow text-black rounded-lg px-2 py-1 w-[170px]'
                                            onClick={() => handleNavigation(`/auth/[id]/your-events`)}>
                                            Your events
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className='bg-yellow text-black rounded-lg px-2 py-1 w-[170px]'
                                            onClick={() => handleNavigation('/auth/events/create')}>
                                            Create an event
                                        </button>
                                    </li>
                                    {token ? (
                                        <>
                                            <li>
                                                <button
                                                    className='bg-yellow text-black rounded-lg px-2 py-1 flex items-center justify-center gap-2 w-[170px]'
                                                    onClick={() => handleNavigation(`/auth/[id]/profile`)}>
                                                    <MdOutlineManageAccounts /> My Account
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className='bg-yellow text-black rounded-lg px-2 py-1 flex items-center justify-center gap-2 w-[170px]'
                                                    onClick={handleLogout}>
                                                    <IoLogOutOutline /> Log Out
                                                </button>
                                            </li>
                                        </>
                                    ) : (
                                        <li>
                                            <button
                                                className='bg-yellow text-black rounded-lg px-2 py-1 flex items-center justify-center gap-2 w-[170px]'
                                                onClick={() => handleNavigation('/register')}>
                                                <MdOutlineManageAccounts /> Sign up
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                    <ul className="flex gap-6 text-xs md:hidden lg:flex">
                        <li>

                            <button onClick={() => handleNavigation(`/auth/[id]/your-events`)}>
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
                                    <button onClick={() => handleNavigation(`/auth/[id]/profile`)}>
                                        <MdOutlineManageAccounts /> My Account
                                    </button>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>
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