import { Hero } from '../../components/sections/Hero/Hero';
import { Features } from '../../components/sections/Features/Features';
import { PopularSubjects } from '../../components/sections/PopularSubjects/PopularSubjects';
import { OurClients } from '../../components/sections/OurClients/OurClients';
import { Reviews } from '../../components/sections/Reviews/Reviews';


export const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <PopularSubjects />
      <OurClients />
      <Reviews />
    </div>
  );
};
