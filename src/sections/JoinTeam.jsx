import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

function JoinTeam() {
  return (
    <section className="bg-[#1A1A1A] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-[#F5C518]/20 bg-[#222222] p-6 shadow-2xl sm:p-10 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 text-4xl sm:mb-8 sm:text-5xl">👷</div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Únete a nuestro equipo
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8">
              En Ingever Asociados S.A.S. creemos que nuestro mayor activo son
              las personas. Si buscas crecer profesionalmente y formar parte de
              proyectos de ingeniería, mantenimiento y soluciones industriales,
              queremos conocerte.
            </p>

            <Button to="/trabaja-con-nosotros" size="lg" className="mt-8 sm:mt-10">
              Enviar hoja de vida
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default JoinTeam;
