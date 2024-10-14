import Valores from "../assets/diamond.png";
import Vision from "../assets/vision.png";
import Mision from "../assets/target.png";

const MissionVisionValues = () => {
  return (
    <div className="w-full py-20 mx-auto px-4 bg-gray-100 text-black">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Misión, Visión y Valores
      </h2>
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8 text-center">
        <div className="flex flex-col justify-center items-center max-w-md">
          <div className="mb-4">
            <img src={Mision} alt="Misión" width={64} height={64} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Misión</h3>
          <p className="text-md font-medium">
            Proporcionar soluciones de recursos humanos personalizadas y
            eficientes a las empresas gastronómicas, ayudándolas a encontrar y
            retener el talento necesario para su éxito. Nos comprometemos a
            entender las necesidades únicas de cada cliente y a brindar
            servicios de alta calidad que mejoren su productividad y
            competitividad.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-md">
          <div className="mb-4">
            <img src={Vision} alt="Visión" width={64} height={64} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Visión</h3>
          <p className="text-md font-medium">
            Ser la empresa líder en servicios de recursos humanos para el sector
            gastronómico, reconocida por su innovación, calidad y compromiso con
            la excelencia. Queremos ser el socio preferido de las empresas
            gastronómicas que buscan aprovechar al máximo el potencial de sus
            equipos y alcanzar sus objetivos.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-md">
          <div className="mb-4">
            <img src={Valores} alt="Valores" width={64} height={64} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Valores</h3>
          <div className="flex flex-col gap-2 text-center">
            <p className="text-md font-medium">Compromiso con la excelencia</p>
            <p className="text-md font-medium">Innovación y mejora continua</p>
            <p className="text-md font-medium"> Respeto y empatía hacia nuestros clientes y colaboradores</p>
            <p className="text-md font-medium"> Confidencialidad y discreción en nuestros servicios</p>
            <p className="text-md font-medium"> Responsabilidad social y ética en nuestras prácticas comerciales</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionValues;
