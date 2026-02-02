import Person from '../../assets/images/person.jpg'
import {CardsList} from "../../components/cardsList/CardsList.tsx";
import {Filters} from "../../components/filters/Filters.tsx";
import {Pagination} from "../../components/ui/pagination/Pagination.tsx";
import {useState} from "react";

export type TeacherType = {
    id: string,
    name: string,
    subject: string,
    image: string,
    experience: string,
    education: string,
    approaching: string
    price: number
}

const teachers: TeacherType[] = [
    {
        id: '1',
        name: 'Els Menson',
        subject: 'English',
        price: 35,
        image: Person,
        experience: '12 years',
        education: 'University of Amsterdam',
        approaching: 'Communicative, student-centered methodology focused on real-life English. Lessons emphasize speaking practice, practical vocabulary, and personalized learning goals.',
    },
    {
        id: '2',
        name: 'Els Menson',
        subject: 'English',
        price: 35,
        image: Person,
        experience: '12 years',
        education: 'University of Amsterdam',
        approaching: 'Communicative, student-centered methodology focused on real-life English. Lessons emphasize speaking practice, practical vocabulary, and personalized learning goals.',
    },
    {
        id: '3',
        name: 'Els Menson',
        subject: 'English',
        price: 35,
        image: Person,
        experience: '12 years',
        education: 'University of Amsterdam',
        approaching: 'Communicative, student-centered methodology focused on real-life English. Lessons emphasize speaking practice, practical vocabulary, and personalized learning goals.',
    },
    {
        id: '4',
        name: 'Els Menson',
        subject: 'English',
        price: 35,
        image: Person,
        experience: '12 years',
        education: 'University of Amsterdam',
        approaching: 'Communicative, student-centered methodology focused on real-life English. Lessons emphasize speaking practice, practical vocabulary, and personalized learning goals.',
    },
    {
        id: '5',
        name: 'Els Menson',
        subject: 'English',
        price: 35,
        image: Person,
        experience: '12 years',
        education: 'University of Amsterdam',
        approaching: 'Communicative, student-centered methodology focused on real-life English. Lessons emphasize speaking practice, practical vocabulary, and personalized learning goals.',
    },
    {
        id: '6',
        name: 'Els Menson',
        subject: 'English',
        price: 35,
        image: Person,
        experience: '12 years',
        education: 'University of Amsterdam',
        approaching: 'Communicative, student-centered methodology focused on real-life English. Lessons emphasize speaking practice, practical vocabulary, and personalized learning goals.',
    },
    {
        id: '7',
        name: 'Els Menson',
        subject: 'English',
        price: 35,
        image: Person,
        experience: '12 years',
        education: 'University of Amsterdam',
        approaching: 'Communicative, student-centered methodology focused on real-life English. Lessons emphasize speaking practice, practical vocabulary, and personalized learning goals.',
    },
]



export const TeachersPage = () => {
    const [activeIndex, setActiveIndex] = useState(1)


    return (
        <div className="
            flex items-center
            flex-col justify-center w-full max-w-[1440px] mx-auto mt-[80px] py-[80px] px-[80px]
            ">
            <h1 className='auth-title'>OUR TEACHERS</h1>
            <h3 className='text-[16px] text-light-100 w-full max-w-[683px] text-center mb-[80px]'>
                Hey choose our platform for high-quality teaching,
                flexible learning, and professional support.
                From beginners to advanced learners, our clients see real progress and lasting results.
            </h3>
            <div className="flex flex-col items-center gap-[40px] lg:flex-row lg:items-start">
                <Filters />
                <div className="flex flex-col gap-[40px]">
                    <CardsList cards={teachers} />
                    <div className="flex flex-col items-center gap-[20px]">
                        <h4 className="text-[18px] md:text-[24px] text-light-100">1,500 profiles found</h4>
                        <Pagination theme={'primary'} shape={'round'} activeIndex={activeIndex} onIndexChange={setActiveIndex} totalPages={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

