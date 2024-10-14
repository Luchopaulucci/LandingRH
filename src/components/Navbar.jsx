import { useState } from "react";
import Logo from "../assets/logo.png";
import Menu from "../assets/burger-bar.png";

const Navbar = () => {
  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  function haddleSideMenu() {
    setToggleSideMenu((prevState) => !prevState);
  }

  return (
    <header className="w-full top-0 z-10 bg-gray-100">
      <div className="h-28 flex justify-between items-center mx-10">
        <a href="/">
          <img src={Logo} alt="Liguori Tomba Asociados Logo" className="h-24" />
        </a>
        <nav className="hidden sm:block">
          <a
            href="#inicio"
            className="text-sm font-medium p-3 hover:bg-slate-900 transition rounded-md text-black hover:text-white"
          >
            Inicio
          </a>
          <a
            href="#nosotros"
            className="text-sm font-medium p-3 hover:bg-slate-900 transition rounded-md text-black hover:text-white"
          >
            Nosotros
          </a>
          <a
            href="#servicios"
            className="text-sm font-medium p-3 hover:bg-slate-900 transition rounded-md text-black hover:text-white"
          >
            Servicios
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium p-3 hover:bg-slate-900 transition rounded-md text-black hover:text-white"
          >
            Contáctanos
          </a>
        </nav>
        <button onClick={haddleSideMenu} className="bg-inherit block sm:hidden">
            <img src={Menu} alt="menu" className="h-6 w-auto" />
          </button>

        {toggleSideMenu && (
          <div className="absolute right-5 top-24 flex flex-col gap-4 rounded-md border-e bg-gray-200">
            <a
            href="#inicio"
            className="text-sm font-medium p-3 hover:bg-slate-900 transition rounded-md text-black hover:text-white"
          >
            Inicio
          </a>
          <a
            href="#nosotros"
            className="text-sm font-medium p-3 hover:bg-slate-900 transition rounded-md text-black hover:text-white"
          >
            Nosotros
          </a>
          <a
            href="#servicios"
            className="text-sm font-medium p-3 hover:bg-slate-900 transition rounded-md text-black hover:text-white"
          >
            Servicios
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium p-3 hover:bg-slate-900 transition rounded-md text-black hover:text-white"
          >
            Contáctanos
          </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
