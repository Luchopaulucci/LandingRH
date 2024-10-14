const Services = () => {
  return (
    <div id="servicios" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Nuestros Servicios
      </h2>
      <div className="flex flex-col items-center text-center gap-6">
        <p className="text-xl font-medium mb-2">
          - Selección y contratación de personal
        </p>
        <p className="text-xl font-medium mb-2">
          - Capacitación y desarrollo de habilidades
        </p>
        <p className="text-xl font-medium mb-2">
          - Gestión de desempeño y evaluación
        </p>
        <p className="text-xl font-medium mb-2">
          - Asesoramiento en recursos humanos
        </p>
        <p className="text-xl font-medium mb-2">
          - Outsourcing de recursos humanos
        </p>
      </div>
      <div className="text-center mt-8">
        <button size="lg" className="text-black bg-white">
          Explora nuestros Servicios
        </button>
      </div>
    </div>
  );
};

export default Services;
