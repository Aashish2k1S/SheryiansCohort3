import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, setEditingStudent } from "../redux/features/students/studentSlice";
import { Pencil, Trash2 } from "lucide-react";

const StudentCard = ({ student }) => {
    const dispatch = useDispatch();

    let students = useSelector((state) => state.student.students);

    const handleDelete = () => {
        dispatch(deleteStudent(student.id));
    };

    const handleEdit = () => {
        let arr = students.filter(one => one !== student);
        dispatch(setEditingStudent({ student, arr }));
    };

    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{student.name}</h3>

                <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${student.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                >
                    {student.status}
                </span>
            </div>

            <div className="mt-4 space-y-2 text-gray-600">
                <p>
                    <strong>Email:</strong> {student.email}
                </p>

                <p>
                    <strong>Roll No:</strong> {student.rollNumber}
                </p>

                <p>
                    <strong>Department:</strong> {student.department}
                </p>
            </div>

            <div className="mt-5 flex gap-3">
                <button onClick={handleEdit}
                    className="flex items-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600">
                    <Pencil size={18} />
                    Edit
                </button>

                <button
                    onClick={handleDelete}
                    className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                    <Trash2 size={18} />
                    Delete
                </button>
            </div>
        </div>
    );
};

export default StudentCard;
