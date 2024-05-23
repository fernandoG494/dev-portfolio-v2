import { useReducer } from "react";
import ThemeReducer from "./contexts/Theme/ThemeReducer";
import { IPlaceThemeProvider, PlaceThemeContext } from "./interfaces/theme";
import "./styles/global.scss";

const App = () => {
  const [currentTheme, setNewTheme] = useReducer(ThemeReducer, {
    themeType: "light",
  });

  const themeContextProviderValue: IPlaceThemeProvider = {
    themeType: currentTheme.themeType,
    setNewTheme,
  };

  const handleThemeChange = () => {
    setNewTheme(currentTheme.themeType === "light" ? "dark" : "light");
  };

  console.log(currentTheme);

  return (
    <PlaceThemeContext.Provider value={themeContextProviderValue}>
      <input
        type="checkbox"
        checked={currentTheme.themeType === "dark"}
        onChange={handleThemeChange}
      />
    </PlaceThemeContext.Provider>
  );
};

export default App;
