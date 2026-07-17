import Container from "../components/ui/Container";
import { company } from "../data/company";
import Logo from "../components/Logo";

function Footer() {
  return (
    <footer id="contacto" className="bg-[#1A1A1A] text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <Logo />

            <p className="mt-6 text-gray-400 leading-7">
              {company.slogan}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">
              Contacto
            </h3>

            <p className="text-gray-400">
              {company.address}
            </p>

            <p className="mt-3 text-gray-400">
              {company.email}
            </p>

            <p className="mt-3 text-gray-400">
              {company.phones[0]}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">
              Empresa
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Inicio</li>
              <li>Nosotros</li>
              <li>Servicios</li>
              <li>Proyectos</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Ingever Asociados S.A.S. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;