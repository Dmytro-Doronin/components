import clientsImage from '../../../assets/images/foto.png';

export const OurClients = () => {
  return (
    <section className="section-spacing py-16 sm:py-20 lg:py-24 xl:py-20">
      <div className="container-centered mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[74px] font-bold mb-6 sm:mb-8 lg:mb-10 xl:mb-8">
            <span className="text-gradient">
              OUR CLIENTS
            </span>
          </h2>
          
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 lg:mb-12 xl:mb-10">
            Hey choose our platform for high-quality teaching, flexible learning, and professional support. From beginners to advanced learners, our clients see real progress and lasting results.
          </p>
        </div>

        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl">
            <img 
              src={clientsImage} 
              alt="Our Clients" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
