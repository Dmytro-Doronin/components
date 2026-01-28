import clientsImage from '../../../assets/images/foto.png';

export const OurClients = () => {
  return (
    <section className="section-spacing">
      <div className="container-centered mx-auto px-[24px]">
        <div className="text-center">
          <h2 className="text-[74px] font-bold mb-[20px]">
            <span className="text-gradient">
              OUR CLIENTS
            </span>
          </h2>
          
          <p className="text-white/70 text-base max-w-3xl mx-auto leading-relaxed mb-[30px]">
            Hey choose our platform for high-quality teaching, flexible learning, and professional support. From beginners to advanced learners, our clients see real progress and lasting results.
          </p>
        </div>

        <div>
          <img 
            src={clientsImage} 
            alt="Our Clients" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
