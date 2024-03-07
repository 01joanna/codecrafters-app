import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-yellow h-[300px] pt-5">
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
                <div id="membership-flag">Are you already a member?</div>
                <div id="footer-navbar" className="flex gap-4">
                    <h1>./m</h1>
                    <ul>
                        <li>Home</li>
                        <li>Events</li>
                        <li>Sign Up</li>
                    </ul>
                </div>
            </section>
            <aside>
                <p className='text-center -mt-28 text-[300px] '>./moge</p>
            </aside>
        </footer>
)
}