export interface MenuPages {
  linkName: string;
  linkDesc: string;
  linkColour: string;
  marginLeftValue: number;
  path: string;
}

export interface Skills {
  skillName: string;
  skill2Name: string;
  skillColour: string;
}

export interface Project {
  projectName: string;
  projectParagraphs: string[];
  projectImages: string[];
}

export interface Work {
  companyName: string;
  projects: Project[];
}

export interface Experience {
  experienceLogo: string;
  imageWidth: number;
  experienceDesc: string;
  experienceYear: string;
  experienceColour: string;
}

export interface HomeState {
  menuPages: MenuPages[] | null;
  skills: Skills[][] | null;
  experience: Experience[] | null;
  work: Work[] | null;
}
