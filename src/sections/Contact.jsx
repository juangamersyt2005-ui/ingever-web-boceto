import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { company } from "../data/company";

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    title: "Dirección",
    value: company.address,
  },
  {
    icon: FaPhoneAlt,
    title: "Teléfono",
    value: company.phones[0],
  },
  {
    icon: FaEnvelope,
    title: "Correo electrónico",
    value: company.email,
  },
];

function Contact() {
  return (
    <section id="contacto" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          subtitle="Contáctanos"
          title="Estamos listos para ayudarte"
        />

        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
          Si necesitas una cotización, asesoría técnica o información sobre
          nuestros servicios, estaremos encantados de atenderte.
        </p>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-8 sm:mt-12 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 sm:space-y-5">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-[#F5C518] hover:shadow-lg sm:gap-5 sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F5C518]/15 sm:h-14 sm:w-14">
                    <Icon className="text-xl text-[#C99E00] sm:text-2xl" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-[#1A1A1A] sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 break-words text-sm leading-6 text-gray-600 sm:mt-2 sm:text-base">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4 sm:pt-4">
              <Button
                href={company.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="w-full sm:w-auto"
              >
                Ver ubicación
              </Button>

              <Button to="/contacto" className="w-full sm:w-auto">
                Cuéntanos tu proyecto
              </Button>
            </div>
          </div>

          <div className="h-80 overflow-hidden rounded-3xl border border-gray-200 shadow-lg sm:h-96 lg:min-h-[520px] lg:h-full">
            <iframe
              src={company.location}
              className="h-full w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ubicación Ingever Asociados"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
