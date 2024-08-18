import Image from 'next/image';
import Creative from '../../../public/creative.jpg';
import Creative2 from '../../../public/DG.jpg';

const Blog = () => {
    return (
        <div className='my-10 px-4 sm:px-8'>
            <div className='space-y-8'>
                {/* First Section */}
                <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4'>
                    <div className='w-full sm:w-1/2'>
                        <Image
                            src={Creative}
                            layout="responsive"
                            width={600}
                            height={400} // Adjust height to make image shorter
                            alt='creative image'
                            className='rounded'
                        />
                    </div>
                    <div className='w-full sm:w-1/2 space-y-4'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                            Creative Portfolio
                        </h1>
                        <p className='text-base sm:text-lg md:text-xl'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis totam
                            <br /> tempore ducimus ipsam commodi corporis illum aliquam eaque odio ea.
                            <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </p>
                    </div>
                </div>

                {/* Second Section */}
                <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4'>
                    <div className='w-full sm:w-1/2'>
                        <Image
                            src={Creative2}
                            layout="responsive"
                            width={600}
                            height={400} // Adjust height to make image shorter
                            alt='creative image'
                            className='rounded'
                        />
                    </div>
                    <div className='w-full sm:w-1/2 space-y-4'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                            Creative Portfolio
                        </h1>
                        <p className='text-base sm:text-lg md:text-xl'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis totam
                            <br /> tempore ducimus ipsam commodi corporis illum aliquam eaque odio ea.
                            <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </p>
                    </div>
                </div>

                {/* Third Section */}
                <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4'>
                    <div className='w-full sm:w-1/2'>
                        <Image
                            src={Creative}
                            layout="responsive"
                            width={600}
                            height={400} // Adjust height to make image shorter
                            alt='creative image'
                            className='rounded'
                        />
                    </div>
                    <div className='w-full sm:w-1/2 space-y-4'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                            Creative Portfolio
                        </h1>
                        <p className='text-base sm:text-lg md:text-xl'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis totam
                            <br /> tempore ducimus ipsam commodi corporis illum aliquam eaque odio ea.
                            <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
