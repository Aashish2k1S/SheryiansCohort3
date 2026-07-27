import { createSlice } from "@reduxjs/toolkit";
import { loadStudents, saveStudents } from "../../../utils/localstorage.js";
import { toast } from "react-toastify";

const initialState = {
    students: loadStudents(),
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
            saveStudents(state.students);
        },

        updateStudent: (state, action) => {
            const index = state.students.findIndex(
                (student) => student.id === action.payload.id,
            );

            if (index !== -1) {
                state.students[index] = action.payload;
                saveStudents(state.students);
            }
        },

        deleteStudent: (state, action) => {
            state.students = state.students.filter(
                (student) => student.id !== action.payload,
            );
            saveStudents(state.students);
            toast.success("Student deleted successfully!");
        },

        setSearch: (state, action) => {
            state.search = action.payload;
        },

        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setEditingStudent: (state, action) => {
            let {arr, student} = action.payload;
            state.students = arr;                    
            state.editingStudent = student;
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
