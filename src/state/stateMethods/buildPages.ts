import { MenuPages, Skills } from '../home/homeSlice.types';

export const buildPages = (responseData: string) => {
  const data: MenuPages[] = JSON.parse(responseData);
  return data;
};

export const buildSkills = (responseData: string) => {
  const data: Skills[][] = JSON.parse(responseData);
  return data;
};
