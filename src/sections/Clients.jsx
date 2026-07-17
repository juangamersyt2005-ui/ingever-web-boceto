import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import ClientLogoCard from "../components/cards/ClientLogoCard";
import { clients } from "../data/clients";

function Clients() {
    return (
        <section id="clientes" className="py-24 bg-[#F8F9FA]">
            <Container>
                <SectionTitle
                    subtitle="Nuestros clientes"
                    title="Empresas que han confiado en nosotros"
                />

                <p className="mt-6 mx-auto max-w-4xl text-center text-lg leading-8 text-gray-600">
                    A lo largo de nuestra trayectoria hemos trabajado junto a empresas de
                    diferentes sectores, brindando soluciones en montaje, mantenimiento y
                    modernización de puentes grúa.
                </p>

                <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">                    {clients.map((client) => (
                    <ClientLogoCard
                        key={client.id}
                        logo={client.logo}
                        name={client.name}
                    />
                ))}
                </div>
            </Container>
        </section>
    );
}

export default Clients;