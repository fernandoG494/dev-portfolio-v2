import { Stack } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { Fronts } from "../data/projects-data";
import { IProject } from "../interfaces/data";

const FrontEndProjects = () => {
  return (
    <Stack direction="row" spacing={2}>
      {/* {Fronts.map(({ title, description, technologies }: IProject) => {
        return (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            technologies={technologies}
          />
        );
      })} */}
    </Stack>
  );
};

export default FrontEndProjects;
