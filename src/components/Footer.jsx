const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <nav className="hidden sm:block">
            <a
              href="#inicio"
              className="text-sm font-medium p-3 bg-slate-100 rounded-md text-black mx-2"
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="text-sm font-medium p-3 bg-slate-100 rounded-md text-black mx-2"
            >
              Nosotros
            </a>
            <a
              href="#servicios"
              className="text-sm font-medium p-3 bg-slate-100 rounded-md text-black mx-2"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium p-3 bg-slate-100 rounded-md text-black mx-2"
            >
              Contáctanos
            </a>
          </nav>
          <div className="text-sm">
            <a href="/" className="hover:underline">
              Política de Privacidad y Confidencialidad
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>Gracias por visitar nuestro sitio</p>
          <p>
            &copy; {new Date().getFullYear()} Liguori Tomba Asociados. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
