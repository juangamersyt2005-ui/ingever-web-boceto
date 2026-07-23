import FeatureCard from "../components/cards/FeatureCard";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { features } from "../data/features";

function Features() {
  return (
    <section id="fortalezas" className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          subtitle="¿Por qué elegirnos?"
          title="Comprometidos con la excelencia"
        />

        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
          Nuestra experiencia, compromiso y enfoque en la seguridad nos permiten
          ofrecer soluciones confiables para cada proyecto industrial.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
