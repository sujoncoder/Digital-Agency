import Image from 'next/image'
import Illustration from '../../../public/illustration.jpg'
import Website from '../../../public/websites.jpg'
import Application from '../../../public/apps.jpg'
import Link from 'next/link'


const Portfolio = () => {
    return (
        <div className='my-8'>
            <div>
                <h1 className='text-7xl font-bold my-6 text-slate-600'>
                    Our works
                </h1>

                <p className='text-2xl font-semibold'>
                    Choose a gallery
                </p><br />
            </div>

            <div className='flex space-x-4'>
                <Link href='/portfolio/illustration' className='relative'>
                    <Image
                        src={Illustration}
                        width={150}
                        height={150}
                        alt='website image'
                        className='object-cover w-48 h-60 border-2 border-pink-500 rounded hover:scale-105 duration-500'
                    />
                    <h1 className='text-2xl font-bold absolute bottom-2 right-2 text-pink-500'>Illustration</h1>
                </Link>
                <Link href='/portfolio/website' className='relative'>
                    <Image
                        src={Website}
                        width={150}
                        height={150}
                        alt='illustration image'
                        className='object-cover w-48 h-60 border-2 border-pink-500 rounded hover:scale-105 duration-500'
                    />
                    <h1 className='text-2xl font-bold absolute bottom-2 right-2 text-pink-500'>Website</h1>
                </Link>

                <Link href='/portfolio/application' className='relative'>
                    <Image
                        src={Application}
                        width={150}
                        height={150}
                        alt='application image'
                        className='object-cover w-48 h-60 border-2 border-pink-500 rounded hover:scale-105 duration-500'
                    />
                    <h1 className='text-2xl font-bold absolute bottom-2 right-2 text-pink-500'>Application</h1>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio