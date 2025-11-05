import Image from 'next/image';
import { TbListTree } from 'react-icons/tb';

export default function Header() {
  return (
    <header className='pt-9 w-full min-h-[87px]'>
      <nav className='grid grid-cols-12 px-[6%] w-full'>
        <figure className='flex items-center col-span-6 h-full'>
          <Image src='img/logo.svg' alt='logo' width={152} height={40} />
        </figure>
        <div className='flex justify-end items-center gap-x-9 col-span-6'>
          <button className='text-white cursor-pointer'>SIGN IN</button>
          <button className='bg-[#A766E9] px-4 py-2.5 rounded-3xl text-white cursor-pointer'>
            SIGN Up
          </button>
          <span>
            <TbListTree color='#fff' size='2.4rem' className='cursor-pointer' />
          </span>
        </div>
        <div className='flex justify-center col-span-12 mt-11'>
          <span className='bg-white w-11/12 h-[.5px]'></span>
        </div>
      </nav>
    </header>
  );
}
