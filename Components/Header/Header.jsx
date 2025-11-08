import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { TbListTree } from 'react-icons/tb';
import { TiDeleteOutline } from 'react-icons/ti';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className='pt-9 w-full min-h-[87px]'>
        <nav className='items-center grid grid-cols-12 px-[6%] w-full'>
          <figure className='flex items-center col-span-4 lg:col-span-6 h-full'>
            <Image src='/img/logo.svg' alt='logo' width={152} height={40} />
          </figure>

          <div className='flex justify-end items-center gap-x-6 lg:gap-x-9 col-span-8 lg:col-span-6'>
            <button className='hidden sm:flex text-white cursor-pointer'>
              SIGN IN
            </button>
            <button className='bg-[#A766E9] px-4 py-2.5 rounded-3xl text-white cursor-pointer'>
              SIGN UP
            </button>
            <span>
              <TbListTree
                color='#fff'
                size='2.4rem'
                className='cursor-pointer'
                onClick={() => setOpenMenu(true)}
              />
            </span>
          </div>

          <div className='flex justify-center col-span-12 mt-11'>
            <span className='bg-white w-11/12 h-[.5px]'></span>
          </div>
        </nav>
      </header>

      {openMenu && (
        <div
          className='z-40 fixed inset-0 bg-black/40'
          onClick={() => setOpenMenu(false)}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 bg-white w-[55vw] sm:w-[23vw] h-screen z-50 flex flex-col justify-between py-6 px-6 transition-transform duration-500 ease-in-out ${
          openMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          <div className='flex justify-between items-center mt-8'>
            <Image
              src='/img/casper-logo.svg'
              alt='logo'
              width={120}
              height={40}
            />
            <TiDeleteOutline
              size='2.4rem'
              color='red'
              className='cursor-pointer'
              onClick={() => setOpenMenu(false)}
            />
          </div>

          <ul className='flex flex-col gap-y-6 mt-28 pt-14 pl-3'>
            {['ABOUT', 'PRICING', 'BLOG', 'CONTACT'].map((item, i) => (
              <li key={i}>
                <Link
                  href='/'
                  className='font-medium text-[17px] text-black hover:text-[#A766E9] transition-all duration-300'
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col items-center gap-y-4'>
          <button className='font-medium text-[#9C7BE6] text-[15px] cursor-pointer'>
            SIGN IN
          </button>
          <button className='bg-[#A766E9] px-10 py-2.5 rounded-full w-full font-medium text-white cursor-pointer'>
            SIGN UP
          </button>
        </div>
      </aside>
    </>
  );
}
