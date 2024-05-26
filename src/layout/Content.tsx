import { useContext } from "react";

import "../styles/layout/Content.scss";
import { PlaceThemeContext } from "../interfaces/theme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Content = ({ children }: any) => {
  const { themeType } = useContext(PlaceThemeContext);

  return <div className={`Content-margin ${themeType}`}>{children}</div>;
};

export default Content;
