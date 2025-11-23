import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGear } from 'react-icons/fa6';
import { GoArrowUpRight } from 'react-icons/go';

export default function Motto() {
  return (
    <section className='relative mt-24 w-full overflow-hidden'>
      <div className='items-center gap-y-10 xl:gap-y-0 grid grid-cols-12 px-[6%] w-full'>
        {/* متن */}
        <motion.div
          className='z-10 flex flex-col gap-y-6 col-span-12 xl:col-span-6'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className='flex justify-center items-center gap-x-2 bg-[#A766E9] hover:opacity-90 px-8 py-4 rounded-full font-medium hover:text-white duration-500 ease-linear cursor-pointer'
            >
              TRY IT FOR FREE
              <GoArrowUpRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className='flex justify-center items-center gap-x-2 hover:bg-white px-8 py-4 border border-white rounded-full text-white hover:text-[#A766E9] duration-500 ease-linear cursor-pointer'
            >
              PURCHASE PRO
              <FaGear size={18} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className='relative flex justify-center col-span-12 xl:col-span-6 mt-12 lg:mt-0'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* پس‌زمینه سیاره */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <Image
              src='/img/planet-lg.png'
              alt='planet background'
              width={600}
              height={600}
              className='top-1/2 z-0 absolute -translate-y-1/2'
            />
          </motion.div>

          <motion.div
            className='z-10 relative'
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              ease: 'easeInOut',
            }}
          >
            <Image
              src='/img/robot-with-wrench.png'
              alt='robot'
              width={500}
              height={500}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
