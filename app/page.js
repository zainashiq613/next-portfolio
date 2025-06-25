// import { navItems } from '../data/index';
import { TiHome } from 'react-icons/ti';

import Hero from '../components/Hero';
import Grid from '../components/Grid';
import { FloatingNav } from '../components/ui/FloatingNav';

const Home = () => {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{ name: 'home', link: '/', icon: <TiHome /> }]} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
};

export default Home;
