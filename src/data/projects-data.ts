import { IProject } from "../interfaces/data";

export const Fronts: IProject[] = [
  {
    description: "Project description 1",
    technologies: [{ name: "Javascript" }],
    title: "Project 1",
  },
  {
    description: "Project description 2",
    technologies: [{ name: "Javascript" }],
    title: "Project 2",
  },
];

export const Backs: IProject[] = [
  {
    description: "Simple user authentication app",
    technologies: [
      { name: "NestJS", background: "#EE4540", color: "#FFFFFF" },
      { name: "Typescript", background: "#0055FF", color: "#FFFFFF" },
    ],
    title: "auth-users",
    version: "1.0",
  },
];
