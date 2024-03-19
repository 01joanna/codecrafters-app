import Button from '../../components/Button/Button'
import Image from 'next/image';

export default function Page() {
    return (
        <main className='flex flex-col justify-around h-full'>
            <div className="flex gap-20 justify-center my-10">
                <h1>Your profile</h1>
                <Button text="Check all your events"/>
            </div>
            <div className='flex gap-32 justify-center h-[500px]'>
                <section id="profile-picture" className='flex flex-col gap-3 items-center'>
                    <Image 
                    src="/public/img/large-image.png"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    className='rounded-full border-2 border-red-500'
                    />
                    <h3 className="font-bold text-lg">Your current profile picture</h3>
                    <div className='flex flex-col gap-2 text-center'>
                        <p className='text-[9px]'>Dont like it? Change it</p>
                        <input type="file" id="image" name="image" className='text-xs'/>
                    </div>
                </section>
                <aside id="profile-details" className='flex flex-col gap-10'>
                    <h2>Your details</h2>
                    <form action="/usuario" method="put" className='flex flex-col gap-7 text-[11px]'>

                        <div>
                        <label for="name" id='profile-form-label'>CHANGE NAME:</label><br/>
                        <input type="text" id="name" name="name" placeholder='New name' />
                        </div>

                        <div>
                        <label for="email" id='profile-form-label'>CHANGE EMAIL:</label><br/>
                        <input type="email" id="email" name="email" placeholder="New email" />
                        </div>

                        <div>
                        <label for="password" id='profile-form-label'>CHANGE PASSWORD:</label><br/>
                        <input type="password" id="password" name="password" placeholder="New password" /><br/>
                        <input type="password" id="password" name="password" placeholder="Confirm password" />
                        </div>

                        <button type="submit" className='text-sm bg-yellow py-2 px-12 mt-5 rounded-lg'>Save changes</button>
                        </form>

                        </aside>
                        </div>
        </main>
    )
}