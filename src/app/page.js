import Image from 'next/image'
import Hero from '/public/hero.png'
import Button from '@/components/button/Button'

const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <div className='flex  justify-between items-center'>
        {/* title section */}
        <div className='flex-col space-y-6'>
          <h1 className='text-5xl font-bold'>Better design <br /> for your digital products.</h1>

          <p>
            Turning your idea into Reality. We bringe together <br /> the teams from the global tech industry.
          </p><br />

          <Button text="See Our Works" url="/portfolio" />
        </div>

        {/* image section */}
        <div>
          <Image
            src={Hero}
            width={500}
            height={500}
            alt='hero image'
          />
        </div>
      </div>
    </div>
  )
}

export default Home