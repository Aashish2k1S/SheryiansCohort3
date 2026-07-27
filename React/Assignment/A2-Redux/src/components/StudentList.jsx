import { useSelector } from "react-redux";
import StudentCard from "./StudentCard";

const StudentList = () => {
    const { students, search, filter } = useSelector((state) => state.student);

    const searchQuery = search.trim().toLowerCase();

    const filteredStudents = students.filter((student) => {
        const name = (student.name || "").toLowerCase();
        const email = (student.email || "").toLowerCase();
        const rollNumber = (student.rollNumber || "").toLowerCase();

        const matchesSearch =
            name.includes(searchQuery) ||
            email.includes(searchQuery) ||
            rollNumber.includes(searchQuery);

        const matchesFilter =
            filter === "All" ||
            student.status === filter ||
            student.department === filter;

        return matchesSearch && matchesFilter;
    });
    

    return (
        <section className="mt-8">
            {filteredStudents.length === 0 ? (
                <div className="rounded-xl border border-dashed p-8 text-center">
                    <h2 className="text-xl font-semibold">No Students Found</h2>

                    <p className="mt-2 text-gray-500">
                        {students.length === 0
                            ? "Add your first student using the form above."
                            : "No students match your search or filter."}
                    </p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredStudents.map((student) => (
                        <StudentCard key={student.id} student={student} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default StudentList;
