import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navigation } from "../data/navigation";
import Button from "./ui/Button";
import Logo from "./Logo";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const solidHeader = scrolled || menuOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solidHeader
          ? "bg-white/95 py-2 shadow-lg shadow-black/10 backdrop-blur-md"
          : "bg-transparent py-3"
      }`}
    >
      <nav className="relative mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-6 lg:px-8 xl:px-10">
        <a href="#inicio" aria-label="Ir al inicio" onClick={closeMenu}>
          <Logo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul
            className={`flex items-center gap-7 text-sm font-semibold xl:gap-9 ${
              solidHeader ? "text-[#1A1A1A]" : "text-white"
            }`}
          >
            {navigation.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-[#D6A900] focus-visible:text-[#D6A900] focus-visible:outline-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button to="/contacto" size="sm">
            Solicitar cotización
          </Button>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F5C518]/35 lg:hidden ${
            solidHeader
              ? "text-[#1A1A1A] hover:bg-black/5"
              : "text-white hover:bg-white/10"
          }`}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-controls="menu-principal"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-lg" />}
        </button>

        {menuOpen && (
          <div
            id="menu-principal"
            className="absolute left-5 right-5 top-full mt-2 rounded-2xl border border-black/10 bg-white p-4 shadow-2xl shadow-black/15 lg:hidden"
          >
            <ul className="space-y-1">
              {navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-3 font-semibold text-[#1A1A1A] transition-colors hover:bg-[#F5C518]/15"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <Button to="/contacto" className="mt-3 w-full" onClick={closeMenu}>
              Solicitar cotización
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
