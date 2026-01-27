import { FeatureCard } from './FeatureCard';
import icon1 from '../../../assets/home-section1-icon.svg';
import icon2 from '../../../assets/home-section1-icon2.svg';
import icon3 from '../../../assets/home-section1-icon3.svg';

const features = [
  {
    icon: icon1,
    title: 'Trusted tutors',
    description: 'All tutors are carefully selected and verified to ensure high teaching quality and a safe learning experience.'
  },
  {
    icon: icon2,
    title: 'Simple process',
    description: 'Find a tutor, book a session, and start learning in just a few clicks – no complicated steps or confusion.'
  },
  {
    icon: icon3,
    title: 'Real results',
    description: 'Students see progress faster thanks to focused sessions and tutors who know how to explain things clearly.'
  }
];

export const Features = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-[26px]">
        <div className="text-center mb-[64px]">
          <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-[16px]">
            For Students
          </p>
          <h2 className="text-5xl font-bold text-white mb-[20px]">
            Why students choose our tutors
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Unleash innovation and accelerate growth with our dynamic product.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[30px] max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
