import { configureStore } from "@reduxjs/toolkit";
import { filterJobsReducer } from "./reduxSlices/filterJobsSlice";

export const reduxStore = configureStore({
  reducer: { filterJobs: filterJobsReducer },
});
