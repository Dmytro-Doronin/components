import { Hero } from '../../components/home-sections/Hero/Hero';
import { Features } from '../../components/home-sections/Features/Features';
import {PopularSubjects} from "../../components/home-sections/PopularSubjects/PopularSubjects.tsx";
import {Reviews} from "../../components/home-sections/Reviews/Reviews.tsx";
import {OurClients} from "../../components/home-sections/OurClients/OurClients.tsx";


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
            <section className="section-spacing">
                <Hero />
            </section>
            <section className="section-spacing">
                <Features />
            </section>
            <section className="section-spacing">
                <PopularSubjects />
            </section>
            <section className="section-spacing">
                <OurClients />
            </section>
            <section className="section-spacing">
                <Reviews/>
            </section>
        </div>
    );
};