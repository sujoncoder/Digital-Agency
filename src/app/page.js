import Button from '@/components/button/Button';
import Image from 'next/image';
import Hero from '/public/hero.png';

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* title section */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl text-slate-700 font-bold">
            Better design for your digital products.
          </h1>
          <p className="text-lg md:text-base">
            Turning your idea into Reality. We bring together <br />
            the teams from the global tech industry.
          </p><br />
          <Button text="See Our Works" url="/portfolio" />
        </div>

        {/* image section */}
        <div>
          <Image
            src={Hero}
            width={400}
            height={400}
            alt="hero image"
            className="w-full max-w-sm md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
