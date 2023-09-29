import Button from '@/components/button/Button'
import Image from 'next/image'
import Creative from '../../../../public/creative.jpg'
import Creative2 from '../../../../public/DG.jpg'

const Category = ({ params }) => {
    return (
        <div>
            <p className='text-xl text-slate-700 font-semibold' >
                <span className='text-slate-400'>Category :</span> {params.category}
            </p>

            <br />

            <div className='flex justify-between items-center space-x-2 my-4'>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold'>
                        Creative Portfolio
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing. <br /> Non vero, debitis magnam soluta tenetur inventore <br /> optio rem alias illo fugiat molestiae perferendis <br /> tempore, qui accusantium laudantium <br /> ratione ullam labore quas modi quam.
                    </p><br />

                    <Button text='See more' url='#' />
                </div>

                <div>
                    <Image
                        src={Creative}
                        width={400}
                        height={400}
                        alt='creative image'
                        className='rounded'
                    />
                </div>
            </div>
            <br /><br /><br /><br />
            <div className='flex justify-between items-center space-x-2 my-4'>
                <div>
                    <Image
                        src={Creative2}
                        width={400}
                        height={400}
                        alt='creative image'
                        className='rounded'
                    />
                </div>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold'>
                        Creative Portfolio
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing. <br /> Non vero, debitis magnam soluta tenetur inventore <br /> optio rem alias illo fugiat molestiae perferendis <br /> tempore, qui accusantium laudantium <br /> ratione ullam labore quas modi quam.
                    </p><br />

                    <Button text='See more' url='#' />
                </div>
            </div><br /><br /><br /><br />
            <div className='flex justify-between items-center space-x-2 my-4'>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold'>
                        Creative Portfolio
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing. <br /> Non vero, debitis magnam soluta tenetur inventore <br /> optio rem alias illo fugiat molestiae perferendis <br /> tempore, qui accusantium laudantium <br /> ratione ullam labore quas modi quam.
                    </p><br />

                    <Button text='See more' url='#' />
                </div>

                <div>
                    <Image
                        src={Creative}
                        width={400}
                        height={400}
                        alt='creative image'
                        className='rounded'
                    />
                </div>
            </div><br /><br /><br />
        </div >
    )
}

export default Category