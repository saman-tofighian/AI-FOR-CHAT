import Image from 'next/image';
import { FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className='relative bg-[#060B27] mt-40 px-[6%] pt-32 pb-16 w-full overflow-hidden'>
      <div className='hidden -top-40 right-0 absolute xl:flex bg-[#7F2FD2] opacity-70 blur-[3px] rounded-full w-[380px] h-[380px] pointer-events-none'></div>

      <Image
        src='/img/axe.png'
        width={160}
        height={160}
        alt='axe'
        className='hidden right-28 bottom-85 z-10 absolute xl:flex'
      />

      <Image
        src='/img/star.png'
        width={80}
        height={80}
        alt='star'
        className='hidden top-[28%] left-1/2 absolute xl:flex opacity-80 -translate-x-1/2'
      />

      <div className='z-20 relative gap-10 grid grid-cols-12 w-full'>
        <div className='col-span-12 lg:col-span-4'>
          <div className='flex items-center gap-3'>
            <div className='bg-white rounded-full w-6 h-6'></div>
            <span className='font-medium text-[1.4rem] text-white'>
              ContrastAI
            </span>
          </div>

          <h3 className='mt-10 font-medium text-[1.5rem] text-white'>
            Subscribe to our newsletter
          </h3>

          <label className='block mt-5 mb-2 text-[#9aa0b7] text-[0.9rem]'>
            Email
          </label>

          <div className='flex items-center bg-[#0F163A] pr-2 border border-[#1c2348] rounded-full w-full overflow-hidden'>
            <FiMail className='ml-4 text-[#8b91a8] text-[1.2rem]' />
            <input
              type='email'
              placeholder='pat@shuffle.dev'
              className='bg-transparent px-4 py-3 outline-none w-full text-white placeholder-[#8b91a8]'
            />
            <button className='flex justify-center items-center bg-[#9C5BFF] hover:bg-[#b87cff] rounded-full w-10 h-10 duration-300 cursor-pointer'>
              <svg width='16' height='16' viewBox='0 0 24 24' fill='none'>
                <path stroke='#fff' strokeWidth='2' d='M5 12h14M13 5l7 7-7 7' />
              </svg>
            </button>
          </div>
        </div>

        <div className='col-span-6 sm:col-span-3 text-white'>
          <h4 className='mb-5 font-medium text-[1.1rem]'>Services</h4>
          <ul className='space-y-3 text-[#9aa0b7]'>
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
            <li>Offline</li>
          </ul>
        </div>

        <div className='col-span-6 sm:col-span-3 text-white'>
          <h4 className='mb-5 font-medium text-[1.1rem]'>About</h4>
          <ul className='space-y-3 text-[#9aa0b7]'>
            <li>Our Story</li>
            <li>Benefits</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className='col-span-12 sm:col-span-2 text-white'>
          <h4 className='mb-5 font-medium text-[1.1rem]'>Help</h4>
          <ul className='space-y-3 text-[#9aa0b7]'>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className='z-20 relative flex md:flex-row flex-col justify-between items-center mt-20 pt-6 border-[#1b2147] border-t w-full text-[#7b7f9b] text-[0.9rem]'>
        <p>
          © <strong className='text-[#7F2FD2]'>Saman Tofighian</strong> . All
          rights reserved
        </p>

        <div className='flex items-center gap-10 mt-4 md:mt-0'>
          <a href='#' className='hover:text-white duration-300'>
            Terms & Conditions
          </a>
          <a href='#' className='hover:text-white duration-300'>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
