import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setActualPage, setActualTitle } from "../../store/slices/layoutSlice";

import "../../styles/pages/Backends/AuthUserPage.scss";

const AuthUserPage = () => {
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
          <p>Github repository: </p>
          <Link to={"https://github.com/fernandoG494/auth-users.git"}>
            https://github.com/fernandoG494/auth-users.git
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
