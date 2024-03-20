"use client"
import Image from "next/image";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";

const imageLanding = "https://placehold.co/1400x625";


export default function Home() {

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
          <div className="absolute top-[20rem] left-[4rem] bg-white w-[390px] text-black px-12 py-6 rounded-3xl">
            <h1 className="text-2xl mb-1">Lorem ipsum dolor sit!</h1>
            <p className="text-[11px] mb-4">Lorem ipsum dolor sit amet consectetur. Mauris at massa tincidunt diam velit duis et. Sed consequat in facilisis pulvinar donec nibh.</p>
          <Button text={"Lorem ipsum"} className="bg-lightmayonnaise py-2 px-8 text-xs rounded-md" /></div>
        </div>
          <p className="bg-lightmayonnaise text-sm text-black rounded-xl px-6 py-4 mx-8">Lorem ipsum dolor sit amet consectetur. Sit hendrerit risus netus quisque varius augue aliquet in mattis. Viverra lacinia faucibus lobortis at tempor nibh nibh purus. Porttitor purus volutpat mattis interdum aliquam quis phasellus. In turpis ultrices urna a.</p>
      </section>
      <aside className="flex flex-col gap-16">
        <h2 className="text-6xl font-bold pl-36 text-black">Weekly events</h2>
        <div className="flex flex-col justify-center items-center gap-20">
        <div className="w-[500px] flex justify-evenly gap-20">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Button 
          text="Browse all events" 
          className="bg-lightmayonnaise py-2 px-36 rounded-xl" 
          href="/events"
          />
        </div>
      </aside>
    </main>
  );
}
