import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { ISection } from "../interfaces/data";
import { Sections } from "../data/section-data";
import { ISideMenu } from "../interfaces/layout";
import IconSelector from "../components/IconSelector";
import { PlaceThemeContext } from "../interfaces/theme";

import "../styles/components/SideMenu.scss";

const SideMenu = ({ handleDrawerClose }: ISideMenu) => {
  const { themeType } = useContext(PlaceThemeContext);

  return (
    <div className={`SideMenu-container ${themeType}`}>
      <div className="SideMenu-title">
        <Typography variant="h6">Developer</Typography>
      </div>
      <List>
        {Sections.map(({ title, route }: ISection) => (
          <Link
            to={route!}
            className={`Link-wrapper ${themeType}`}
            onClick={() => {
              if (handleDrawerClose) handleDrawerClose();
            }}
          >
            <ListItem key={title} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <IconSelector title={title} />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default SideMenu;
