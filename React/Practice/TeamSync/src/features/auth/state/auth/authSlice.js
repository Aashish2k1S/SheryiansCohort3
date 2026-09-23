import { createSlice } from "@reduxjs/toolkit";
import { currentLoginEmployee, loginEmployee } from "./authAction";

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
    extraReducers: (builder) => {
        builder

            //for loginEmployee @POST "auth/login"
            .addCase(loginEmployee.pending, (state) => {
                // console.log('working on pendng');                
                state.isLoading = true;
            })
            .addCase(loginEmployee.fulfilled, (state, action) => {
                // console.log('working on fulfilled');
                state.isLoading = false;
                state.employee = action.payload;
            })
            .addCase(loginEmployee.rejected, (state) => {
                // console.log('working on rejected');
                state.isLoading = false;
                state.employee = null; 
            })

            //for currentLoginEmployee @GET "auth/me"
            .addCase(currentLoginEmployee.pending, (state) => {
                // console.log('working on pendng');                
                state.isLoading = true;
            })
            .addCase(currentLoginEmployee.fulfilled, (state, action) => {
                // console.log('working on fulfilled');
                state.isLoading = false;
                state.employee = action.payload;
            })
            .addCase(currentLoginEmployee.rejected, (state) => {
                // console.log('working on rejected');
                state.isLoading = false;
                state.employee = null; 
            });
    },
});

export let { addEmployee, removeEmployee } = authSlice.actions;
export default authSlice.reducer;
