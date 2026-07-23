import { useState } from "react";
import Button from "../components/ui/Button";
import { submitNetlifyForm } from "../utils/netlifyForms";

const fieldClassName =
  "w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20 sm:px-5 sm:py-4 sm:text-base";

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
    <main className="min-h-screen bg-[#F8F9FA] px-4 py-24 sm:px-6 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-5 shadow-xl sm:rounded-3xl sm:p-8 lg:p-10">
        <h1 className="text-center text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Solicitar cotización
        </h1>

        <p className="mx-auto mt-5 max-w-2xl rounded-xl bg-[#F5F7FA] px-4 py-3 text-center text-sm leading-6 text-gray-600 sm:mt-6 sm:px-6 sm:py-4 sm:text-base sm:leading-7">
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
            className="mt-8 space-y-6 sm:mt-12 sm:space-y-8"
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

            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="mb-2 block text-sm font-medium sm:text-base">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  autoComplete="name"
                  className={fieldClassName}
                  required
                />
              </div>

              <div>
                <label htmlFor="empresa" className="mb-2 block text-sm font-medium sm:text-base">
                  Empresa
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Nombre de la empresa"
                  autoComplete="organization"
                  className={fieldClassName}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="correo" className="mb-2 block text-sm font-medium sm:text-base">
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="correo@empresa.com"
                  autoComplete="email"
                  className={fieldClassName}
                  required
                />
              </div>

              <div>
                <label htmlFor="telefono" className="mb-2 block text-sm font-medium sm:text-base">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="+57 300 000 0000"
                  autoComplete="tel"
                  className={fieldClassName}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="servicio" className="mb-2 block text-sm font-medium sm:text-base">
                Tipo de servicio
              </label>
              <select
                id="servicio"
                name="servicio"
                defaultValue=""
                className={fieldClassName}
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
              <label htmlFor="descripcion" className="mb-2 block text-sm font-medium sm:text-base">
                Descripción del proyecto
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                rows={5}
                placeholder="Cuéntanos sobre tu proyecto..."
                className={`${fieldClassName} resize-y`}
              />
            </div>

            <div>
              <label htmlFor="archivo" className="mb-2 block text-sm font-medium sm:text-base">
                Adjuntar archivo (opcional)
              </label>
              <input
                id="archivo"
                name="archivo"
                type="file"
                className={`${fieldClassName} cursor-pointer border-dashed file:mr-3 file:rounded-lg file:border-0 file:bg-[#F5C518] file:px-3 file:py-2 file:text-xs file:font-semibold file:text-black sm:file:mr-4 sm:file:px-4 sm:file:text-sm`}
              />
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 sm:px-5 sm:py-4 sm:text-base"
              >
                {error}
              </p>
            )}

            <div className="flex flex-col sm:items-end">
              <Button
                type="submit"
                size="lg"
                loading={enviando}
                loadingLabel="Enviando solicitud..."
                className="w-full sm:w-auto"
              >
                Enviar solicitud
              </Button>
            </div>
          </form>
        ) : (
          <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 text-center sm:mt-12 sm:rounded-3xl sm:p-10 lg:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white sm:h-20 sm:w-20 sm:text-4xl">
              ✓
            </div>

            <h2 className="mt-6 text-3xl font-bold text-green-700 sm:mt-8 sm:text-4xl">
              ¡Solicitud enviada!
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Gracias por confiar en Ingever Asociados S.A.S. Hemos recibido tu
              solicitud y uno de nuestros asesores se pondrá en contacto contigo
              en el menor tiempo posible.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Button
                variant="outline"
                onClick={() => setEnviado(false)}
                className="w-full sm:w-auto"
              >
                Enviar otra solicitud
              </Button>

              <Button to="/" variant="dark" className="w-full sm:w-auto">
                Volver al inicio
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default ContactPage;
