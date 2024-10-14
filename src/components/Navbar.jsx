import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <header className="hidden md:block w-full top-0 z-10 border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="h-28 flex justify-between items-center mx-10">
        <a href="/">
          <img
            src={Logo}
            alt="Liguori Tomba Asociados Logo"
            className="h-24"
          />
        </a>
        <nav className="flex gap-4">
          <a href="#inicio" className="text-sm font-medium p-3 bg-slate-100 rounded-md text-black">
            Inicio
          </a>
          <a href="#nosotros" className="text-sm font-medium p-3 bg-slate-100 rounded-md text-black">
            Nosotros
          </a>
          <a href="#servicios" className="text-sm font-medium p-3 bg-slate-100 rounded-md text-black">
            Servicios
          </a>
          <a href="#contacto" className="text-sm font-medium p-3 bg-slate-100 rounded-md text-black">
            Contáctanos
          </a>
        </nav>
        
      </div>
    </header>
  );
};

export default Navbar;
