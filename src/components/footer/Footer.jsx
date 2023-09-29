import Image from 'next/image'
import React from 'react'
import One from '../../../public/1.png'
import Two from '../../../public/2.png'
import Three from '../../../public/3.png'
import Four from '../../../public/4.png'

const Footer = () => {
    return (
        <div className='flex justify-between w-3/4 mx-auto mb-4'>
            <div>© 2023 sujon. All right reserved.</div>
            <div className='flex space-x-4'>
                <Image
                    src={One}
                    width={20}
                    height={20}
                    alt='one pic'
                    className='cursor-pointer'
                />

                <Image
                    src={Two}
                    width={20}
                    height={20}
                    alt='one pic'
                    className='cursor-pointer'
                />

                <Image
                    src={Three}
                    width={20}
                    height={20}
                    alt='one pic'
                    className='cursor-pointer'
                />

                <Image
                    src={Four}
                    width={20}
                    height={20}
                    alt='one pic'
                    className='cursor-pointer'
                />
            </div>
        </div>
    )
}

export default Footer