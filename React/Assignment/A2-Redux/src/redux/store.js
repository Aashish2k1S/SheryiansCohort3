import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./features/students/studentSlice.js";

export const store = configureStore({
    reducer: {
        student: studentReducer,
    },
});
