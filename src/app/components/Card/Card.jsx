import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaUsers } from "react-icons/fa6";
import { IoEarthSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useAuthContext } from "@/contexts/AuthContext";


export default function Card({ event, className, onDelete, imageUrl }) {

  const { isAuthenticated, getUserData } = useAuthContext();
  const router = useRouter();
  const user = getUserData();

  const isOwner = user == event.user_id;


  const HandleViewDetails = () => {
    router.push(`/events/${event.id}`);
  }


  const handleDelete = () => {
    const isConfirmed = window.confirm('Are you sure you want to delete this event?');
    if (isConfirmed) {
      onDelete(event);
    }
  };


  const defaultCSS = "bg-white flex flex-col gap-4"
  return (
    <div className={`${className} ${defaultCSS}`}>
      <Image
        src={imageUrl} 
        alt={event.title}
        width={200}
        height={100}
        className="object-cover rounded-md w-[200px] h-[100px]"
      />
      <div id="card-text" className="text-black flex flex-col gap-1 w-[170px]">
        <div className="flex gap-10 items-center">
          <h1 className="text-lg w-2/3">{event.title}</h1>
          <div id="category-icon" className="w-1/3" >
            {event.category_id === 1 ?  (
              <IoEarthSharp className="text-1xl"/>
            ) : (
              <FaUsers className="text-1xl"/>
            )}   
          </div> 
        </div>
        <div className="flex gap-3 text-xs uppercase">
          <h2 className="text-gray-400 text-xs">{event.date}</h2>
          <h3>{event.location}</h3>
        </div>
        <span className="flex gap-2 items-center text-xs">
          <FaUsers />
          <h6>{event.attendees_count} assistants</h6>
        </span>
        <button
          className="bg-lightmayonnaise text-black text-[9px] py-1 px-2 rounded-md mt-4"
          onClick={HandleViewDetails}>View Event Details</button>
        {isOwner && (
          <div className="flex gap-2 mt-2">
            <CiEdit
              className="text-blue-500 cursor-pointer"
              onClick={() => router.push(`/events/${event.id}`)}
              event={event}
            />
            <MdDelete
              className="text-red-500 cursor-pointer"
              onClick={handleDelete}
              event={event}
            />
          </div>
        )}
      </div>
    </div>
  );
}