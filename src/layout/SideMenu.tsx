import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useContext } from "react";
import MailIcon from "@mui/icons-material/Mail";

import { PlaceThemeContext } from "../interfaces/theme";

import "../styles/components/SideMenu.scss";

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
