import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setActualPage, setActualTitle } from "../../store/slices/layoutSlice";

const AuthUserPage = () => {
  const dispatcher = useDispatch();

  return (
    <div>
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
    </div>
  );
};

export default AuthUserPage;
