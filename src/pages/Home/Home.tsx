import { Hero } from '../../components/sections/Hero/Hero';
import { Features } from '../../components/sections/Features/Features';
import {PopularSubjects} from "../../components/sections/PopularSubjects/PopularSubjects.tsx";
import {Reviews} from "../../components/sections/Reviews/Reviews.tsx";

export const Home = () => {
    // const indexChange = (page: number) => {
    //     console.log(page);
    // }
  return (
    <div className="min-h-screen">
        {/*<RadioGroup options={*/}
        {/*    [*/}
        {/*        {label: "English", value: "english"},*/}
        {/*        {label: "German", value: "german"}*/}
        {/*    ]*/}
        {/*}/>*/}
        {/*<Pagination theme='primary' shape='round' activeIndex={1} totalPages={20} onIndexChange={indexChange} siblings={2}/>*/}
      <Hero />
      <Features />
      <PopularSubjects />
        <Reviews/>
    </div>
  );
};
