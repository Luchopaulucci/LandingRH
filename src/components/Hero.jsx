import Animation from "../assets/hero-animation.webm";

const Hero = () => {
  return (
    <section id="inicio" className="py-20 bg-gray-100 w-full">
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center text-black">
        <div className="sm:block flex flex-col justify-center items-center text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 mx-2 sm:mx-0">
            Lideramos en Recursos Humanos para el Sector Gastronómico
          </h1>
          <p className="text-lg sm:text-xl mb-6 mx-2 sm:mx-0">
            Brindamos soluciones personalizadas y eficientes para el éxito de tu
            equipo
          </p>
          <button size="lg" className="text-white mx-2 sm:mx-0">
            Solicita una Consulta
          </button>
        </div>
        <div className="">
          <video autoPlay loop muted className="w-64 h-48">
            <source src={Animation} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
