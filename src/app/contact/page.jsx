import Image from 'next/image'
import ContactImg from '../../../public/contact.png'
import Button from '@/components/button/Button'

const Contact = () => {
    return (
        <div className='w-3/4 mx-auto h-screen'>
            <h1 className='text-4xl font-bold text-center my-4'>Let,s Keep in Touch</h1>
            <div className='flex justify-around items-center'>
                <div>
                    <Image
                        src={ContactImg}
                        width={300}
                        height={300}
                        alt='contact image'
                    />
                </div>
                <div className='space-y-4'>
                    <input className='border rounded w-full h-8' type="text" /><br />
                    <input className='border rounded w-full h-8' type="email" /><br />
                    <textarea className='border rounded' cols="30" rows="8"></textarea><br />
                    <Button text='send' url='/' />
                </div>
            </div>
        </div >
    )
}

export default Contact