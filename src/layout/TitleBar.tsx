import { useSelector } from "react-redux";
import { ReactNode, useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";

import { RootState } from "../store";
import { ITitleBar } from "../interfaces/layout";
import ThemeChecker from "../components/ThemeChecker";
import { PlaceThemeContext } from "../interfaces/theme";

import "../styles/components/TitleBar.scss";

const drawerWidth = 240;

const TitleBar = ({ handleDrawerToggle }: ITitleBar): ReactNode => {
  const { themeType } = useContext(PlaceThemeContext);

  const actualTitle = useSelector(
    (state: RootState) => state.layout.actualTitle
  );

  return (
    <AppBar
      className={`Title-container ${themeType}`}
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
        <Stack
          className="ContentTitle-wrapper"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h6" noWrap component="div">
            {actualTitle}
          </Typography>
          <ThemeChecker />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
