import heroImage from "../assets/images/hero.png";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[620px] items-center overflow-hidden py-28 sm:min-h-[680px] sm:py-32 lg:min-h-[720px]"
    >
      <img
        src={heroImage}
        alt="Puente grúa industrial instalado por Ingever"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />

      <Container className="relative z-10">
        <div className="max-w-2xl pt-10 sm:pt-12">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#F5C518] sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
            Ingeniería industrial
          </p>

          <h1 className="animate-[fadeIn_0.8s_ease-out] text-4xl font-extrabold leading-[1.04] text-white sm:text-5xl lg:text-7xl">
            Especialistas en
            <span className="mt-1 block text-[#F5C518] sm:mt-2">Puentes Grúa</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-200 sm:mt-8 sm:text-lg lg:text-xl">
            Soluciones integrales para montaje, mantenimiento, modernización e
            ingeniería de sistemas de izaje industrial.
          </p>

          <Button to="/contacto" size="lg" className="mt-8 sm:mt-10">
            Solicitar cotización
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
