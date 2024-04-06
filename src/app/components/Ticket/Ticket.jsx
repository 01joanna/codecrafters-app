import Owner from "../Owner/Owner"
import Assistants from "../Assistants/Assistants"

export default function Ticket ({ event }) {
    return (
        <div className='w-[80%] h-full items-center justify-center border-2 border-lightmayonnaise rounded-lg p-7'>
            <section id="ticket-description" className="flex flex-col gap-4 w-1/2">
                <div id='main-title' className="flex flex-col -gap-3">
                            <h3 className="text-xs font-bold text-gray-400">Wednesday, 13 March</h3>
                            <h1 className="text-[45px] leading-none font-bold">{event.title}</h1>
                </div>
                <div id="event-details" className="">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        <div>
                            <h3 id='event-details-h3'>Category</h3>
                            <p id='event-details-text'>{event.category}</p>
                        </div>
                        <div>
                            <h3 id='event-details-h3'>Location</h3>
                            <p id='event-details-text'>{event.location}</p>
                        </div>
                        <div>
                            <h3 id='event-details-h3'>Date and time</h3>
                            <p id='event-details-text'>{event.date}</p>
                        </div>
                        <div>
                            <h3 id='event-details-h3'>Max. assistants</h3>
                            <p id='event-details-text'>{event.max_assistants}</p>
                        </div>
                    </div>
                </div>
                <div id='event-users' className='text-[9px] flex gap-4 items-center'>
                        <div id='event-user-owner'>
                            <Owner text={"Lorem Ipsum"} className={"text-[9px] w-[200px]"}/>
                        </div>
                        <div id='users-registered'>
                            <Assistants
                            className=""/>
                        </div>
                    </div>
            </section>
            <section id="ticket-calendar" className="w-[100px]"></section>
        </div>
    )
}