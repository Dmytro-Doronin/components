import { Hero } from '../../components/home-sections/Hero/Hero';
import { Features } from '../../components/home-sections/Features/Features';
import {PopularSubjects} from "../../components/home-sections/PopularSubjects/PopularSubjects.tsx";
import {ReviewsHome} from "../../components/home-sections/Reviews/ReviewsHome.tsx";
import {OurClients} from "../../components/home-sections/OurClients/OurClients.tsx";


export const Home = () => {
    // const indexChange = (page: number) => {
    //     console.log(page);
    // }
    return (
        <div className="h-auto">
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
            <section className="section-spacing relative z-10 bg-bg-main">
                <Features />
            </section>
            <section className="section-spacing relative z-10 bg-bg-main">
                <PopularSubjects />
            </section>
            <section className="section-spacing relative z-10 bg-bg-main">
                <OurClients />
            </section>
            <section className="section-spacing relative z-10 bg-bg-main">
                <ReviewsHome/>
            </section>
        </div>
    );
};