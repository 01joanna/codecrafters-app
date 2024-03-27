"use client"
import Image from "next/image";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import { useEffect, useState } from "react";
import { getAllEvents } from "../services/RestApi";

const imageLanding = "https://placehold.co/1400x625";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const service = getAllEvents();
    service
      .then((data) => {
        console.log("data:", data);
        setEvents(data.data);
      })
      .catch((error) => {
        console.log("No se pueden recibir los datos de la API", error);
      });
  }, []);

  //Función para dividir los eventos en grupos de 5
  const chunkEvents = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice( i,+ size)); // Corregido: i + size
    }
    return chunkedArray;
  };

  return (
    <main className="bg-white flex flex-col gap-8 pb-20">
      <section className="flex flex-col gap-4 items-center">
        <div>
          <Image
            src="/img/large-image.png"
            alt="Landing page picture"
            width={1400}
            height={625}
            className="px-4"
          />
          <div className="lg:visible absolute lg:top-[20rem] lg:left-[4rem] bg-white lg:w-[460px] text-black px-12 py-6 rounded-3xl">
            <h1 className="text-2xl mb-1">
              Connecting minds, creating technological futures.
            </h1>
            <p className="text-[11px] mb-4">
              Connecting like-minded individuals effortlessly. Let us do the
              searching for you, and experience the ease of connecting with
              others who share your interests. Join our web platform today and
              unlock a world of possibilities with just one click!
            </p>
            <Button
              text={"Join us!"}
              className="bg-lightmayonnaise py-2 px-8 text-xs rounded-md"
            />
          </div>
        </div>
        <p className="bg-lightmayonnaise text-sm text-black rounded-xl px-6 py-4 mx-8">
          Explore with us the fascinating world of technology. On our website,
          we provide you with a careful selection of technological events
          designed to keep you up to date with the latest trends and
          developments in this exciting field. Join a community committed to
          technological advancement and innovation, where each member has the
          opportunity to learn, share, and grow in an inclusive and
          collaborative environment.
        </p>
      </section>

      <aside className="flex flex-col gap-16">
        <h2 className="text-6xl font-bold pl-36 text-black">Weekly events</h2>
        <div className="flex flex-col justify-center items-center gap-20">
          <div className="flex">
            {chunkEvents(events, 4).map((group, index) => (
              <div key={index} className="gap-10">
                {group.map((event) => (
                  <Card key={event.id} event={event} />
                ))}
              </div>
            ))}
          </div>
          <Button
            text="Browse all events"
            className="bg-lightmayonnaise md:text-md py-2 lg:px-36 md:px-15 rounded-xl"
            href="/events"
          />
        </div>
      </aside>
    </main>
  );
}
