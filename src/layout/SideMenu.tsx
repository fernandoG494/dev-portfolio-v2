import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext } from "react";

import { ISection } from "../interfaces/data";
import { Sections } from "../data/section-data";
import IconSelector from "../components/IconSelector";
import { PlaceThemeContext } from "../interfaces/theme";

import "../styles/components/SideMenu.scss";

const SideMenu = () => {
  const { themeType } = useContext(PlaceThemeContext);

  return (
    <div className={`SideMenu-container ${themeType}`}>
      <div className="SideMenu-title">
        <Typography variant="h6">Developer</Typography>
      </div>
      <List>
        {Sections.map(({ title }: ISection) => (
          <ListItem key={title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <IconSelector title={title} />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideMenu;
