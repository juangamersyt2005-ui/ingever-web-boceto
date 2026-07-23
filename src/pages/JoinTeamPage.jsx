import { useState } from "react";
import { Link } from "react-router-dom";
import { submitNetlifyForm } from "../utils/netlifyForms";

function JoinTeamPage() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    setEnviando(true);
    setError("");

    try {
      await submitNetlifyForm(form);
      form.reset();
      setEnviado(true);
    } catch {
      setError(
        "No pudimos enviar tu postulación. Inténtalo de nuevo en unos momentos.",
      );
    } finally {
      setEnviando(false);
    }
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

              <h1 className="text-5xl font-bold">Únete a nuestro equipo</h1>

              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#F5C518]" />

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
                En Ingever Asociados S.A.S. buscamos personas apasionadas por la
                ingeniería, el mantenimiento industrial y el trabajo en equipo.
                Si deseas formar parte de nuestra empresa, completa el siguiente
                formulario y adjunta tu hoja de vida.
              </p>
            </div>

            <form
              name="postulacion-laboral"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="mt-14 space-y-8"
            >
              <input
                type="hidden"
                name="form-name"
                value="postulacion-laboral"
              />

              <p className="sr-only" aria-hidden="true">
                <label htmlFor="postulacion-bot-field">
                  No completes este campo
                  <input
                    id="postulacion-bot-field"
                    name="bot-field"
                    type="text"
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </label>
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="postulante-nombre" className="mb-2 block font-medium">
                    Nombre completo
                  </label>
                  <input
                    id="postulante-nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Ingresa tu nombre"
                    autoComplete="name"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-4 focus:ring-[#F5C518]/20"
                  />
                </div>

                <div>
                  <label htmlFor="cargo" className="mb-2 block font-medium">
                    Cargo al que aspiras
                  </label>
                  <input
                    id="cargo"
                    name="cargo"
                    type="text"
                    placeholder="Ej. Soldador Industrial"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-4 focus:ring-[#F5C518]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="postulante-correo" className="mb-2 block font-medium">
                    Correo electrónico
                  </label>
                  <input
                    id="postulante-correo"
                    name="correo"
                    type="email"
                    required
                    placeholder="correo@ejemplo.com"
                    autoComplete="email"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-4 focus:ring-[#F5C518]/20"
                  />
                </div>

                <div>
                  <label htmlFor="postulante-telefono" className="mb-2 block font-medium">
                    Teléfono
                  </label>
                  <input
                    id="postulante-telefono"
                    name="telefono"
                    type="tel"
                    required
                    placeholder="+57 300 000 0000"
                    autoComplete="tel"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-4 focus:ring-[#F5C518]/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="area" className="mb-2 block font-medium">
                  Área de interés
                </label>
                <select
                  id="area"
                  name="area"
                  defaultValue=""
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-4 focus:ring-[#F5C518]/20"
                >
                  <option value="">Selecciona un área</option>
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
                <label htmlFor="presentacion" className="mb-2 block font-medium">
                  Cuéntanos sobre ti
                </label>
                <textarea
                  id="presentacion"
                  name="presentacion"
                  rows={6}
                  placeholder="Háblanos de tu experiencia, habilidades y certificaciones."
                  className="w-full resize-none rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-4 focus:ring-[#F5C518]/20"
                />
              </div>

              <div>
                <label htmlFor="hoja-de-vida" className="mb-2 block font-medium">
                  Adjuntar hoja de vida (PDF)
                </label>
                <input
                  id="hoja-de-vida"
                  name="hoja-de-vida"
                  type="file"
                  accept=".pdf,application/pdf"
                  className="w-full rounded-xl border border-dashed border-gray-300 px-5 py-4 file:mr-4 file:rounded-lg file:border-0 file:bg-[#F5C518] file:px-4 file:py-2 hover:border-[#F5C518]"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700"
                >
                  {error}
                </p>
              )}

              <div className="flex justify-end gap-4">
                <Link
                  to="/"
                  className="rounded-xl border border-gray-300 px-8 py-4 font-semibold transition hover:bg-gray-100"
                >
                  Cancelar
                </Link>

                <button
                  type="submit"
                  disabled={enviando}
                  className="rounded-xl bg-[#F5C518] px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {enviando ? "Enviando postulación..." : "Enviar hoja de vida"}
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
              Gracias por postularte a Ingever Asociados S.A.S. Nuestro equipo
              revisará tu perfil y, si cumple con los requisitos, se pondrá en
              contacto contigo.
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
