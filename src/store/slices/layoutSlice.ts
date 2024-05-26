import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutState {
  actualPage: string;
}

const determineInitialPage = (): string => {
  const currentPath = window.location.pathname;
  const validPaths = ["/about-me", "/front-projects", "/back-projects"];

  return validPaths.includes(currentPath) ? currentPath : "/";
};

const initialState: LayoutState = {
  actualPage: determineInitialPage(),
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setActualPage(state, action: PayloadAction<string>) {
      state.actualPage = action.payload;
    },
  },
});

export const { setActualPage } = layoutSlice.actions;
export default layoutSlice.reducer;
