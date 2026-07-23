import { useState } from "react";
import { submitNetlifyForm } from "../utils/netlifyForms";

function ContactPage() {
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
        "No pudimos enviar tu solicitud. Inténtalo de nuevo en unos momentos.",
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] py-32">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl">
        <h1 className="text-center text-5xl font-bold">Solicitar cotización</h1>

        <p className="mx-auto mt-6 max-w-2xl rounded-xl bg-[#F5F7FA] px-6 py-4 text-center text-gray-600">
          Completa el siguiente formulario y uno de nuestros asesores se pondrá
          en contacto contigo lo antes posible.
        </p>

        {!enviado ? (
          <form
            name="cotizacion"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            className="mt-12 space-y-8"
          >
            <input type="hidden" name="form-name" value="cotizacion" />

            <p className="sr-only" aria-hidden="true">
              <label htmlFor="cotizacion-bot-field">
                No completes este campo
                <input
                  id="cotizacion-bot-field"
                  name="bot-field"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                />
              </label>
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="mb-2 block font-medium">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  autoComplete="name"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20"
                  required
                />
              </div>

              <div>
                <label htmlFor="empresa" className="mb-2 block font-medium">
                  Empresa
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Nombre de la empresa"
                  autoComplete="organization"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="correo" className="mb-2 block font-medium">
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="correo@empresa.com"
                  autoComplete="email"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20"
                  required
                />
              </div>

              <div>
                <label htmlFor="telefono" className="mb-2 block font-medium">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="+57 300 000 0000"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="servicio" className="mb-2 block font-medium">
                Tipo de servicio
              </label>
              <select
                id="servicio"
                name="servicio"
                defaultValue=""
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20"
              >
                <option value="">Selecciona un servicio</option>
                <option>Puentes grúa</option>
                <option>Polipastos</option>
                <option>Mantenimiento</option>
                <option>Modernización</option>
                <option>Instalación</option>
                <option>Inspección</option>
                <option>Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="descripcion" className="mb-2 block font-medium">
                Descripción del proyecto
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                rows={6}
                placeholder="Cuéntanos sobre tu proyecto..."
                className="w-full resize-none rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20"
              />
            </div>

            <div>
              <label htmlFor="archivo" className="mb-2 block font-medium">
                Adjuntar archivo (opcional)
              </label>
              <input
                id="archivo"
                name="archivo"
                type="file"
                className="w-full rounded-xl border border-dashed border-gray-300 px-5 py-4 transition-all duration-300 file:mr-4 file:rounded-lg file:border-0 file:bg-[#F5C518] file:px-4 file:py-2 file:font-medium file:text-black hover:border-[#F5C518]"
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

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={enviando}
                className="rounded-xl bg-[#F5C518] px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#e4b400] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:scale-100"
              >
                {enviando ? "Enviando solicitud..." : "Enviar solicitud"}
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-12 rounded-3xl border border-green-200 bg-green-50 p-12 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-500 text-5xl text-white">
              ✓
            </div>

            <h2 className="mt-8 text-4xl font-bold text-green-700">
              ¡Solicitud enviada!
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
              Gracias por confiar en Ingever Asociados S.A.S. Hemos recibido tu
              solicitud y uno de nuestros asesores se pondrá en contacto contigo
              en el menor tiempo posible.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setEnviado(false)}
                className="rounded-xl border border-[#F5C518] px-7 py-3 font-semibold transition-all duration-300 hover:bg-[#F5C518]"
              >
                Enviar otra solicitud
              </button>

              <a
                href="/"
                className="rounded-xl bg-[#1A1A1A] px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-black"
              >
                Volver al inicio
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default ContactPage;
