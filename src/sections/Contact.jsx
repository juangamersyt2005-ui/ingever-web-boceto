import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import { company } from "../data/company";
import { Link } from "react-router-dom";

function Contact() {
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

    return (
        <section id="contacto" className="bg-white py-24">
            <Container>
                <SectionTitle
                    subtitle="Contáctanos"
                    title="Estamos listos para ayudarte"
                />

                <p className="mx-auto mt-6 max-w-3xl text-center text-gray-600">
                    Si necesitas una cotización, asesoría técnica o información sobre
                    nuestros servicios, estaremos encantados de atenderte.
                </p>

                <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
                    <div className="space-y-6">
                        {contactItems.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="group flex items-start gap-5 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#F5C518] hover:shadow-2xl"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5C518]/15">
                                        <Icon className="text-2xl text-[#F5C518]" />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <p className="mt-2 text-gray-600">{item.value}</p>
                                    </div>
                                </div>
                            );
                        })}

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href={company.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="secondary">Ver ubicación</Button>
                            </a>

                            <Link to="/contacto">
                                <Button>Solicitar cotización</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
                        <iframe
                            src={company.location}
                            width="100%"
                            height="100%"
                            className="min-h-[620px] w-full"
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