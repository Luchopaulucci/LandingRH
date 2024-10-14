import TeamLogo from "../assets/teamwork.png"

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-20 h-screen">
      <div className="w-full h-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Quiénes Somos</h2>
        <div className="flex flex-col md:flex-row justify-evenly items-center h-full">
          <div className="max-w-lg mb-6">
            <p className="text-lg sm:text-xl font-medium mb-4 mx-2 lg:mx-0">
              En Liguori Tomba Asociados, somos una empresa líder en recursos
              humanos para el sector gastronómico.Nuestro equipo de expertos
              tiene una amplia experiencia en el sector gastronómico y se
              compromete a brindar soluciones personalizadas y eficientes a
              nuestras empresas clientes.
            </p>
            <p className="text-lg sm:text-xl font-medium mb-4 mx-2 lg:mx-0">
              Fundada por Luciana Liguori y German Tomba, nuestra empresa nació
              de la pasión por el desarrollo del talento en la industria
              gastronómica.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={TeamLogo}
              alt="Fundadores"
              className="rounded-lg w-48 h-auto sm:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
