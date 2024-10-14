import Hombre from "../assets/man.png";
import Mujer from "../assets/woman.png";

const Team = () => {
  return (
    <div id="nosotros" className="container mx-auto py-20 ">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Conoce a Nuestro Equipo
      </h2>
      <h5 className="text-lg font-semibold mb-8 text-center">
        Nuestro equipo está compuesto por expertos en recursos humanos y
        consultoría empresarial con amplia experiencia en el sector
        gastronómico.
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <img src={Mujer} alt="Misión" width={64} height={64} />
          <h3 className="text-xl font-semibold"> Luciana Liguori</h3>
          <p className="text-muted-foreground"> Director General</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <img src={Mujer} alt="Misión" width={64} height={64} />
          <h3 className="text-xl font-semibold">Victoria Liguor</h3>
          <p className="text-muted-foreground"> Equipos de Selección</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <img src={Mujer} alt="Misión" width={64} height={64} />
          <h3 className="text-xl font-semibold"> Martina Ferrer</h3>
          <p className="text-muted-foreground"> Equipos de Capacitación</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <img src={Hombre} alt="Misión" width={64} height={64} />
          <h3 className="text-xl font-semibold"> German Tomba</h3>
          <p className="text-muted-foreground"> Gestión de Recursos Humanos</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
