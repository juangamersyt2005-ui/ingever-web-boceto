import ClientLogoCard from "../components/cards/ClientLogoCard";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { clients } from "../data/clients";

function Clients() {
  return (
    <section id="clientes" className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          subtitle="Nuestros clientes"
          title="Empresas que han confiado en nosotros"
        />

        <p className="mx-auto mt-5 max-w-4xl text-center text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
          A lo largo de nuestra trayectoria hemos trabajado junto a empresas de
          diferentes sectores, brindando soluciones en montaje, mantenimiento y
          modernización de puentes grúa.
        </p>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {clients.map((client) => (
            <ClientLogoCard key={client.id} {...client} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Clients;
