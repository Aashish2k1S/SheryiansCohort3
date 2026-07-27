import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: [],
    search: "",
    filter: "All",
    editingStudent: null,
};

const studentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        addStudent: (state, action) => {
            state.students.push(action.payload);
        },

        updateStudent: (state, action) => {
            const index = state.students.findIndex(
                (student) => student.id === action.payload.id,
            );

            if (index !== -1) {
                state.students[index] = action.payload;
            }
        },

        deleteStudent: (state, action) => {
            state.students = state.students.filter(
                (student) => student.id !== action.payload,
            );
        },

        setSearch: (state, action) => {
            state.search = action.payload;
        },

        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setEditingStudent: (state, action) => {
            state.editingStudent = action.payload;
        },

        clearEditingStudent: (state) => {
            state.editingStudent = null;
        },
    },
});

export const {
    addStudent,
    updateStudent,
    deleteStudent,
    setSearch,
    setFilter,
    setEditingStudent,
    clearEditingStudent,
} = studentSlice.actions;

export default studentSlice.reducer;
