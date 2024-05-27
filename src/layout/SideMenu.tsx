// src/layout/SideMenu.tsx
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ISection } from "../interfaces/data";
import { Sections } from "../data/section-data";
import { ISideMenu } from "../interfaces/layout";
import IconSelector from "../components/IconSelector";
import { PlaceThemeContext } from "../interfaces/theme";
import { setActualPage, setActualTitle } from "../store/slices/layoutSlice";

import "../styles/layout/SideMenu.scss";

const SideMenu = ({ handleDrawerClose }: ISideMenu) => {
  const { themeType } = useContext(PlaceThemeContext);
  const dispatch = useDispatch();

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
              dispatch(setActualPage(route!));
              dispatch(setActualTitle(title));
            }}
            key={title}
          >
            <ListItem disablePadding>
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
      <Divider
        orientation="horizontal"
        variant="middle"
        flexItem
        sx={{ bgcolor: "#646e74" }}
      />

      <Typography
        style={{
          fontWeight: "lighter",
          margin: "1vh 2vh",
          fontSize: "14px",
          color: "grey",
          textAlign: "center",
        }}
      >
        This is a on-build page, multiple updates and projects highlights are to
        come.
      </Typography>
    </div>
  );
};

export default SideMenu;
