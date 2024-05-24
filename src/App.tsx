import Router from "./routes/Router";
import { useEffect, useReducer, useState } from "react";
import ThemeReducer from "./contexts/Theme/ThemeReducer";
import { IPlaceThemeProvider, PlaceThemeContext } from "./interfaces/theme";

import { Box, CssBaseline, Drawer } from "@mui/material";
import SideMenu from "./layout/SideMenu";
import TitleBar from "./layout/TitleBar";
import Content from "./layout/Content";

import "./styles/global.scss";

const drawerWidth = 240;

const App = () => {
  const [currentTheme, setNewTheme] = useReducer(ThemeReducer, {
    themeType: "light",
  });

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const themeContextProviderValue: IPlaceThemeProvider = {
    themeType: currentTheme.themeType,
    setNewTheme,
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  useEffect(() => {
    const body = document.body;

    if (currentTheme.themeType == "light") {
      body.style.backgroundColor = "#fffefb";
    } else {
      body.style.backgroundColor = "#0f1626";
    }

    return () => {
      body.style.backgroundColor = "";
    };
  }, [currentTheme]);

  return (
    <div>
      <PlaceThemeContext.Provider value={themeContextProviderValue}>
        <Router />
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <TitleBar handleDrawerToggle={handleDrawerToggle} />
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onTransitionEnd={handleDrawerTransitionEnd}
              onClose={handleDrawerClose}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              <SideMenu />
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              <SideMenu />
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Content>
              <h1>a</h1>
            </Content>
          </Box>
        </Box>
      </PlaceThemeContext.Provider>
    </div>
  );
};

export default App;
