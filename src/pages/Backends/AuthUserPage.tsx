import { Stack, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ReactSVG } from "react-svg";
import { setActualPage, setActualTitle } from "../../store/slices/layoutSlice";
import GitHubLogo from "../../assets/svgs/github.svg";

import "../../styles/pages/Backends/AuthUserPage.scss";
import { useContext } from "react";
import { PlaceThemeContext } from "../../interfaces/theme";

const AuthUserPage = () => {
  const { themeType } = useContext(PlaceThemeContext);

  const linkedInLogoColor = (themeType: string) => {
    if (themeType == "light") {
      return "#181717";
    } else {
      return "#F9F3ED";
    }
  };

  const dispatcher = useDispatch();

  return (
    <div>
      <Stack direction={"column"}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <h3>Auth users</h3>
          <Link
            to="/back-projects"
            onClick={() => {
              dispatcher(setActualPage("/back-projects"));
              dispatcher(setActualTitle("Back end projects"));
            }}
          >
            Back to projects
          </Link>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Link to="https://github.com/fernandoG494" target="_blank">
            <ReactSVG
              src={GitHubLogo}
              beforeInjection={(svg) => {
                svg.setAttribute("style", "width: 30px;");
                svg
                  .querySelector("path")!
                  .setAttribute("fill", linkedInLogoColor(themeType));
              }}
            />
          </Link>
        </Stack>
        <Typography variant="h6">Description</Typography>
        This project provides a streamlined back-end user authentication system
        built with NestJS, TypeScript, and Dockerized MongoDB.
      </Stack>
    </div>
  );
};

export default AuthUserPage;
