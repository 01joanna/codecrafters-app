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
import logoMoge from "/public/img/LogoMogeWhite.png";

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
            router.push("/");
            // Recargar la página
            window.location.reload();
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            // Manejar el error si es necesario
        }
    };
    // useEffect(() => {
    //     // Si el token se vuelve null (es decir, el usuario cierra sesión), redirigir a la página de inicio
    //     if (token === null) {
    //         router.push("/register");
    //     }
    // }, [token]);


    const handleNavigation = (route) => {
        router.push(route);
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header className="bg-white text-black flex justify-between h-[4rem] lg:px-12 md:px-0">
            <div id="logo"  className="flex items-center">
                <div className='z-44'>
                    <Image
                        src={logoMoge}
                        alt={"logo"}
                        width={150}
                        height={100}
                        onClick={() => handleNavigation('/')}
                        className='cursor-pointer min-h-11 min-w-20'
                    />
                </div>
                <div className="text-xs font-bold lg:visible lg:flex md:hidden">
                    <ul>
                        <li>
                            <button onClick={() => handleNavigation('/events')}>
                                Browse all events
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center lg:gap-4 md:gap-2">
                <Searchbar />
                <nav>
                    <div
                        onClick={toggleMenu}
                        className="md:visible lg:hidden pr-8">
                        <GiHamburgerMenu 
                        className='text-2xl'/>
                        {isMenuOpen && (
                            <div className=" absolute w-[170px] top-[3.5rem] right-1 border border-gray-200 z-10">
                                <ul className="flex flex-col gap-1 text-[11px] items-center justify-center bg-white">
                                    <li>
                                        <button
                                            className='bg-yellow font-bold text-black rounded-lg px-2 py-1 w-[170px]'
                                            onClick={() => handleNavigation('/events')}>
                                            Browse all events
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className='bg-yellow font-bold text-black rounded-lg px-2 py-1 w-[170px]'
                                            onClick={() => handleNavigation(`/auth/[id]/your-events`)}>
                                            Your events
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className='bg-yellow font-bold text-black rounded-lg px-2 py-1 w-[170px]'
                                            onClick={() => handleNavigation('/auth/events/create')}>
                                            Create an event
                                        </button>
                                    </li>
                                    {token ? (
                                        <>
                                            <li>
                                                <button
                                                    className='bg-yellow font-bold text-black rounded-lg px-2 py-1 flex items-center justify-center gap-2 w-[170px]'
                                                    onClick={() => handleNavigation(`/auth/[id]/profile`)}>
                                                    <MdOutlineManageAccounts /> 
                                                    <p>My Account</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className='bg-yellow font-bold text-black rounded-lg px-2 py-1 flex items-center justify-center gap-2 w-[170px]'
                                                    onClick={handleLogout}>
                                                    <IoLogOutOutline /> Log Out
                                                </button>
                                            </li>
                                        </>
                                    ) : (
                                        <li>
                                            <button
                                                    className='bg-yellow font-bold text-black rounded-lg px-2 py-1 flex items-center justify-center gap-2 w-[170px]'
                                                onClick={() => handleNavigation('/register')}>
                                                <MdOutlineManageAccounts /> Sign up
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                    <ul className="flex gap-6 font-bold text-xs md:hidden lg:flex">
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
                                        <div className='flex gap-2'>
                                        <MdOutlineManageAccounts /> My Account
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>
                                    <div className='flex gap-2'>
                                        <IoLogOutOutline /> Log Out
                                    </div>
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li>
                                <button onClick={() => handleNavigation('/register')}>
                                <div className='flex gap-2'>
                                    <MdOutlineManageAccounts /> Sign up
                                </div>
                                </button>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}