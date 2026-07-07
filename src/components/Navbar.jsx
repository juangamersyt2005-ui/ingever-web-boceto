import { useEffect, useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Logo />

        <ul
          className={`flex items-center gap-8 font-medium transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <li>
            <a href="#inicio" className="hover:text-yellow-400">
              Inicio
            </a>
          </li>

          <li>
            <a href="#nosotros" className="hover:text-yellow-400">
              Nosotros
            </a>
          </li>

          <li>
            <a href="#servicios" className="hover:text-yellow-400">
              Servicios
            </a>
          </li>

          <li>
            <a href="#proyectos" className="hover:text-yellow-400">
              Proyectos
            </a>
          </li>

          <li>
            <a href="#contacto" className="hover:text-yellow-400">
              Contacto
            </a>
          </li>
        </ul>

        <button className="bg-yellow-400 text-black font-semibold px-7 py-3 rounded-lg hover:bg-yellow-300 transition duration-300">
          Solicitar cotización
        </button>

      </nav>
    </header>
  );
}

export default Navbar;