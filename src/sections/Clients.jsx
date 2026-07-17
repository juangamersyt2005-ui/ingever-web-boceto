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

        <p className="mt-6 max-w-3xl mx-auto text-center text-gray-600">
          A lo largo de nuestra trayectoria hemos trabajado junto a empresas de
          diferentes sectores, brindando soluciones en montaje, mantenimiento y
          modernización de puentes grúa.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
          {clients.map((client) => (
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