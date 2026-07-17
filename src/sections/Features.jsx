import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import FeatureCard from "../components/cards/FeatureCard";
import { features } from "../data/features";

function Features() {
  return (
    <section id="fortalezas" className="py-24 bg-[#F8F9FA]">
      <Container>
        <SectionTitle
          subtitle="¿Por qué elegirnos?"
          title="Comprometidos con la excelencia"
        />

        <p className="mt-6 max-w-3xl mx-auto text-center text-gray-600">
          Nuestra experiencia, compromiso y enfoque en la seguridad nos permiten
          ofrecer soluciones confiables para cada proyecto industrial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;