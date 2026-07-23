import ProjectCard from "../components/cards/ProjectCard";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="proyectos" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle subtitle="Proyectos" title="Algunos de nuestros trabajos" />

        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
          Estos son algunos de los proyectos que reflejan nuestra experiencia en
          montaje, mantenimiento y modernización de puentes grúa.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
