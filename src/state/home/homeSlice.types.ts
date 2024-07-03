export interface MenuPages {
  linkName: string;
  linkDesc: string;
  linkColour: string;
  marginLeftValue: number;
}

export interface HomeState {
  menuPages: MenuPages[] | null;
}
