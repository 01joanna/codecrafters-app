import Image from 'next/image'
import Button from '../Button/Button'
import { useRouter } from 'next/navigation';
import '../../../app/globals.css'
import { useAuthContext } from '@/contexts/AuthContext';

export default function Footer() {
    const router = useRouter();
    const { getAuthToken } = useAuthContext();
    const token = getAuthToken();


    const handleNavigation = (url) => {
        router.push(url);
    };

    return (
        <footer className="bg-yellow md:h-auto lg:h-[370px] p-5 relative overflow-hidden bottom-0">
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
                    <div className='text-xs pt-3 lg:flex lg:flex-col md:hidden  text-black'>
                        <p>Copyright ©2024 Moge Company Design</p>
                        <p onClick={() => handleNavigation('/terms')} style={{ cursor: 'pointer' }}>Terms of Use</p>
                        <p onClick={() => handleNavigation('/privacy')} style={{ cursor: 'pointer' }}>Privacy Policy</p>
                    </div>
                </div>
                <div id="membership-flag" className='md:hidden lg:visible lg:flex lg:flex-col lg:h-[7rem] lg:gap-4 z-50 text-black'>
                    <p className='text-2xl text-center'>Are you already a member?</p>
                    <Button
                        onClick={() => handleNavigation('/')}
                        className="px-20 text-xs py-2.5 rounded-2xl text-white z-50 no-hover bg-black"
                        text="Create an event"
                    />


                    <div className='flex gap-2 font-light text-xs justify-center text-center  text-black'>
                        <Image
                            src="/img/spain-flag.svg"
                            alt='Spanish flag'
                            width={20}
                            height={20}
                        />
                        <p>Barcelona, SP</p>
                    </div>
                </div>


                <section id="footer-navbar" className="flex gap-4 z-40">
                    <h1 className='text-3xl'>./m</h1>
                    <div className='text-m md:hidden lg:visible lg:flex lg:flex-col gap-3 text-black '>
                        
                        <a onClick={() => handleNavigation('/')} style={{ cursor: 'pointer' }}>Home</a>
                        <p onClick={() => handleNavigation('/events')} style={{ cursor: 'pointer' }}>Events</p>
                        <p onClick={() => handleNavigation(
                            token ? '/' : '/signup'
                            )} style={{ cursor: 'pointer' }}>Sign Up</p>
                    </div>
                </section>

                <aside className='md:invisible lg:visible absolute bottom-[-6rem] left-[14rem] z-1'>
                    <p className='text-[300px] text-black '>./moge</p>
                </aside>

            </section>
            
        </footer>
    );
}
