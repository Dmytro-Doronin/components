import { SubjectCard } from './SubjectCard';
import bgImage from '../../../assets/bg-popular-subjects.png';

const subjects = [
  'English',
  'Dutch',
  'French',
  'German',
  'Frontend Development',
  'Backend Development',
  'QA / Software Testing'
];

export const PopularSubjects = () => {
  return (
    <section className="relative section-spacing overflow-hidden">
      <div className="absolute inset-0 z-0 px-[32px]">
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative z-10 container mx-auto px-[24px]">
        <div className="grid grid-cols-2 gap-[64px] items-start max-w-7xl mx-auto">
          <div className="flex flex-col gap-[311px]">
            <p className="text-white/70 text-base w-[270px] h-[108px] leading-relaxed">
              On our platform, you can learn a wide range of foreign languages and programming subjects — all in one place.
            </p>
            
            <h2 className="text-[74px] font-bold">
              <span className="text-gradient">
                Popular subjects & Languages
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-[16px]">
            {subjects.map((subject, index) => (
              <SubjectCard key={index} title={subject} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
