export interface IMenu {
  text: string;
  icon: string;
  routerLink?: string;
  children: IMenuItem[];
}
export interface IMenuItem {
  text: string;
  icon: string;
  routerLink: string;
  children: IMenuItemChildren[];
}

export interface IMenuItemChildren {
  text: string;
  icon: string;
  routerLink: string;
  
}
