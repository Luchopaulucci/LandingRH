import Pizzeria from "../assets/pizza.png";
import Cafe from "../assets/cafe.png";
import BurguerCafe from "../assets/food.png";
import Panaderia from "../assets/bread.png";
import Fideos from "../assets/spaghetti.png";

const Clients = () => {
  return (
    <div className="w-full mx-auto py-20 bg-gray-100 text-black">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Nuestras Afiliaciones
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-12">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={Pizzeria} alt="Misión" width={64} height={64} />
          <p className="text-xl font-medium mb-2">Pizzeria Popular</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={Cafe} alt="Misión" width={64} height={64} />
          <p className="text-xl font-medium mb-2">Mucho Cafe</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={BurguerCafe} alt="Misión" width={64} height={64} />
          <p className="text-xl font-medium mb-2">Burguer, bar & café</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={Panaderia} alt="Misión" width={64} height={64} />
          <p className="text-xl font-medium mb-2">Dolce Panna</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={Fideos} alt="Misión" width={64} height={64} />
          <p className="text-xl font-medium mb-2">Angelini</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
