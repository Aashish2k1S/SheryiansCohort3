import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

let authSlice = createSlice({
    name: "auth",
    initialState: {
        employee: null,
        isLoading: false,
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employee = action.payload;
            state.isLoading = false;
        },
        removeEmployee: (state) => {
            state.employee = null;
            state.isLoading = false;
        },
    },
});

export let { addEmployee, removeEmployee } = authSlice.actions;
export default authSlice.reducer;