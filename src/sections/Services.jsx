import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import ServiceCard from "../components/cards/ServiceCard";
import { services } from "../data/services";

function Services() {
  return (
    <section id="servicios" className="py-28 bg-gray-50">
      <Container>
        <SectionTitle
          subtitle="Servicios"
          title="Soluciones para la industria"
        />

        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-6">
          Ofrecemos soluciones integrales para puentes grúa, desde su instalación
          hasta su modernización, garantizando seguridad, eficiencia y
          confiabilidad en cada proyecto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;