import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactNode, useContext } from "react";
import { ITitleBar } from "../interfaces/layout";
import ThemeChecker from "../components/ThemeChecker";
import { PlaceThemeContext } from "../interfaces/theme";

import "../styles/components/TitleBar.scss";

const drawerWidth = 240;

const TitleBar = ({ handleDrawerToggle }: ITitleBar): ReactNode => {
  const { themeType } = useContext(PlaceThemeContext);

  return (
    <AppBar
      // style={{ width: "calc(100% - 250px)" }}
      className={`AppBar-container ${themeType}`}
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
