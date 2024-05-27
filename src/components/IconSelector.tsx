import { useContext } from "react";
import { useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import StorageIcon from "@mui/icons-material/Storage";
import PhonelinkIcon from "@mui/icons-material/Phonelink";

import { RootState } from "../store";
import { ISection } from "../interfaces/data";
import { PlaceThemeContext } from "../interfaces/theme";

import "../styles/components/IconSelector.scss";

const IconSelector = ({ title }: ISection) => {
  const { themeType } = useContext(PlaceThemeContext);
  const actualPage = useSelector((state: RootState) => state.layout.actualPage);

  const getActiveClass = (page: string) => {
    if (page === "/" || page === "/about-me") {
      return title === "About me" ? "active" : "";
    }
    if (page === "/front-projects") {
      return title === "Front end projects" ? "active" : "";
    }
    if (page === "/back-projects") {
      return title === "Back end projects" ? "active" : "";
    }
    return "";
  };

  const activeClass = getActiveClass(actualPage);

  switch (title) {
    case "About me":
      return (
        <PersonIcon className={`Icon-color ${themeType} ${activeClass}`} />
      );
    case "Front end projects":
      return (
        <PhonelinkIcon className={`Icon-color ${themeType} ${activeClass}`} />
      );
    case "Back end projects":
      return (
        <StorageIcon className={`Icon-color ${themeType} ${activeClass}`} />
      );
  }
};

export default IconSelector;
