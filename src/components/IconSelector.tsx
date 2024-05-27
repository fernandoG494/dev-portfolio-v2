import { useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";
import StorageIcon from "@mui/icons-material/Storage";
import PhonelinkIcon from "@mui/icons-material/Phonelink";

import { ISection } from "../interfaces/data";
import { PlaceThemeContext } from "../interfaces/theme";

import "../styles/components/IconSelector.scss";

const IconSelector = ({ title }: ISection) => {
  const { themeType } = useContext(PlaceThemeContext);

  switch (title) {
    case "About me":
      return <PersonIcon className={`Icon-color ${themeType}`} />;
    case "Front end projects":
      return <PhonelinkIcon className={`Icon-color ${themeType}`} />;
    case "Back end projects":
      return <StorageIcon className={`Icon-color ${themeType}`} />;
  }
};

export default IconSelector;
