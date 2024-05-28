export interface ISection {
  route?: string;
  title: string;
}

export interface ITechs {
  color?: string;
  name: string;
}

export interface IProject {
  description: string;
  difficulty?: string;
  technologies: ITechs[];
  title: string;
  url?: string;
}
