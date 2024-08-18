import Button from '@/components/button/Button';
import Image from 'next/image';
import Creative from '../../../../public/creative.jpg';
import Creative2 from '../../../../public/DG.jpg';

const Category = ({ params }) => {
    return (
        <div className="px-4 md:px-8">
            <p className="text-xl text-slate-700 font-semibold">
                <span className="text-slate-400">Category :</span> {params.category}
            </p>

            <br />

            {/* Section 1 */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 my-4">
                <div className="space-y-4 md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold">Creative Portfolio</h1>
                    <p className="text-base md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing. <br /> Non vero, debitis magnam soluta tenetur inventore <br /> optio rem alias illo fugiat molestiae perferendis <br /> tempore, qui accusantium laudantium <br /> ratione ullam labore quas modi quam.
                    </p><br />
                    <Button text="See more" url="#" />
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src={Creative}
                        width={400}
                        height={400}
                        alt="creative image"
                        className="rounded"
                    />
                </div>
            </div>

            <br />

            {/* Section 2 */}
            <div className="flex flex-col md:flex-row-reverse justify-between items-center space-y-8 md:space-y-0 my-4">
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src={Creative2}
                        width={400}
                        height={400}
                        alt="creative image"
                        className="rounded"
                    />
                </div>
                <div className="space-y-4 md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold">Creative Portfolio</h1>
                    <p className="text-base md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing. <br /> Non vero, debitis magnam soluta tenetur inventore <br /> optio rem alias illo fugiat molestiae perferendis <br /> tempore, qui accusantium laudantium <br /> ratione ullam labore quas modi quam.
                    </p><br />
                    <Button text="See more" url="#" />
                </div>
            </div>

            <br />

            {/* Section 3 */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 my-4">
                <div className="space-y-4 md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold">Creative Portfolio</h1>
                    <p className="text-base md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing. <br /> Non vero, debitis magnam soluta tenetur inventore <br /> optio rem alias illo fugiat molestiae perferendis <br /> tempore, qui accusantium laudantium <br /> ratione ullam labore quas modi quam.
                    </p><br />
                    <Button text="See more" url="#" />
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src={Creative}
                        width={400}
                        height={400}
                        alt="creative image"
                        className="rounded"
                    />
                </div>
            </div>
        </div>
    );
};

export default Category;
