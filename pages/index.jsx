import Header from '@/Components/Header/Header';
import Motto from '@/Components/Motto/Motto';
import Work from '@/Components/Work/Work';

export default function Home() {
  return (
    <main className='w-full overflow-x-hidden'>
      <Header />
      <Motto />
      <Work />
    </main>
  );
}
