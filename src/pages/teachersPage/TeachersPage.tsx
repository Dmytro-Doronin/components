import {TeacherCard} from "../../components/teacherCard/TeachrCard.tsx";

export const TeachersPage = () => {
    return (
        <div className="flex items-center flex-col justify-center w-full max-w-[1440px] mx-auto mt-[80px] px-[80px]">
            <h1 className='auth-title'>OUR TEACHERS</h1>
            <h3 className='text-[16px] text-light-100 w-full max-w-[683px] text-center'>
                Hey choose our platform for high-quality teaching,
                flexible learning, and professional support.
                From beginners to advanced learners, our clients see real progress and lasting results.
            </h3>
            <TeacherCard/>
        </div>
    );
};

