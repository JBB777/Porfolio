import './Projects.scss';
import projects from '../../datas/projects.json';
import Card from '../../components/Card/Card';

function Projects() {
  return (
    <div id="projects" className="projects">
      <h2 className="projects__title">Mes projets</h2>
      <div className="projects__gallery">
        {projects.map((project) => {
          return (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              repo={project.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
