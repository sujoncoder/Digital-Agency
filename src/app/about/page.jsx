import Button from '@/components/button/Button';
import Image from 'next/image';
import MeetBanner from '../../../public/meet.jpg';

const About = () => {
    return (
        <div className='my-10 px-4 sm:px-8'>
            {/* Image Section */}
            <div className='relative w-full h-56 sm:h-72'>
                <Image
                    src={MeetBanner}
                    layout="fill"
                    objectFit="cover"
                    alt='about page banner'
                    className='rounded-lg hover:grayscale duration-300'
                />
            </div>
            
            {/* Content */}
            <div className='flex flex-col sm:flex-row justify-between mt-6 space-y-6 sm:space-y-0 sm:space-x-8'>
                <div className='flex-1 space-y-4'>
                    <h1 className='text-2xl sm:text-3xl font-semibold'>
                        Who are we?
                    </h1>
                    <p className='text-base sm:text-lg text-slate-800'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, error, <br /> <br /> enim perferendis temporibus atque voluptatibus odit omnis et totam adipisci debitis a magnam corporis numquam voluptates ab? Expedita, soluta numquam.
                        <br /><br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non cupiditate earum veniam officia nam. Culpa ipsa.
                    </p>
                </div>

                <div className='flex-1 space-y-4'>
                    <h1 className='text-2xl sm:text-3xl font-semibold'>
                        What we do?
                    </h1>
                    <p className='text-base sm:text-lg text-slate-800'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis facilis eius dolores consequatur, dicta quia, quam quos nulla, beatae expedita itaque maiores earum?
                    </p>

                    <ul className='list-disc list-inside pl-4 space-y-2'>
                        <li>Creative illustration</li>
                        <li>Dynamic website</li>
                        <li>First and handy mobile app</li>
                    </ul> <br />

                    <Button text="Contact" url="/contact" />
                </div>
            </div>
        </div>
    );
};

export default About;
