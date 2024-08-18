import Image from 'next/image';
import Link from 'next/link';
import Application from '../../../public/apps.jpg';
import Illustration from '../../../public/illustration.jpg';
import Website from '../../../public/websites.jpg';

const Portfolio = () => {
    return (
        <div className='h-screen'>
            <div className='text-center'>
                <h1 className='text-4xl sm:text-6xl font-bold my-6 text-slate-600'>
                    Our Works
                </h1>
                <p className='text-lg sm:text-xl font-semibold my-10'>
                    Choose a gallery
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <Link href='/portfolio/illustration' className='relative block'>
                    <div className='relative w-full h-60'>
                        <Image
                            src={Illustration}
                            layout="fill"
                            objectFit="cover"
                            alt='illustration image'
                            className='border-2 border-pink-500 rounded hover:scale-105 duration-500'
                        />
                    </div>
                    <h1 className='text-lg sm:text-2xl font-bold absolute bottom-2 left-2 text-pink-500'>
                        Illustration
                    </h1>
                </Link>
                <Link href='/portfolio/website' className='relative block'>
                    <div className='relative w-full h-60'>
                        <Image
                            src={Website}
                            layout="fill"
                            objectFit="cover"
                            alt='website image'
                            className='border-2 border-pink-500 rounded hover:scale-105 duration-500'
                        />
                    </div>
                    <h1 className='text-lg sm:text-2xl font-bold absolute bottom-2 left-2 text-pink-500'>
                        Website
                    </h1>
                </Link>
                <Link href='/portfolio/application' className='relative block'>
                    <div className='relative w-full h-60'>
                        <Image
                            src={Application}
                            layout="fill"
                            objectFit="cover"
                            alt='application image'
                            className='border-2 border-pink-500 rounded hover:scale-105 duration-500'
                        />
                    </div>
                    <h1 className='text-lg sm:text-2xl font-bold absolute bottom-2 left-2 text-pink-500'>
                        Application
                    </h1>
                </Link>
            </div>
        </div>
    );
};

export default Portfolio;
