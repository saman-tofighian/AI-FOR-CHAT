import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Library() {
  const items = [
    { name: 'WELYTICS', icon: '/icons/welytics.svg' },
    { name: 'SYMTRIC', icon: '/icons/symtric.svg' },
    { name: 'SYMTRIC', icon: '/icons/symtric.svg' },
    { name: 'JIGGLE', icon: '/icons/jiggle.svg' },
    { name: 'Wishlep', icon: '/icons/wishlep.svg' },
    { name: 'WELYTICS', icon: '/icons/welytics.svg' },
  ];

  return (
    <section className='relative mt-36 px-[6%] w-full overflow-hidden'>
      <div className='-top-56 -right-10 absolute bg-gradient-to-br from-blue-600/70 to-blue-400/70 blur-[2px] rounded-full w-[550px] h-[550px] pointer-events-none'></div>

      <Image
        src='/img/star.png'
        width={80}
        height={80}
        alt='star'
        className='top-[18%] left-1/2 z-10 absolute opacity-90 -translate-x-1/2'
      />

      <div className='z-10 relative gap-10 grid grid-cols-12 mt-32 w-full'>
        <div className='col-span-12 md:col-span-5'>
          <h3 className='font-semibold text-[3rem] text-white md:text-[3.75rem] leading-tight'>
            Integrate your UI <br /> Library with ours
          </h3>

          <p className='mt-5 text-[#787a88] text-[1.125rem]'>
            Nunc et tellus non erat accumsan aliquam eget non mi. Integer
            fringilla pellentesque finibus.
          </p>

          <div className='mt-7 w-full'>
            <button className='flex justify-center items-center gap-x-2 bg-[#A766E9] hover:bg-white px-7 py-3.5 rounded-3xl text-black hover:text-[#A766E9] duration-300 cursor-pointer'>
              LEARN MORE
              <FiArrowUpRight />
            </button>
          </div>
        </div>

        <div className='gap-5 grid grid-cols-2 md:grid-cols-2 col-span-12 md:col-span-7 xl:col-span-5 mt-10 md:mt-0'>
          {items.map((item, index) => (
            <div
              key={index}
              className='flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl p-5 border border-white/20 rounded-2xl duration-300'
            >
              <Image src={item.icon} width={28} height={28} alt={item.name} />
              <span className='font-semibold text-white tracking-wide'>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}
