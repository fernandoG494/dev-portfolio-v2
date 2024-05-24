import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";

const SideMenu = () => {
  return (
    <div>
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
