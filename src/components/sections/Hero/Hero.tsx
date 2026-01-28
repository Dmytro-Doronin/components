import heroImage from '../../../assets/images/hero.png';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="learn" 
          className="w-full h-full object-cover scale-110"
        />
      </div>

      <div className="relative z-10 container-centered mx-auto px-[24px] text-center">
        <h1 className="text-7xl font-bold text-white mb-[24px]">
          Need a tutor?
        </h1>
        
        <h2 className="text-7xl font-bold mb-[32px]">
          <span className="text-gradient">
            Choose the best with ByteOn!
          </span>
        </h2>

        <p className="text-white/90 text-xl mb-[80px] max-w-2xl mx-auto">
          Quickly choose, pay, and receive a video call with your tutor!
        </p>
      </div>

      <div className="absolute bottom-12 left-0 right-0 z-10">
        <p className="text-white/70 text-sm text-center px-[24px] tracking-wider uppercase">
          Trusted by thousands of students worldwide who choose us for quality, convenience, and real results.
        </p>
      </div>
    </section>
  );
};
