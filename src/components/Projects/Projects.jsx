import ProjectCard from "./ProjectCard";
import projects from "./ProjectInfo";

function Projects() {
  return (
    <section id="proyectos" className="py-16 px-6 max-w-screen-xl mx-auto">
      <header className="section-header">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">Proyectos</h2>
        <p className="text-lg text-gray-720 mt-2">
          Conoce los proyectos que he desarrollado, cada uno orientado a aplicar los conocimientos adquiridos</p>
      </header>

      <div className="flex flex-col mt-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            navId={project.navId}
            codeLink={project.codeLink}
            demoLink={project.demoLink}
            technologies={project.technologies}
            className={index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
