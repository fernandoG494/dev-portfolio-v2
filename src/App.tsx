import { useEffect, useReducer } from "react";
import ThemeReducer from "./contexts/Theme/ThemeReducer";
import { IPlaceThemeProvider, PlaceThemeContext } from "./interfaces/theme";
import Router from "./routes/Router";

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

  useEffect(() => {
    const body = document.body;

    if (currentTheme.themeType == "light") {
      body.style.backgroundColor = "#fffefb";
    } else {
      body.style.backgroundColor = "#0f1626";
    }

    return () => {
      body.style.backgroundColor = "";
    };
  }, [currentTheme]);

  return (
    <div>
      <PlaceThemeContext.Provider value={themeContextProviderValue}>
        <Router />
        <input
          type="checkbox"
          checked={currentTheme.themeType === "dark"}
          onChange={handleThemeChange}
        />
      </PlaceThemeContext.Provider>
    </div>
  );
};

export default App;
