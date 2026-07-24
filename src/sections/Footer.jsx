import Logo from "../components/Logo";
import Container from "../components/ui/Container";
import { company } from "../data/company";
import { navigation } from "../data/navigation";

function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-12 text-white sm:py-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.8fr] lg:gap-12">
          <div>
            <a href="/#inicio" aria-label="Ir al inicio">
              <Logo className="h-12 sm:h-14" />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400 sm:mt-6 sm:text-base sm:leading-7">
              {company.slogan}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold sm:text-xl">Contacto</h3>
            <address className="mt-4 space-y-3 not-italic text-sm leading-6 text-gray-400 sm:mt-5 sm:text-base sm:leading-7">
              <p>{company.address}</p>
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-[#F5C518]"
                >
                  {company.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                  className="transition-colors hover:text-[#F5C518]"
                >
                  {company.phones[0]}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-bold sm:text-xl">Navegación</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400 sm:mt-5 sm:text-base">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-[#F5C518]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500 sm:mt-14 sm:pt-8 sm:text-sm">
          © {new Date().getFullYear()} Ingever Asociados S.A.S. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
