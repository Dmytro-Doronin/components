import { ReviewCard } from './ReviewCard';
import { Button } from '../../ui/button/Button';
import avatar1 from '../../../assets/images/Avatar.png';
import avatar2 from '../../../assets/images/Avatar2.png';
import avatar3 from '../../../assets/images/Avatar3.png';
import shapeImage from '../../../assets/images/Shape.png';

const reviews = [
  {
    avatar: avatar1,
    name: 'Cameron Williamson',
    course: 'English',
    review: 'The English classes are engaging and focused on real communication. Students see noticeable improvement in speaking skills and vocabulary in a short time.',
  },
  {
    avatar: avatar2,
    name: 'Esther Howard',
    course: 'Dutch',
    review: 'The Dutch course is beginner-friendly and clearly organized. Lessons help students quickly start understanding and using the language in everyday situations.',
  },
  {
    avatar: avatar3,
    name: 'Jenny Wilson',
    course: 'Frontend Developer',
    review: 'The Frontend Development course is well-structured and easy to follow, even for complex topics. It provided strong practical skills and boosted confidence in real-world projects.',
  },
  {
    avatar: avatar1,
    name: 'Robert Fox',
    course: 'German',
    review: 'The German course offers a great balance of grammar and conversation practice. The structured approach makes learning efficient and enjoyable.',
  },
  {
    avatar: avatar2,
    name: 'Kristin Watson',
    course: 'Backend Development',
    review: 'The Backend Development course covers all essential topics with practical examples. The instructor explains complex concepts in an easy-to-understand way.',
  },
  {
    avatar: avatar3,
    name: 'Darrell Steward',
    course: 'QA / Software Testing',
    review: 'The QA course provides comprehensive knowledge of testing methodologies. Real-world projects help apply learned concepts effectively.',
  }
];

export const Reviews = () => {
  return (
    <section className="section-spacing">
      <div className="container-centered mx-auto px-[24px]">
        <div className="text-center">
          <h2 className="text-[56px] font-bold text-white mb-[24px]">
            What our clients say
          </h2>
          <p className="text-white/70 text-base max-w-3xl mx-auto leading-relaxed mb-[60px]">
            Students appreciate the practical approach, supportive instructors, and clear learning structure across all courses. Many international students highlight fast progress, increased confidence, and a comfortable learning environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="relative">
              <img 
                src={shapeImage} 
                alt="" 
                className="absolute bottom-[-25px] left-[-25px] right-[-25px] w-[393px] h-[110px] object-cover rounded-2xl z-0"
              />
              <div className="relative z-10">
                <ReviewCard {...review} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-[60px]">
          <Button variant="secondary">More</Button>
        </div>
      </div>
    </section>
  );
};
