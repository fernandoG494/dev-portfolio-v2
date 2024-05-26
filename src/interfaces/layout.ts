export interface ITitleBar {
  handleDrawerToggle: () => void;
}

export interface ISideMenu {
  handleDrawerClose?: () => void;
}

export interface LayoutState {
  actualPage: string;
}
