import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <header className="hidden md:block w-full top-0 z-10 bg-gray-100">
      <div className="h-28 flex justify-between items-center mx-10">
        <a href="/">
          <img
            src={Logo}
            alt="Liguori Tomba Asociados Logo"
            className="h-24"
          />
        </a>
        <nav className="flex gap-4">
          <a href="#inicio" className="text-sm font-medium p-3 hover:bg-slate-900 transition rounded-md text-black hover:text-white">
            Inicio
          </a>
          <a href="#nosotros" className="text-sm font-medium p-3 hover:bg-slate-900 transition rounded-md text-black hover:text-white">
            Nosotros
          </a>
          <a href="#servicios" className="text-sm font-medium p-3 hover:bg-slate-900 transition rounded-md text-black hover:text-white">
            Servicios
          </a>
          <a href="#contacto" className="text-sm font-medium p-3 hover:bg-slate-900 transition rounded-md text-black hover:text-white">
            Contáctanos
          </a>
        </nav>
        
      </div>
    </header>
  );
};

export default Navbar;
