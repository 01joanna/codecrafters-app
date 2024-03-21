import Image from 'next/image'
import Button from '../Button/Button'

export default function Footer() {
    return (
        <footer className="bg-yellow h-[300px] p-5 relative overflow-hidden">
            <section className="flex w-full justify-around">
                <div id="social-terms">
                    <div className='flex gap-2'>
                    <Image 
                    src="/img/linkedin-icon.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    />
                    <Image 
                    src="/img/instagram-icon.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    /> 
                    <Image 
                    src="/img/dice-icon.svg"
                    alt="Dice"
                    width={20}
                    height={20}
                    />
                    </div>
                    <div className='text-xs pt-3'>
                        <p>Copyright ©2024 Moge Company Design</p>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div id="membership-flag" className='flex flex-col h-[7rem] gap-4'>
                    <p className='text-2xl text-center'>Are you already a member?</p>
                    <Button 
                    to="/login"
                    className="bg-customdark px-20 text-xs py-2.5 rounded-2xl text-white" text="Create an event"/>
                    <div className='flex gap-2 font-light text-xs justify-center text-center'> 
                        <Image
                        src="/img/spain-flag.svg"
                        alt='Spanish flag'
                        width={20}
                        height={20}
                        />
                        <p>Barcelona, SP</p>
                    </div>
                </div>
                <div id="footer-navbar" className="flex gap-4">
                    <h1 className='text-3xl'>./m</h1>
                    <ul className='text-xs flex flex-col gap-3'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                    </ul>
                </div>
            </section>
            <aside className='absolute bottom-[-8rem] left-[15rem]'>
                <p className='text-[300px] '>./moge</p>
            </aside>
        </footer>
)
}