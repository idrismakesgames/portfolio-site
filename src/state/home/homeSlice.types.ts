export interface MenuPages {
  linkName: string;
  linkDesc: string;
  linkColour: string;
  marginLeftValue: number;
}

export interface Skills {
  skillName: string;
  skill2Name: string;
  skillColour: string;
}

export interface HomeState {
  menuPages: MenuPages[] | null;
  skills: Skills[][] | null;
}
