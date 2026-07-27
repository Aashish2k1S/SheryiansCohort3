import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
    addStudent,
    updateStudent,
    clearEditingStudent,
} from "../redux/features/students/studentSlice";
import { toast } from "react-toastify";

const StudentForm = () => {
    const dispatch = useDispatch();

    const editingStudent = useSelector(
        (state) => state.students.editingStudent,
    );

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (editingStudent) {
            reset(editingStudent);
        }
    }, [editingStudent, reset]);

    const onSubmit = (data) => {
        if (editingStudent) {
            dispatch(
                updateStudent({
                    ...editingStudent,
                    ...data,
                }),
            );

            toast.success("Student updated successfully!");

            dispatch(clearEditingStudent());
        } else {
            dispatch(
                addStudent({
                    id: Date.now(),
                    ...data,
                }),
            );

            toast.success("Student added successfully!");
        }

        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow rounded-xl p-6 space-y-4"
        >
            <h2 className="text-xl font-semibold">Add Student</h2>

            {/* Name */}
            <div>
                <input
                    type="text"
                    placeholder="Student Name"
                    className="w-full border rounded-lg p-3"
                    {...register("name", {
                        required: "Name is required",
                    })}
                />

                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                    </p>
                )}
            </div>

            {/* Email */}
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded-lg p-3"
                    {...register("email", {
                        required: "Email is required",
                    })}
                />

                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* Roll Number */}
            <div>
                <input
                    type="text"
                    placeholder="Roll Number"
                    className="w-full border rounded-lg p-3"
                    {...register("rollNumber", {
                        required: "Roll Number is required",
                    })}
                />

                {errors.rollNumber && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.rollNumber.message}
                    </p>
                )}
            </div>

            {/* Department */}
            <div>
                <select
                    className="w-full border rounded-lg p-3"
                    {...register("department")}
                >
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="IT">IT</option>
                    <option value="Mechanical">Mechanical</option>
                </select>
            </div>

            {/* Status */}
            <div>
                <select
                    className="w-full border rounded-lg p-3"
                    {...register("status")}
                >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700"
            >
                {editingStudent ? "Update Student" : "Add Student"}
            </button>
        </form>
    );
};

export default StudentForm;
