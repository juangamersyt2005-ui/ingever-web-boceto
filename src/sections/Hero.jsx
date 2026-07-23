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
        className="absolute inset-0 h-full w-full animate-[heroDrift_16s_ease-in-out_infinite_alternate] object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/65 sm:bg-gradient-to-r sm:from-black/95 sm:via-black/75 sm:to-black/35" />

      <Container className="relative z-10">
        <div className="max-w-2xl pt-10 sm:pt-12">
          <p className="animate-[fadeUp_0.65s_ease-out_0.1s_both] text-xs font-bold uppercase tracking-[0.22em] text-[#F5C518] sm:text-sm sm:tracking-[0.3em]">
            Ingeniería industrial
          </p>

          <h1 className="mt-5 animate-[fadeUp_0.75s_ease-out_0.2s_both] text-4xl font-extrabold leading-[1.04] text-white sm:mt-6 sm:text-5xl lg:text-7xl">
            Especialistas en
            <span className="mt-1 block text-[#F5C518] sm:mt-2">Puentes Grúa</span>
          </h1>

          <p className="mt-6 max-w-xl animate-[fadeUp_0.75s_ease-out_0.35s_both] text-base leading-relaxed text-gray-200 sm:mt-8 sm:text-lg lg:text-xl">
            Soluciones integrales para montaje, mantenimiento, modernización e
            ingeniería de sistemas de izaje industrial.
          </p>

          <div className="mt-8 flex animate-[fadeUp_0.75s_ease-out_0.5s_both] flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <Button to="/contacto" size="lg" className="w-full sm:w-auto">
              Solicitar cotización
            </Button>
            <Button href="#conocenos" variant="light" size="lg" className="w-full sm:w-auto">
              Conócenos
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
