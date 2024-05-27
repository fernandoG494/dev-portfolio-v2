import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ILayoutState } from "../../interfaces/redux";

const determineInitialPage = (): string => {
  const currentPath = window.location.pathname;
  const validPaths = ["/about-me", "/front-projects", "/back-projects"];

  return validPaths.includes(currentPath) ? currentPath : "/";
};

const determineInitialTitle = (): string => {
  const currentPath = determineInitialPage();

  if (currentPath == "/" || currentPath == "/about-me") {
    return "About me";
  } else if (currentPath == "/front-projects") {
    return "Front end projects";
  }
  if (currentPath == "/back-projects") {
    return "Back end projects";
  }
  return "Error page";
};

const initialState: ILayoutState = {
  actualPage: determineInitialPage(),
  actualTitle: determineInitialTitle(),
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setActualPage(state, action: PayloadAction<string>) {
      state.actualPage = action.payload;
    },
    setActualTitle(state, action: PayloadAction<string>) {
      state.actualTitle = action.payload;
    },
  },
});

export const { setActualPage, setActualTitle } = layoutSlice.actions;
export default layoutSlice.reducer;
