import Image from 'next/image'
import Button from '../../../components/Button/Button'
import Owner from '../../../components/Owner/Owner'
import Assistants from '../../../components/Assistants/Assistants'


export default function Page() {
    return (
        <main className='bg-white text-black flex flex-col gap-10'>
            <section>
                <Image 
                src={'/img/large-image.png'}
                alt='Imagen del evento'
                width={1380}
                height={650}
                className='w-95% h-[400px] object-cover mx-auto rounded-3xl '
                />
            </section>
            <aside className='flex flex-col gap-7 mx-10'>
                <div id='main-information' className="flex flex-col gap-5">
                    <div id="main-title-options" className='flex gap-7'>
                        <div id='main-title' className="flex flex-col -gap-3 w-[50%]">
                            <h3 className="text-md font-bold text-gray-400">Wednesday, 13 March</h3>
                            <h1 className="text-[60px] leading-none font-bold">Lorem Ipsum dolor sit amet</h1>
                        </div>
                        <div id='main-button-register' className='self-center'>
                            <Button text="Subscribe to this event"/>
                        </div>
                    </div>
                    <div id='event-users'>
                        <div id='event-user-owner' className='flex gap-4 items-center'>
                            <Owner text={"Lorem Ipsum"}/>
                            <Assistants />
                        </div>
                        <div id='users-registered'></div>
                    </div>
                </div>
                <div id='event-details' className='w-[350px]'>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        <div>
                            <h3 id='event-details-h3'>Category</h3>
                            <p id='event-details-text'>categoria</p>
                        </div>
                        <div>
                            <h3 id='event-details-h3'>Location</h3>
                            <p id='event-details-text'>Ubicación</p>
                        </div>
                        <div>
                            <h3 id='event-details-h3'>Date and time</h3>
                            <p id='event-details-text'>categoria</p>
                        </div>
                        <div>
                            <h3 id='event-details-h3'>Max. assistants</h3>
                            <p id='event-details-text'>categoria</p>
                        </div>
                    </div>
                </div>
                <div id="event-description" className='flex flex-col gap-5'>
                    <h2 className='text-3xl font-bold'>About this event</h2>
                    <p className='text-justify w-[70%]'>Lorem ipsum dolor sit amet consectetur. Purus id euismod ipsum nulla nec elit posuere eget. Enim turpis risus et suspendisse lorem. Sem sit a gravida tristique viverra leo hendrerit urna pulvinar. Elit semper arcu sapien nibh. Elementum vestibulum elementum vitae neque fringilla. Pellentesque integer consectetur in urna habitasse pellentesque quam adipiscing.
Lorem ipsum dolor sit amet consectetur. Purus id euismod ipsum nulla nec elit posuere eget. Enim turpis risus et suspendisse lorem. </p>
                </div>
            </aside>
        </main>
    )
}