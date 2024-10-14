import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";

const Contact = () => {
  return (
    <div id="contacto" className="w-full mx-auto py-20 bg-gray-100 text-black">
      <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4">
        <div className="h-full flex flex-col justify-start items-center gap-2">
          <p className="font-semibold text-lg">
            Jorge Newbery 5536, Chacras de Coria
          </p>
          <p className="font-semibold text-lg">2612447225</p>
          <p className="font-semibold text-lg">infolt@gmail.com</p>
          <a href="#" aria-label="LinkedIn">
            <img src={Linkedin} alt="Misión" width={45} height={45} />
          </a>
          <a href="#" aria-label="Facebook">
            <img src={Facebook} alt="Misión" width={45} height={45} />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={Instagram} alt="Misión" width={45} height={45} />
          </a>
        </div>
        <iframe
          className="rounded-lg sm:w-[550px] sm:h-[400px] w-80 h-60"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4157.217631984511!2d-68.8871618235809!3d-32.985555273577106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0a9282e0c145%3A0x1e17d0365f0b684a!2sJorge%20Newbery%205536%2C%20M5505%20Luj%C3%A1n%20de%20Cuyo%2C%20Mendoza!5e1!3m2!1ses-419!2sar!4v1728799730539!5m2!1ses-419!2sar"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
