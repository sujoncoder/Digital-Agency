import Image from 'next/image'
import Mypic from '../../../../public/myPic.jpg'
import Dg from '../../../../public/DG.jpg'

const BlogPost = () => {
    return (
        <div>
            <div className='flex justify-between items-center my-10'>

                {/* text content here */}
                <div>
                    <h1 className='text-3xl font-bold'>
                        Lorem ipsum dolor sit amet consect.
                    </h1><br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Eveniet impedit officia nobis ratione quibusdam veniam <br /> possimus molestias quam eligendi nulla.Lorem ipsum dolor sit amet consectetur.
                    </p><br />
                    <div className='flex items-center space-x-2'>
                        <Image
                            src={Mypic}
                            width={100}
                            height={100}
                            alt='profile pic'
                            className='rounded-full w-10 h-10'
                        />

                        <span className='text-slate-600'>Sujon Sheikh</span>
                    </div>
                </div>

                {/* Image section here */}
                <div>
                    <Image
                        src={Dg}
                        width={500}
                        height={500}
                        alt='blog post image'
                        className='rounded w-[500px] h-[300px]'
                    />
                </div>
            </div>

            <div>
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique atque aliquid aspernatur error sint maxime voluptate. <br /> voluptas ad quas voluptatibus delectus accusamus dolorem cupiditate provident eaque, <br /> <br /> non quo possimus amet? Facere optio ipsa labore ipsam cumque facilis sequi maxime, obcaecati in dolores error fuga atque officia perspiciatis ullam modi doloremque. <br />

                    non quo possimus amet? Facere optio ipsa labore ipsam cumque facilis sequi maxime, obcaecati in dolores error fuga atque officia perspiciatis ullam modi doloremque.
                </p> <br /><br />
            </div>
        </div>
    )
}

export default BlogPost