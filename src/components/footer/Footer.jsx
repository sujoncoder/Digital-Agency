import Image from 'next/image';
import One from '../../../public/1.png';
import Two from '../../../public/2.png';
import Three from '../../../public/3.png';
import Four from '../../../public/4.png';

const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 text-slate-600 mt-10">
            <div className="text-sm md:text-base">
                © 2023 Sujon. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
                <Image
                    src={One}
                    width={24}
                    height={24}
                    alt="social icon 1"
                    className="cursor-pointer"
                />
                <Image
                    src={Two}
                    width={24}
                    height={24}
                    alt="social icon 2"
                    className="cursor-pointer"
                />
                <Image
                    src={Three}
                    width={24}
                    height={24}
                    alt="social icon 3"
                    className="cursor-pointer"
                />
                <Image
                    src={Four}
                    width={24}
                    height={24}
                    alt="social icon 4"
                    className="cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Footer;
