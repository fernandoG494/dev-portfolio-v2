import { useContext } from "react";
import { Switch } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { PlaceThemeContext } from "../interfaces/theme";

import "../styles/components/ThemeChecker.scss";

const ThemeChecker = () => {
  const { themeType, setNewTheme } = useContext(PlaceThemeContext);

  const handleThemeChange = () => {
    if (themeType == "light") {
      setNewTheme("dark");
    } else if (themeType == "dark") {
      setNewTheme("light");
    }
  };

  return (
    <span>
      <DarkModeIcon className="DarkMode-icon" />
      <Switch checked={themeType === "dark"} onChange={handleThemeChange} />
    </span>
  );
};

export default ThemeChecker;
