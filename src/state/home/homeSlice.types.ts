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

export interface Work {
  titleName: string;
  projects: Project[];
}

export interface Experience {
  experienceLogo: string;
  imageWidth: number;
  experienceDesc: string;
  experienceYear: string;
  experienceColour: string;
}

export interface Link {
  name: string;
  image: string;
  link: string;
}

export interface Project {
  projectName: string;
  projectParagraphs: string[];
  projectImages: string[];
  links: Link[];
  details: string[];
}

export interface Projects {
  titleName: string;
  projects: Project[];
}

export interface ShowcaseItem {
  heading: string;
  paragraphOne: string;
  paragraphTwo: string;
  mediaType: 'image' | 'video';
  mediaLink: string;
  mediaTitle: string;
}

export interface HomeState {
  menuPages: MenuPages[] | null;
  skills: Skills[][] | null;
  experience: Experience[] | null;
  work: Work[] | null;
  projects: Projects[] | null;
  sprinterShowcaseItems: ShowcaseItem[] | null;
}
