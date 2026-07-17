import heroImage from "../assets/images/hero.png";

function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen overflow-hidden"
    >
      {/* Imagen de fondo */}

      <img
        src={heroImage}
        alt="Proyecto Ingever"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay oscuro */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>

      {/* Contenido */}

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-20">

        <div className="max-w-2xl">

          <p className="uppercase tracking-[8px] text-yellow-400 font-semibold mb-6">
            Ingeniería Industrial
          </p>

          <h1 className="text-7xl font-extrabold text-white animate-[fadeIn_1s_ease]">
            Especialistas en
            <span className="block text-yellow-400">
              Puentes Grúa
            </span>

          </h1>

          <p className="text-gray-200 text-xl mt-8 leading-9 max-w-2xl">

            Soluciones integrales para montaje,
            mantenimiento, modernización e
            ingeniería de sistemas de izaje industrial.

          </p>

          <button className="mt-12 bg-yellow-400 hover:bg-yellow-300 transition duration-300 text-black font-bold px-8 py-4 rounded-xl">

            Solicitar cotización

          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;