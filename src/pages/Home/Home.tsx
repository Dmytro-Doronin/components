import { Hero } from '../../components/sections/Hero/Hero';
import { Features } from '../../components/sections/Features/Features';
import {PopularSubjects} from "../../components/sections/PopularSubjects/PopularSubjects.tsx";
import {Header} from "../../components/header/Header.tsx";

export const Home = () => {
  return (
    <div className="min-h-screen relative">
      <Header/>
      <Hero />
      <Features />
      <PopularSubjects />
    </div>
  );
};
