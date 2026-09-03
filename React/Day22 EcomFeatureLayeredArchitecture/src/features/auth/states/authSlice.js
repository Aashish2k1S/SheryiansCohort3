import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: false,
        isLoading: true
    }, 
    reducers: {
        addUser: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            // console.log(action.payload.accessToken);            
            localStorage.setItem('accessToken', JSON.stringify(action.payload.accessToken));
            state.isLoading = false;
        }, 
        removeUser: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.isLoading = false;
        },
    },
}); 

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;