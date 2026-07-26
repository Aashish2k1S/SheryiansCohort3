import { createSlice } from "@reduxjs/toolkit";


export const counter = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value = (state.value) ? state.value - 1 : 0
        },
        incrementByAmount: (state, action) => {
            // console.log(action.payload);
            // console.log(action.type);
            state.value += action.payload
        }
    }
});

export const { increment, decrement, incrementByAmount } = counter.actions;
export default counter.reducer; 