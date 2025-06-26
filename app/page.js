// import { navItems } from '../data/index';
import { TiHome } from 'react-icons/ti';

import Hero from '../components/Hero';
import Grid from '../components/Grid';
import { FloatingNav } from '../components/ui/FloatingNav';
import RecentProjects from '@/components/RecentProjects';
import { navItems } from '@/data';
import Clients from '@/components/Clients';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <main className="relative bg-[#000319] overflow-clip flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
