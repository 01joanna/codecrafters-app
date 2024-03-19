import Button from '../../components/Button/Button'
import Image from 'next/image';

export default function Page() {
    return (
        <main className='flex flex-col gap-30'>
            <div className="flex gap-20 justify-center">
                <h1 className="">Your profile</h1>
                <Button text="Check all your events"/>
            </div>
            <div className='flex gap-64 justify-center h-[600px]'>
                <section id="profile-picture" className='flex flex-col gap-3 justify-center'>
                    <Image 
                    src="/public/img/large-image.png"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    className='rounded-full'
                    />
                    <h3>Your current profile picture</h3>
                    <div>
                        <p>Dont like it? Change it</p>
                        <Button text="Change picture"/>
                    </div>
                </section>
                <aside id="profile-details">
                    <h2>Your details</h2>
                </aside>
            </div>
        </main>
    )
}