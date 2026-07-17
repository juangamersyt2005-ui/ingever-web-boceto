import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { company } from "../data/company";
function About() {
  return (
    <section
      id="nosotros"
      className="bg-white py-28"
    >
      <Container>

        <SectionTitle
          subtitle="Nuestra experiencia"
          title="Ingeniería que impulsa la industria"
          align="left"
        />

        <p className="text-gray-600 text-lg mt-6 max-w-3xl leading-8">
          En Ingever Asociados desarrollamos soluciones para el montaje,
          mantenimiento, modernización y fabricación de puentes grúa,
          garantizando seguridad, eficiencia y confiabilidad en cada proyecto.
        </p>

        <div className="grid grid-cols-3 gap-12 mt-20">

          <h3 className="text-6xl font-extrabold text-yellow-500">
            {company.experience}
          </h3>

          <div className="text-center">
            <h3 className="text-6xl font-extrabold text-yellow-500">{company.coverage}</h3>
            <p className="mt-4 text-gray-700">Proyectos realizados</p>
          </div>

          <div className="text-center">
            <h3 className="text-6xl font-extrabold text-yellow-500">{company.certification}</h3>
            <p className="mt-4 text-gray-700">Certificación de calidad</p>
          </div>

        </div>

      </Container>
    </section>
  );
}

export default About;