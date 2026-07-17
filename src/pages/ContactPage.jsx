import { useState } from "react";

function ContactPage() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] py-32">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl">
        <h1 className="text-center text-5xl font-bold">
          Solicitar cotización
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center bg-[#F5F7FA] px-6 py-4 text-gray-600 rounded-xl">
          Completa el siguiente formulario y uno de nuestros asesores se pondrá
          en contacto contigo lo antes posible.
        </p>

        {!enviado ? (
          <form onSubmit={handleSubmit} className="mt-12 space-y-8">

            {/* Primera fila */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium">
                  Nombre completo
                </label>

                <input
                  type="text"
                  placeholder="Ingresa tu nombre"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Empresa
                </label>

                <input
                  type="text"
                  placeholder="Nombre de la empresa"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20"
                />
              </div>
            </div>

            {/* Segunda fila */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  placeholder="correo@empresa.com"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Teléfono
                </label>

                <input
                  type="tel"
                  placeholder="+57 300 000 0000"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20"
                  required
                />
              </div>
            </div>

            {/* Tipo de servicio */}
            <div>
              <label className="mb-2 block font-medium">
                Tipo de servicio
              </label>

              <select className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20">
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

            {/* Descripción */}
            <div>
              <label className="mb-2 block font-medium">
                Descripción del proyecto
              </label>

              <textarea
                rows={6}
                placeholder="Cuéntanos sobre tu proyecto..."
                className="w-full resize-none rounded-xl border border-gray-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20"
              />
            </div>

            {/* Archivo */}
            <div>
              <label className="mb-2 block font-medium">
                Adjuntar archivo (opcional)
              </label>

              <input
                type="file"
                className="w-full rounded-xl border border-dashed border-gray-300 px-5 py-4 transition-all duration-300 file:mr-4 file:rounded-lg file:border-0 file:bg-[#F5C518] file:px-4 file:py-2 file:font-medium file:text-black hover:border-[#F5C518]"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-xl bg-[#F5C518] px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#e4b400] active:scale-95 hover:shadow-xl"
              >
                Enviar solicitud
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
              Gracias por confiar en Ingever Asociados S.A.S.
              Hemos recibido tu solicitud y uno de nuestros asesores se pondrá
              en contacto contigo en el menor tiempo posible.
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