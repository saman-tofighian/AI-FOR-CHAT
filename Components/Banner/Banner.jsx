import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Banner() {
  return (
    <section className='relative mt-40 px-[6%] w-full'>
      <Image
        src='/img/telescope.png'
        width={180}
        height={180}
        alt='telescope'
        className='-top-16 left-[20%] z-20 absolute rotate-[-12deg]'
      />

      <div className='grid grid-cols-12 w-full'>
        <div
          className='relative col-span-12 xl:col-span-10 xl:col-start-2 px-10 py-24 rounded-[4.5rem] overflow-hidden text-center'
          style={{
            background:
              'linear-gradient(135deg, #FFD28F 0%, #FFAE8F 25%, #C8B4FF 60%, #B4E1FF 100%)',
          }}
        >
          <h3 className='mt-10 xl:mt-5 font-medium text-[1.3rem] text-black/80 md:text-[1.9rem] lg:text-[2.25rem]'>
            Want to build templates like this?
          </h3>

          <h4 className='mt-5 font-semibold text-[2.1rem] text-black md:text-[2.7rem] lg:text-[3.75rem]'>
            Visit Pixel Rocket today
          </h4>

          <div className='flex justify-center mt-10'>
            <button className='flex justify-center items-center gap-x-2 bg-[#A766E9] hover:bg-white shadow-xl px-8 py-3 rounded-3xl font-medium text-[1rem] text-black hover:text-[#A766E9] duration-500 cursor-pointer'>
              Learn Frontend Web Development
              <FiArrowUpRight className='text-[1.2rem]' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
