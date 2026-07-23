import ServiceCard from "../components/cards/ServiceCard";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { services } from "../data/services";

function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-36 -top-36 h-72 w-72 rounded-full bg-[#F5C518]/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -bottom-36 -left-36 h-72 w-72 rounded-full bg-[#F5C518]/10 blur-3xl sm:h-96 sm:w-96" />

      <Container className="relative z-10">
        <SectionTitle subtitle="Servicios" title="Soluciones para la industria" />

        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
          Ofrecemos soluciones integrales para puentes grúa, desde su instalación
          hasta su modernización, con seguridad, eficiencia y confiabilidad en
          cada proyecto.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;
