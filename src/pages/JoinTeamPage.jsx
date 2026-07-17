import { useState } from "react";
import { Link } from "react-router-dom";

function JoinTeamPage() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F8F9FA] to-[#ECEFF3] py-24">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-12 shadow-2xl">

        {!enviado ? (
          <>
            <div className="text-center">

              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#F5C518]/20">
                <span className="text-5xl">👷</span>
              </div>

              <h1 className="text-5xl font-bold">
                Únete a nuestro equipo
              </h1>

              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#F5C518]" />

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
                En Ingever Asociados S.A.S. buscamos personas apasionadas por la
                ingeniería, el mantenimiento industrial y el trabajo en equipo.
                Si deseas formar parte de nuestra empresa, completa el siguiente
                formulario y adjunta tu hoja de vida.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-14 space-y-8"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-medium">
                    Nombre completo
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Ingresa tu nombre"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 transition-all duration-300 focus:border-[#F5C518] focus:ring-4 focus:ring-[#F5C518]/20 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Cargo al que aspiras
                  </label>

                  <input
                    type="text"
                    placeholder="Ej. Soldador Industrial"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 transition-all duration-300 focus:border-[#F5C518] focus:ring-4 focus:ring-[#F5C518]/20 outline-none"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-medium">
                    Correo electrónico
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="correo@ejemplo.com"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 transition-all duration-300 focus:border-[#F5C518] focus:ring-4 focus:ring-[#F5C518]/20 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Teléfono
                  </label>

                  <input
                    type="tel"
                    required
                    placeholder="+57 300 000 0000"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 transition-all duration-300 focus:border-[#F5C518] focus:ring-4 focus:ring-[#F5C518]/20 outline-none"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Área de interés
                </label>

                <select className="w-full rounded-xl border border-gray-300 px-5 py-4 transition-all duration-300 focus:border-[#F5C518] focus:ring-4 focus:ring-[#F5C518]/20 outline-none">

                  <option>Selecciona un área</option>
                  <option>Ingeniería</option>
                  <option>Operador de Puente Grúa</option>
                  <option>Soldadura Industrial</option>
                  <option>Electricidad Industrial</option>
                  <option>Mantenimiento</option>
                  <option>Montaje Mecánico</option>
                  <option>Administración</option>
                  <option>Aprendiz SENA</option>
                  <option>Prácticas Universitarias</option>

                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Cuéntanos sobre ti
                </label>

                <textarea
                  rows={6}
                  placeholder="Háblanos de tu experiencia, habilidades y certificaciones."
                  className="w-full resize-none rounded-xl border border-gray-300 px-5 py-4 transition-all duration-300 focus:border-[#F5C518] focus:ring-4 focus:ring-[#F5C518]/20 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Adjuntar hoja de vida (PDF)
                </label>

                <input
                  type="file"
                  accept=".pdf"
                  className="w-full rounded-xl border border-dashed border-gray-300 px-5 py-4 file:mr-4 file:rounded-lg file:border-0 file:bg-[#F5C518] file:px-4 file:py-2 hover:border-[#F5C518]"
                />
              </div>

              <div className="flex justify-end gap-4">

                <Link
                  to="/"
                  className="rounded-xl border border-gray-300 px-8 py-4 font-semibold hover:bg-gray-100 transition"
                >
                  Cancelar
                </Link>

                <button
                  type="submit"
                  className="rounded-xl bg-[#F5C518] px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Enviar hoja de vida
                </button>

              </div>

            </form>
          </>
        ) : (
          <div className="py-20 text-center">

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-green-500 text-5xl text-white">
              ✓
            </div>

            <h2 className="mt-8 text-4xl font-bold text-green-700">
              ¡Postulación recibida!
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Gracias por postularte a Ingever Asociados S.A.S.
              Nuestro equipo revisará tu perfil y, si cumple con los requisitos,
              se pondrá en contacto contigo.
            </p>

            <Link
              to="/"
              className="mt-10 inline-flex rounded-xl bg-[#F5C518] px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Volver al inicio
            </Link>

          </div>
        )}
      </div>
    </main>
  );
}

export default JoinTeamPage;