import { MenuPages } from '../home/homeSlice.types';

export const buildPages = (responseData: string) => {
  const data: MenuPages[] = JSON.parse(responseData);
  return data;
};
