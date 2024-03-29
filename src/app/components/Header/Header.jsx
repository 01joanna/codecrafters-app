import Image from "next/image";
import Link from "next/link";
import Searchbar from "../Searchbar/Searchbar";
import { useAuthContext } from "@/contexts/AuthContext";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

export default function Header() {
    const { getAuthToken } = useAuthContext();
    const token = getAuthToken();

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
                            <li>Your events</li>
                            <li>Create an event</li>
                            {token ? (
                                <>
                                    <li><MdOutlineManageAccounts />My Account</li>
                                    <li href="/logout"><IoLogOutOutline />Logout</li>
                                </>
                            ) : (
                                <li href="/register"><MdOutlineManageAccounts /> Sign Up</li>
                            )}
                        </ul>
                </nav>
            </div>
        </header>
    );
}