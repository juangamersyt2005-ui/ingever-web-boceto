import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { company } from "../data/company";

const companyStats = [
  { value: company.experience, label: "Años de experiencia" },
  { value: company.coverage, label: "Cobertura nacional" },
  { value: company.certification, label: "Enfoque de calidad" },
];

function About() {
  return (
    <section id="conocenos" className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <SectionTitle
              subtitle="Conócenos"
              title="Ingeniería que impulsa la industria"
              align="left"
            />

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              En Ingever Asociados desarrollamos soluciones para el montaje,
              mantenimiento, modernización y fabricación de puentes grúa.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Combinamos experiencia técnica, trabajo seguro y atención cercana
              para que cada operación industrial gane eficiencia y confiabilidad.
            </p>

            <Button href="#servicios" variant="outline" className="mt-8">
              Explorar servicios
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {companyStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#F5C518]/25 bg-[#F8F9FA] p-5 text-center sm:p-6 lg:text-left"
              >
                <p className="text-3xl font-extrabold text-[#D6A900] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1A1A1A] sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
