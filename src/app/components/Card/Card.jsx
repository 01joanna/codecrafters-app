'use client'
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { FaUsers } from "react-icons/fa6";
import { IoEarthSharp } from "react-icons/io5";
import { RiUserLocationLine } from "react-icons/ri";


export default function Card({ event, className }) {

  const router = useRouter();
  const defaultCSS = "bg-white flex flex-col gap-4 h-auto"
  return (
    <div className={`${className} ${defaultCSS}`}>
      {/* <Image
        src={event.image}
        alt="Event picture"
        width={250}
        height={250}
      /> */}
      <div id="card-text" className="text-black flex flex-col gap-1 w-[170px]">
        <div className="flex gap-3 items-center">
          <h1 className="text-lg leading-5 w-[70%]">{event.title}</h1>
          <span className="w-[10%] text-2xl">{event.category_id == "1" ? 
          <IoEarthSharp /> : 
          <RiUserLocationLine />} </span>
        </div>
        <div className="flex gap-3 text-xs pt-2">
          <h2 className="text-gray-400 text-[11px] leading-3">{event.date}</h2>
          <h3 >{event.location}</h3>
        </div>
        <span className="flex gap-2 items-center pt-3 text-sm">
          <FaUsers />
          <h6>{event.attendees_count} assistants</h6>
        </span>
        <button 
        className="bg-lightmayonnaise text-black text-[9px] py-1 px-2 rounded-md mt-4"
        onClick={() => router.push(`/events/${event.id}`)}>View Event Details</button>
      </div>
    </div>
  );
}
