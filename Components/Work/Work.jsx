import Image from 'next/image';

export default function Work() {
  const steps = [
    {
      id: 1,
      title: '01. Upload',
      desc: 'Our user-friendly interface allows for quick setup, and our dedicated support team is ready to assist you every step of the way.',
      img: '/img/work1.png',
    },
    {
      id: 2,
      title: '02. Auto Generation',
      desc: 'From answering questions to providing recommendations, our AI assistant will engage your visitors effortlessly analytics dashboard.',
      img: '/img/work2.png',
    },
    {
      id: 3,
      title: '03. Select & Send',
      desc: 'Gain valuable insights into your users’ preferences, behavior, and frequently asked questions with Casper’s advanced analytics dashboard.',
      img: '/img/work3.png',
    },
    {
      id: 4,
      title: '04. Results',
      desc: 'Gain valuable insights into your users’ preferences, behavior, and frequently asked questions with Casper’s advanced analytics dashboard.',
      img: '/img/work1.png',
    },
  ];

  return (
    <section className='relative mt-36 px-[6%] w-full'>
      <div className='mb-20 w-full text-center'>
        <h2 className='font-bold text-[2.5rem] text-white md:text-[4.5rem]'>
          How Does It Work
        </h2>
        <p className='mt-6 text-[#a4a5ad] text-[1.25rem]'>
          Mi turpis turpis in justo pellentesque id nibh praesent.
        </p>
      </div>

      <div className='relative gap-y-16 xl:gap-x-20 grid grid-cols-1 xl:grid-cols-2 mx-auto mt-16 max-w-[1200px]'>
        {steps.map((item) => (
          <div
            key={item.id}
            className='group z-10 relative flex flex-col items-start text-center xl:text-start'
          >
            <div className='flex flex-col gap-1 mb-6 w-full text-center xl:text-start'>
              <h3 className='font-semibold text-[3rem] text-white'>
                {item.title}
              </h3>
            </div>
            <div className='bg-gradient-to-r from-[#3F87F5] to-[#A766E9] mb-6 rounded-full w-full h-[3px]'></div>

            <p className='mb-6 text-[#a4a5ad] text-[1.25rem] leading-relaxed'>
              {item.desc}
            </p>

            <div className='w-full'>
              <div className='relative bg-gradient-to-tr from-[#26B6F4] via-[#ECBAB4] to-[#FFA944] mt-9 rounded-[22px] overflow-hidden'>
                <div className='flex justify-center items-center bg-[#0C0E1A] mt-22 ml-20 rounded-tl-[1.25rem] rounded-br-[1.25rem]'>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={300}
                    className='rounded-[20px] object-center'
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className='hidden xl:block -top-28 right-0 z-0 absolute bg-gradient-to-tr from-[#4316DB] to-[#A766E9] opacity-70 blur-3xl rounded-full w-[350px] h-[350px]'></div>
      </div>
    </section>
  );
}
