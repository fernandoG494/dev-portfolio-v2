import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import "../styles/components/SideMenu.scss";

import MailIcon from "@mui/icons-material/Mail";
import { useContext } from "react";
import { PlaceThemeContext } from "../interfaces/theme";

const SideMenu = () => {
  const { themeType } = useContext(PlaceThemeContext);

  return (
    <div className={`SideMenu-container ${themeType}`}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideMenu;
