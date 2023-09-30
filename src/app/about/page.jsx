import Image from 'next/image'
import MeetBanner from '../../../public/meet.jpg'
import Button from '@/components/button/Button'

const About = () => {
    return (
        <div className='my-10'>
            {/* image section */}
            <div>
                <Image
                    src={MeetBanner}
                    width={500}
                    height={500}
                    alt='about page banner'
                    className='hover:grayscale duration-300 w-full h-56 object-cover my-2 rounded'
                />
            </div>
            {/* content */}
            <div className='flex justify-between'>
                <div className='flex-col space-y-4'>
                    <h1 className='text-3xl font-semibold'>Who are we ?</h1>
                    <p className='text-slate-800'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, error, <br /> <br /> enim perferendis temporibus atque voluptatibus odit omnis et totam adipisci debitis a magnam corporis numquam voluptates ab? Expedita, soluta numquam.
                        <br /><br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non cupiditate earum veniam officia nam. Culpa ipsa.
                    </p>
                </div>

                <div className='flex-col space-y-4'>
                    <h1 className='text-3xl font-semibold'>What we do?</h1>
                    <p className='text-slate-800'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis facilis eius dolores consequatur, dicta quia, quam quos nulla, beatae expedita itaque maiores earum?
                    </p>

                    <p>
                        -Creative illustration
                    </p>

                    <p>
                        -Dynamic website
                    </p>

                    <p>
                        -First and handy mobile app
                    </p>

                    <br />
                    <Button text="Contact" url="/contact" />
                </div>
            </div>
        </div>
    )
}

export default About