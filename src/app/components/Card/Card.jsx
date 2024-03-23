"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa6";
import { IoEarthSharp } from "react-icons/io5";
import { restapi } from '@/services/RestApi.jsx';


export default function Card() {

    // Llamar al servicio
    // Almacenamos esa respuesta dentro de un estado
    // Renderizar el resultado

    // const service = restapi();
    useEffect(() => {
        const service = restapi();
        service.getAll().then(response => {
          console.log(response);
        //   console.log(response.data);

        }).catch(error => {
          console.log(error);
        });
     }, []);
     
    return (
        <div className="bg-white">
            <Image 
            src="/img/rectangle.png"
            alt="Event picture"
            width={250}
            height={250}
            />
            <div id="card-text" className="text-black flex flex-col gap-1 w-[170px]">
                <div className="flex gap-3 items-center">
                    <h1 className="text-lg">Event name</h1>
                    <IoEarthSharp />
                </div>
                <div className="flex gap-3 text-xs uppercase">
                    <h5 className="text-gray-400">18:00h</h5>
                    <h5>OCT 13, 24 | BCN</h5>
                </div>
                <span className="flex gap-2 items-center text-xs">
                    <FaUsers />
                    <h6>10 assistants</h6>
                </span>
            </div>
        </div>
    )
}