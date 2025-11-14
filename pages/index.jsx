import Conversations from '@/Components/Conversations/Conversations';
import Gallery from '@/Components/Gallery/Gallery';
import Header from '@/Components/Header/Header';
import Libray from '@/Components/Libray/Libray';
import Motto from '@/Components/Motto/Motto';
import Work from '@/Components/Work/Work';

export default function Home() {
  return (
    <main className='w-full overflow-x-hidden'>
      <Header />
      <Motto />
      <Work />
      <Conversations />
      <Gallery />
      <Libray />
    </main>
  );
}
