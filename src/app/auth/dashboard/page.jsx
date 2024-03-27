
import EventsList from "@/app/components/EventsList/EventsList";
import Link from "next/link";

export default function PageDashboard() {

    return (
        <div>
            <p className="m-8">

                <Link href="/auth/logout"><button className="bg-secondary text-bg-color px-8 py-1 rounded-full cursor-pointer text-xl hover:bg-opacity-80 transition-colors duration-300 flex">Logout</button></Link>
            </p>
            <div className="flex min-h-screen flex-col items-center justify-between py-14">
                <EventsList />
            </div>
        </div>
    );
}