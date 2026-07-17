import { Link } from "react-router-dom";

function JoinTeam() {
  return (
    <section className="bg-[#1A1A1A] py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="overflow-hidden rounded-3xl border border-[#F5C518]/20 bg-[#222222] p-12 shadow-2xl">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-8 text-6xl">
              👷
            </div>

            <h2 className="text-4xl font-bold text-white">
              Únete a nuestro equipo
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              En Ingever Asociados S.A.S. creemos que nuestro mayor activo son
              las personas. Si buscas crecer profesionalmente y formar parte de
              proyectos de ingeniería, mantenimiento y soluciones industriales,
              queremos conocerte.
            </p>

            <div className="mt-10">
              <Link
                to="/trabaja-con-nosotros"
                className="inline-flex rounded-2xl bg-[#F5C518] px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#e4b400] hover:shadow-xl"
              >
                Enviar hoja de vida
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default JoinTeam;