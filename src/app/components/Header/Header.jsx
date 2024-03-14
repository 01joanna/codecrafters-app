import Image from "next/image"
import Link from "next/link"
import Searchbar from "../Searchbar/Searchbar"

export default function Header() {
    return (
        <header className="bg-white text-black flex justify-between h-[4rem] px-12">
            <div id="logo" className="flex items-center">
                {/* <Image
                    src=""
                    alt="Logo"
                    width={100}
                    height={100}
                /> */}
                <div className="text-xs">
                    <ul>
                    <Link href="/events">Browse all events</Link>
                    </ul>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Searchbar />
                <nav>
                    <ul className="flex gap-6 text-xs">
                        <li className="font-bold">Your events</li>
                        <li>Create an event</li>
                        <li className="flex gap-2">
                            <Image
                            src="/img/account-icon.svg"
                            alt="Account Icon"
                            width={20}
                            height={20}/>
                            Sign Up</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}