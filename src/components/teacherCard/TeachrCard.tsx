import Person from '../../assets/images/person.jpg'
import Star from '../icons/Star.tsx'
import {Button} from "../ui/button/Button.tsx";

export const TeacherCard = () => {
    return (
        <div className='flex border border-blue-500 px-[36px] py-[36px] rounded-[25px]'>
            <div className='flex gap-[15px] border-r border-[#ffffff10] pr-[23px]'>
                <div className='flex flex-col gap-[15px]'>
                    <div className='w-[173px] h-[173px] overflow-hidden rounded-[25px]'>
                        <img className='w-full h-full object-cover' src={Person} alt="person"/>
                    </div>
                    <div className='pb-[9px] border-b border-light-200'>
                        <p className='text-light-100 text-[18px]'>Els Menson</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <span className='inline-flex w-fit shrink-0 text-[14px] text-light-100 rounded-full bg-dark-900 px-[35px] py-[2px]'>English teacher</span>
                    <div className='flex flex-col gap-[20px] w-full max-w-[465px]'>
                        <p className='text-[14px] text-light-100'>Experience — 12 years</p>
                        <p className='text-[14px] text-light-100'>Education — University of Amsterdam</p>
                        <p className='text-[14px] text-light-100'>Teaching Approach— Communicative, student-centered methodology focused on real-life English.
                            Lessons emphasize speaking practice, practical vocabulary, and personalized learning goals.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-[15px] pl-[37px]'>
                <span className='text-[36px] text-light-100'>35 euro</span>
                <span className='text-[20px] text-dark-400'>1 hour</span>
                <div className='flex gap-[4px]'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
                <Button variant='secondary'>Book</Button>
                <span className='text-[14px] text-dark-400'>First lesson - free</span>
            </div>
        </div>
    );
};

