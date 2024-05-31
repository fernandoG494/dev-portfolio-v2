import ProjectCard from "../components/ProjectCard";
import { Backs } from "../data/projects-data";
import { IProject } from "../interfaces/data";

import "../styles/pages/BackEndProjects.scss";

const BackEndProjects = () => {
  const backs = Backs;

  return (
    <div className="BackEnds-container">
      {backs.map(({ title, description, technologies }: IProject) => (
        <ProjectCard
          url="/back-projects/auth-users"
          key={title}
          description={description}
          technologies={technologies}
          title={title}
        />
      ))}
    </div>
  );
};

export default BackEndProjects;
