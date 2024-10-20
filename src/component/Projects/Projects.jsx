import "./Projects.css";
import ProjectInfo from "../../data/projects"; // Make sure this path is correct
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaGripfire } from "react-icons/fa6";

function ProjectsInformation({
  projectImage,
  projectSubtitle,
  projectDetails,
  githubUrl,
  liveUrl,
}) {
  return (
    <div className="project-cards">
      <img src={projectImage} alt={projectSubtitle} />
      <h3 className="project-subtitle">{projectSubtitle}</h3>
      <p className="project-details">{projectDetails}</p>
      <div className="project-links">
        <Link to={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </Link>
        <Link to={liveUrl} target="_blank" rel="noopener noreferrer">
          <FaGripfire />
        </Link>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="project-section">
      <h2 className="title">My Projects</h2>
      <div className="project-container">
        {ProjectInfo.map((project, i) => (
          <ProjectsInformation
            key={i}
            projectImage={project.projectImage} // Access properties of the current project
            projectSubtitle={project.projectSubtitle}
            projectDetails={project.projectDetails}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
