import { createContext } from "react";

export interface IPlaceThemeProvider {
  themeType: string;
  setNewTheme: (theme: string) => void;
}

export const PlaceThemeContext = createContext<IPlaceThemeProvider>(
  {} as IPlaceThemeProvider
);
