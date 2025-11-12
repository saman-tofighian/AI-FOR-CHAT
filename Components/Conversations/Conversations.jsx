import { BiConversation } from 'react-icons/bi';
import { BsQuestionSquare } from 'react-icons/bs';
import { GiMissilePod } from 'react-icons/gi';

export default function Conversations() {
  return (
    <section className='relative mt-36 px-[6%] py-12 w-full overflow-hidden'>
      <div className='-bottom-40 -left-60 z-0 absolute bg-gradient-to-br from-purple-600/70 to-pink-500/70 blur-[80px] rounded-full w-[600px] h-[600px]'></div>
      <div className='-top-20 -right-60 z-0 absolute bg-gradient-to-br from-pink-500/70 to-purple-600/70 blur-[80px] rounded-full w-[600px] h-[600px]'></div>

      <div className='z-10 relative mb-20 w-full text-center'>
        <h2 className='font-bold text-[2.5rem] text-white md:text-[4.5rem] leading-tight'>
          Intelligent
          <br />
          Conversations
        </h2>

        <p className='mx-auto mt-6 max-w-2xl text-[#a4a5ad] text-[1.25rem]'>
          Our AI is powered by state-of-the-art artificial intelligence,
          ensuring natural and meaningful interactions.
        </p>
      </div>

      <div className='z-10 relative gap-8 grid lg:grid-cols-2 xl:grid-cols-3 mt-16'>
        <div className='bg-gradient-to-b from-white/15 to-white/5 shadow-[0_8px_30px_rgb(255,255,255,0.1)] hover:shadow-purple-500/20 backdrop-blur-xl p-8 border border-white/10 rounded-3xl text-white'>
          <div className='mb-4 text-3xl'>
            <GiMissilePod color='green' size='3rem' />
          </div>
          <h3 className='mb-3 font-semibold text-xl'>Seamless Integration</h3>
          <p className='text-[#c3c3c8]'>
            Powered by state-of-the-art artificial intelligence, ensuring
            natural and meaningful.
          </p>
        </div>

        <div className='bg-gradient-to-b from-white/15 to-white/5 shadow-[0_8px_30px_rgb(255,255,255,0.1)] hover:shadow-pink-500/20 backdrop-blur-xl p-8 border border-white/10 rounded-3xl text-white'>
          <div className='mb-4 text-3xl'>
            <BiConversation color='yellow' size='3rem' />
          </div>
          <h3 className='mb-3 font-semibold text-xl'>
            Intelligent Conversations
          </h3>
          <p className='text-[#c3c3c8]'>
            Whether you're a tech guru or a beginner, you'll have your AI chat
            assistant up.
          </p>
        </div>

        <div className='bg-gradient-to-b from-white/15 to-white/5 shadow-[0_8px_30px_rgb(255,255,255,0.1)] hover:shadow-blue-500/20 backdrop-blur-xl p-8 border border-white/10 rounded-3xl text-white'>
          <div className='mb-4 text-3xl'>
            <BsQuestionSquare color='cyan' size='3rem' />
          </div>
          <h3 className='mb-3 font-semibold text-xl'>Analytics and Insights</h3>
          <p className='text-[#c3c3c8]'>
            Gain valuable insights into your users' preferences, behavior, and
            frequently asked questions.
          </p>
        </div>
      </div>
    </section>
  );
}
