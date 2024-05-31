import { Route, Routes } from "react-router-dom";

import AboutMe from "../pages/AboutMe";
import FrontEndProjects from "../pages/FrontEndProjects";
import BackEndProjects from "../pages/BackEndProjects";
import ErrorPage from "../pages/ErrorPage";
import AuthUserPage from "../pages/Backends/AuthUserPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} errorElement={<ErrorPage />} />
      <Route
        path="/about-me"
        element={<AboutMe />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/front-projects"
        element={<FrontEndProjects />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/back-projects"
        element={<BackEndProjects />}
        errorElement={<ErrorPage />}
      />

      <Route path="/back-projects/auth-users" element={<AuthUserPage />} />

      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
