import { configureStore } from "@reduxjs/toolkit";

import mobileView  from "./mobileView";
export const store = configureStore({
  reducer: {
    mobileView:mobileView
  },
});
