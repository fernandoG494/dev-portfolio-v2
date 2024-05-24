import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactNode } from "react";
import { ITitleBar } from "../interfaces/layout";
import ThemeChecker from "../components/ThemeChecker";

const drawerWidth = 240;

const TitleBar = ({ handleDrawerToggle }: ITitleBar): ReactNode => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Responsive drawer
        </Typography>
        <div>
          <ThemeChecker />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
