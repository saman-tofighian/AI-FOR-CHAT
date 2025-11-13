export default function Gallery() {
  const categories = [
    'All Categories',
    'Branding',
    'UI Design',
    'Illustration',
    'Development',
  ];

  const images = [
    '/img/work1.png',
    '/img/work2.png',
    '/img/work3.png',
    '/img/work4.png',
    '/img/work2.png',
    '/img/work1.png',
  ];

  return (
    <section className='relative mt-36 px-[6%] w-full overflow-hidden'>
      <div className='top-0.5 -left-40 z-0 absolute bg-gradient-to-br from-purple-600/70 to-pink-500/70 blur-[7px] rounded-full w-[500px] h-[500px]'></div>
      <div className='-right-40 bottom-0 z-0 absolute bg-gradient-to-br from-pink-600/70 to-purple-600/70 blur-[7px] rounded-full w-[500px] h-[500px]'></div>

      <div className='z-10 relative mb-14 w-full text-center'>
        <h2 className='font-bold text-[2.5rem] text-white md:text-[4.5rem] leading-tight'>
          Projects Launched
        </h2>

        <p className='mx-auto mt-6 max-w-2xl text-[#a4a5ad] text-[1.25rem]'>
          ContrastAI is powered by state-of-the-art artificial intelligence and
          ensuring natural and meaningful interactions.
        </p>
      </div>

      <div className='z-10 relative flex flex-wrap justify-center gap-4 mb-16'>
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`cursor-pointer px-6 py-2 rounded-full text-white font-medium transition-all duration-300 ${
              index === 0
                ? 'bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg'
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className='z-10 relative gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {images.map((src, index) => (
          <div
            key={index}
            className='group relative rounded-3xl overflow-hidden cursor-pointer'
          >
            <img
              src={src}
              alt={`Project ${index + 1}`}
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
            />

            {index === 0 && (
              <div className='right-6 bottom-6 left-6 absolute bg-gradient-to-tr from-purple-400/60 to-blue-200/60 shadow-lg backdrop-blur-xl p-5 border border-white/20 rounded-2xl text-white'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='font-bold text-[#ffb86c] text-lg'>
                    JIGGLE
                  </span>
                  <span className='text-white text-lg'>↗</span>
                </div>
                <h4 className='mb-1 font-semibold text-xl'>Jiggle Branding</h4>
                <p className='text-[#e5e5e5]/90 text-sm'>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
