import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { TbListTree } from 'react-icons/tb';
import { TiDeleteOutline } from 'react-icons/ti';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className='relative pt-9 w-full min-h-[87px]'>
        <nav className='items-center grid grid-cols-12 px-[6%] w-full'>
          <figure className='flex items-center col-span-4 lg:col-span-6'>
            <Image src='/img/logo.svg' alt='logo' width={152} height={40} />
          </figure>

          <div className='flex justify-end items-center gap-x-6 lg:gap-x-9 col-span-8 lg:col-span-6'>
            <button className='hidden sm:flex text-white hover:text-[#A766E9] transition-all duration-300 cursor-pointer'>
              SIGN IN
            </button>

            <button className='bg-[#A766E9] hover:bg-[#b88af0] px-4 py-2.5 rounded-3xl text-white transition-all duration-300 cursor-pointer'>
              SIGN UP
            </button>
            <span>
              <TbListTree
                color='#fff'
                size='2.4rem'
                className='hover:scale-110 transition-transform duration-300 cursor-pointer'
                onClick={() => setOpenMenu(true)}
              />
            </span>
          </div>

          <div className='flex justify-center col-span-12 mt-11'>
            <span className='bg-white/60 w-0 h-[.5px] animate-[expandLine_1.3s_ease-out_forwards]'></span>
          </div>
        </nav>
        <style>{`
          @keyframes expandLine {
            from { width: 0; opacity: 0; }
            to { width: 92%; opacity: 1; }
          }
        `}</style>
      </header>
      <AnimatePresence>
        {openMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='z-40 fixed inset-0 bg-black backdrop-blur-sm'
              onClick={() => setOpenMenu(false)}
            />
            <motion.aside
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '0%', opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className='top-0 left-0 z-50 fixed flex flex-col justify-between bg-white/10 shadow-2xl backdrop-blur-xl px-6 py-6 border-white/10 border-r w-[55vw] sm:w-[23vw] h-screen'
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
                    className='hover:rotate-90 transition-all duration-300 cursor-pointer'
                    onClick={() => setOpenMenu(false)}
                  />
                </div>
                <ul className='flex flex-col gap-y-6 mt-28 pt-14 pl-3'>
                  {['ABOUT', 'PRICING', 'BLOG', 'CONTACT'].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.15 }}
                    >
                      <Link
                        href='/'
                        className='font-medium text-[17px] text-white hover:text-[#A766E9] transition-all duration-300'
                      >
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className='flex flex-col items-center gap-y-4 mb-10'>
                <button className='font-medium text-[#9C7BE6] text-[15px] hover:text-white transition-all duration-300 cursor-pointer'>
                  SIGN IN
                </button>

                <button className='bg-[#A766E9] hover:bg-[#b88af0] shadow-xl px-10 py-2.5 rounded-full w-full font-medium text-white transition-all duration-300 cursor-pointer'>
                  SIGN UP
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
