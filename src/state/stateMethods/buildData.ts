import {
  Experience,
  MenuPages,
  Skills,
  Work,
  Projects,
  ShowcaseItem,
} from '../home/homeSlice.types';

export const buildPages = (responseData: string) => {
  const data: MenuPages[] = JSON.parse(responseData);
  return data;
};

export const buildSkills = (responseData: string) => {
  const data: Skills[][] = JSON.parse(responseData);
  return data;
};

export const buildExperience = (responseData: string) => {
  const data: Experience[] = JSON.parse(responseData);
  return data;
};

export const buildWork = (responseData: string) => {
  const data: Work[] = JSON.parse(responseData);
  return data;
};

export const buildProjects = (responseData: string) => {
  const data: Projects[] = JSON.parse(responseData);
  return data;
};
export const buildShowcaseItems = (responseData: string) => {
  const data: ShowcaseItem[] = JSON.parse(responseData);
  return data;
};
