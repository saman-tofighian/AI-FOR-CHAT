import Image from 'next/image';
import { FaGear } from 'react-icons/fa6';
import { GoArrowUpRight } from 'react-icons/go';

export default function Motto() {
  return (
    <section className='relative mt-24 w-full overflow-hidden'>
      <div className='items-center gap-y-10 xl:gap-y-0 grid grid-cols-12 px-[6%] w-full'>
        <div className='z-10 flex flex-col gap-y-6 col-span-12 xl:col-span-6'>
          <h1 className='font-extrabold text-[3.5rem] text-white md:text-[6rem] text-center xl:text-start leading-tight'>
            AI FOR{' '}
            <span className='bg-clip-text bg-gradient-to-r from-[#3F87F5] to-[#7A3CFD] text-transparent'>
              CHAT ASSISTANT
            </span>{' '}
          </h1>

          <p className='font-bold text-[20px] text-gray-400 text-lg text-center xl:text-start'>
            Welcome to ChatBotX –<br />
            Your Intelligent AI Chat Assistant!
          </p>

          <div className='flex flex-wrap justify-center xl:justify-start gap-4 mt-4'>
            <button className='flex justify-center items-center gap-x-2 bg-[#A766E9] hover:opacity-90 px-8 py-4 rounded-full font-medium hover:text-white duration-500 ease-linear cursor-pointer'>
              TRY IT FOR FREE
              <GoArrowUpRight size={18} />
            </button>
            <button className='flex justify-center items-center gap-x-2 hover:bg-white px-8 py-4 border border-white rounded-full text-white hover:text-[#A766E9] duration-500 ease-linear cursor-pointer'>
              PURCHASE PRO
              <FaGear size={18} />
            </button>
          </div>
        </div>

        {/* تصویر سمت راست */}
        <div className='relative flex justify-center col-span-12 xl:col-span-6 mt-12 lg:mt-0'>
          {/* سیاره پشت ربات */}
          <Image
            src='/img/planet-lg.png'
            alt='planet background'
            width={600}
            height={600}
            className='top-1/2 z-0 absolute -translate-y-1/2'
          />

          <Image
            src='/img/robot-with-wrench.png'
            alt='robot'
            width={500}
            height={500}
            className='z-10 relative'
          />
        </div>
      </div>
    </section>
  );
}
