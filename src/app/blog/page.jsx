import Image from 'next/image'
import Creative from '../../../public/creative.jpg'
import Creative2 from '../../../public/DG.jpg'

const Blog = () => {
    return (
        <div className='space-y-4 my-10'>
            <div className='flex justify-between items-center space-x-2'>
                <div>
                    <Image
                        src={Creative}
                        width={300}
                        height={300}
                        alt='creative image'
                        className='rounded'
                    />
                </div>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold'>
                        Creative Portfolio
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Omnis totam <br /> tempore ducimus ipsam commodi corporis illum aliquam eaque odio ea. <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p><br />
                </div>
            </div>


            <div className='flex justify-between items-center space-x-2'>
                <div>
                    <Image
                        src={Creative2}
                        width={300}
                        height={300}
                        alt='creative image'
                        className='rounded'
                    />
                </div>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold'>
                        Creative Portfolio
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Omnis totam <br /> tempore ducimus ipsam commodi corporis illum aliquam eaque odio ea. <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p><br />
                </div>
            </div>



            <div className='flex justify-between items-center space-x-2'>
                <div>
                    <Image
                        src={Creative}
                        width={300}
                        height={300}
                        alt='creative image'
                        className='rounded'
                    />
                </div>

                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold'>
                        Creative Portfolio
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Omnis totam <br /> tempore ducimus ipsam commodi corporis illum aliquam eaque odio ea. <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p><br />
                </div>
            </div>
        </div>
    )
}

export default Blog