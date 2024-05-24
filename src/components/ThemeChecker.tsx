import { useContext } from "react";
import { PlaceThemeContext } from "../interfaces/theme";

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
    <input
      type="checkbox"
      checked={themeType === "dark"}
      onChange={handleThemeChange}
    />
  );
};

export default ThemeChecker;
