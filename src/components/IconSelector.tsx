import PersonIcon from "@mui/icons-material/Person";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import StorageIcon from "@mui/icons-material/Storage";

import { ISection } from "../interfaces/data";

const IconSelector = ({ title }: ISection) => {
  switch (title) {
    case "About me":
      return <PersonIcon />;
    case "Front end projects":
      return <PhonelinkIcon />;
    case "Back end projects":
      return <StorageIcon />;
  }
};

export default IconSelector;
