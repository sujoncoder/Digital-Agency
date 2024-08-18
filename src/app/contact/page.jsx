import Button from '@/components/button/Button';
import Image from 'next/image';
import ContactImg from '../../../public/contact.png';

const Contact = () => {
    return (
        <div className="h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-8 space-y-8 md:space-y-0">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
                <Image
                    src={ContactImg}
                    width={300}
                    height={300}
                    alt="contact image"
                    className="animate-pulse w-3/4 md:w-full max-w-xs"
                />
            </div>

            {/* Form Section */}
            <div className="w-full md:w-1/2 space-y-4">
                <input
                    className="border rounded w-full h-10 px-3 text-base"
                    type="text"
                    placeholder="Your Name"
                />
                <input
                    className="border rounded w-full h-10 px-3 text-base"
                    type="email"
                    placeholder="Your Email"
                />
                <textarea
                    className="border rounded w-full h-32 px-3 text-base"
                    cols="30"
                    rows="8"
                    placeholder="Your Message"
                ></textarea>
                <Button text="Send" url="/" />
            </div>
        </div>
    );
};

export default Contact;
