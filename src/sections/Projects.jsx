import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/cards/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-white">
      <Container>
        <SectionTitle
          subtitle="Proyectos"
          title="Algunos de nuestros trabajos"
        />

        <p className="mt-6 max-w-3xl mx-auto text-center text-gray-600">
          Estos son algunos de los proyectos que reflejan nuestra experienDXcia en
          montaje, mantenimiento y modernización de puentes grúa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              location={project.location}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;