import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../configs/apiInstance";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk(
    "auth/login",
    async (credentials, thunkApi) => {
        try {
            // console.log('thunk action working', credentials);

            let res = await api.post("/auth/login", credentials);
            // console.log(res);
            localStorage.setItem(
                "accessToken",
                JSON.stringify(res.data.accessToken),
            );

            toast.success("Login successful");
            return res.data;
        } catch (error) {
            console.log("error in authAPI/loginUserAPI:", error);
            toast.error("Login failed");
            return thunkApi.rejectWithValue("login failed from authAction");
        }
    },
);

export const hydrateUserAction = createAsyncThunk(
    "auth/me",
    async (_, thunkApi) => {
        try {
            let accessToken = JSON.parse(localStorage.getItem("accessToken"));
            if (!accessToken) {
                throw new Error("No access token found");
            }
            let res = await api.get("/auth/me", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            let credentials = {
                username: res.data.username,
                password: res.data.password,
            };

            res = await api.post("/auth/login", credentials);
            // console.log(res);
            localStorage.setItem(
                "accessToken",
                JSON.stringify(res.data.accessToken),
            );
            return res.data;            
        } catch (error) {
            console.log("error in authAPI/hydrationUserAPI:", error);
            // toast.error("Unauthorized User");
            return thunkApi.rejectWithValue("hydration failed from authAction");
        }
    },
);
