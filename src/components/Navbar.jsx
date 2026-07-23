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

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    

    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled
        ? "bg-white/90 backdrop-blur-md shadow-xl py-1"
        : "bg-transparent py-3"
        }`}
    >
      <nav className="max-w-[1600px] mx-auto flex items-center justify-between px-8 transition-all duration-500">

        <Logo />

        <ul
          className={`flex items-center gap-12 font-medium transition-colors duration-300 ${scrolled ? "text-black" : "text-white"
            }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-[#F5C518]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="bg-yellow-400 text-black font-semibold px-7 py-3 rounded-lg hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all duration-300">
          Solicitar cotización
        </button>

      </nav>
    </header>
  );
}

export default Navbar;
